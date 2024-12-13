import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Task } from "@/lib/types";

interface TaskActionsProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function TaskActions({ task, onUpdate, onDelete }: TaskActionsProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onUpdate(task)}
        className="h-8 w-8 p-0"
      >
        <Pencil className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onDelete(task.id)}
        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}