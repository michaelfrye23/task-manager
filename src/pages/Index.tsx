import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddTaskDialog } from "@/components/AddTaskDialog";
import { TaskTable } from "@/components/TaskTable";
import { Task } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

export default function Index() {
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddTask = (newTask: Omit<Task, 'id'>) => {
    const task: Task = {
      ...newTask,
      id: Math.random().toString(36).substr(2, 9),
    };
    setTasks([...tasks, task]);
    toast({
      title: "Success",
      description: "Task added successfully",
    });
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    ));
  };

  const handleUpdateTask = (taskToUpdate: Task) => {
    // For now, we'll just log the update action
    console.log('Update task:', taskToUpdate);
    toast({
      title: "Info",
      description: "Update functionality will be implemented in the next version",
    });
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast({
      title: "Success",
      description: "Task deleted successfully",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>

      <TaskTable
        tasks={tasks}
        onToggleComplete={handleToggleComplete}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />

      <AddTaskDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddTask}
      />
    </div>
  );
}