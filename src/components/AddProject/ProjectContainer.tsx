import React from "react";
interface Props {
  project: { name: string; customer: string; ProjectManager: string };
}

const ProjectContainer: React.FC<Props> = (props): JSX.Element => {
  return <div>{props.project.name}</div>;
};

export default ProjectContainer;
