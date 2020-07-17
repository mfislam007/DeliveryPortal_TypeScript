import React from "react";
import { useParams } from "react-router-dom";

import StreamElement from "../../../ProjectEventStream/StreamElement";

const ProjectStream: React.FC = (): JSX.Element => {
  const { id } = useParams();
  return <StreamElement id={id} />;
};

export default ProjectStream;
