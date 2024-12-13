export type Priority = 'low' | 'med' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  deadline: string;
  priority: Priority;
  isComplete: boolean;
}