class Task {
  constructor() {}

  name: string;
  description: string;
  actionStatusType: string;
  endTime: Date;
}

interface Task {
  name: string;
  description: string;
  actionStatusType: string;
  endTime: Date;
}

export default Task;
