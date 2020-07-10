import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import usersIcon from "../../assets/images/project-card/users-icon.png";
import tagsIcon from "../../assets/images/project-card/tag-icon.png";
import filesIcon from "../../assets/images/project-card/files-icon.png";
import phIcon from "../../assets/images/project-card/ph-icon.png";
import "./ProjectCard.scss";

type Props = {
  id: number | string;
  title: string;
  owner: string;
  tags?: { id: number; name: string }[];
};

function parsePhaseName(url: string): string {
  if (url.lastIndexOf("/") == null) return url;
  else {
    url = url.substring(0, url.length - 1);
    return url.substring(url.lastIndexOf("/") + 1, url.length);
  }
}

const ProjectCard: React.FC<Props> = (props): JSX.Element => {
  const [owner, setOwner] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0 as number | string);
  const [tagsElement, setTagsElement] = useState(undefined as JSX.Element[]);
  const { path } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    setOwner(props.owner);
    setTitle(props.title);
    setId(encodeURIComponent(props.id));
    if (props.tags) {
      setTagsElement(
        props.tags.map(tag => (
          <div className="tagDiv" key={tag.id.toString()}>
            {tag.name}
          </div>
        ))
      );
    }
  }, [props]);

  const handleOnClick = (): void => {
    history.push(path + "projectid=" + id);
  };

  return (
    <div className="projectCardContainer" onClick={handleOnClick}>
      <div className="projectCardTitle">
        <div className="cardTitle">{parsePhaseName(title)}</div>
      </div>
      <div className="projectCard">
        <div className="cardOwner">{owner}</div>
      </div>
      <div className="projectCardFooter">
        <div className="cardTags">
          <img src={tagsIcon} alt="tag icon" width="16" height="14" />
          Tags
          <span className="cardTagsTooltip">{tagsElement}</span>
        </div>
        <img src={usersIcon} alt="users" />
        <img src={filesIcon} alt="files" />
      </div>
      <div className="cardImage">
        <img src={phIcon} alt="card" />
      </div>
    </div>
  );
};

export default ProjectCard;
