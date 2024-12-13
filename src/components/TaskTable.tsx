import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { TaskActions } from "./TaskActions";
import { Task } from "@/lib/types";

interface TaskTableProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskTable({ tasks, onToggleComplete, onUpdateTask, onDeleteTask }: TaskTableProps) {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'med':
        return 'text-yellow-500';
      default:
        return 'text-green-500';
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="w-[100px]">Complete</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{new Date(task.deadline).toLocaleDateString()}</TableCell>
              <TableCell>
                <span className={`capitalize ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={task.isComplete}
                  onCheckedChange={() => onToggleComplete(task.id)}
                />
              </TableCell>
              <TableCell>
                <TaskActions
                  task={task}
                  onUpdate={onUpdateTask}
                  onDelete={onDeleteTask}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}