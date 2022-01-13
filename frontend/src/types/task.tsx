export interface task {
  id: number;
  title: string;
}
export interface tasks {
  tasks: task[];
}
export interface setTasks {
  setTasks: (task) => void;
}
