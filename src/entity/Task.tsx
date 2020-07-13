class Task {
  constructor(public _name: string) {
    this.name = _name;
  }
  name: string;
}

interface Task {
  name: string;
}

//empty export to get rid of TS error
export default Task;
