import React, { useState, useEffect } from "react";
import usersIcon from "../../assets/images/projectcard/users.png";
import tagsIcon from "../../assets/images/projectcard/tag.png";
import filesIcon from "../../assets/images/projectcard/files.png";
import phIcon from "../../assets/images/projectcard/phicon1.png";
import "./ProjectCard.css";

type cardProps = {
  id: number;
  title: string;
  owner: string;
  tags?: { id: number; tag: string }[];
};

const ProjectCard: React.FC<cardProps> = (props: cardProps): JSX.Element => {
  const [owner, setOwner] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [tagsElement, setTagsElement] = useState<JSX.Element[]>();

  useEffect(() => {
    setOwner(props.owner);
    setTitle(props.title);
    setId(props.id);
    if (props.tags) {
      setTagsElement(
        props.tags.map(tag => (
          <div className="tagDiv" key={tag.id + ""}>
            {tag.tag}
          </div>
        ))
      );
    }
  }, [props]);

  const handleOnClick = () => {
    /* Add link to projects own page. */
  };

  return (
    <div className="projectCardContainer" onClick={handleOnClick}>
      <div className="projectCardTitle">
        <div className="cardTitle">{title}</div>
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
        <img src={phIcon} alt="img" />
      </div>
    </div>
  );
};

export default ProjectCard;
