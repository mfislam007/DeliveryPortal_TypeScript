import * as React from "react";

const ProjectList: React.FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <span>Hello projects</span>
    </div>
  );
};

function util(s: string): string {
  return s + "!";
}

export default ProjectList;
