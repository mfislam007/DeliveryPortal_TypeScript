import React from "react";
import { useParams } from "react-router-dom";

const ProjectPhases: React.FC = (): JSX.Element => {
  const { id } = useParams();
  return <div id={id}>"Phase"-page for project {id}.</div>;
};

export default ProjectPhases;
