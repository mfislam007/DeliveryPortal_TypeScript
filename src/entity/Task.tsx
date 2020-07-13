class Task {
  constructor() {}

  name: string;
  description: string;
  actionStatusType: string;
}

interface Task {
  name: string;
  description: string;
  actionStatusType: string;
}

//empty export to get rid of TS error
export default Task;
