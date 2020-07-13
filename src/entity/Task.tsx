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

//empty export to get rid of TS error
export default Task;
