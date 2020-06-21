import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import "./ProjectCard.css";

interface ITags {
  id: number;
  tag: string;
}

interface IProps {
  id: number;
  title: string;
  owner: string;
  tags?: ITags[];
}

function ProjectCard(props: IProps): JSX.Element {
  const [owner, setOwner] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [tagsElement, setTagsElement] = useState<JSX.Element[]>();
  const folderIcon = require("../assets/images/fo.png");
  const portraitIcon = require("../assets/images/po.png");
  const tagIcon = require("../assets/images/tag.png");
  const img3Icon = require("../assets/images/img3.png");
  //const { path } = useRouteMatch()
  let history = useHistory();

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

  //   const handleOnClick = () => {
  //     history.push("/CardholderRoute/projectid=" + id);
  //     console.log("Card " + id + " Clicked at " + path + "!");
  //   };

  return (
    <div className="projectCardContainer">
      <div className="projectCardTitle">
        <div className="cardTitle">{title}</div>
      </div>
      <div className="projectCard">
        <div className="cardOwner">{owner}</div>
      </div>
      <div className="projectCardFooter">
        <div className="cardTags">
          <img src={tagIcon} alt="tag icon" width="16" height="14" />
          Tags
          <span className="cardTagsTooltip">{tagsElement}</span>
        </div>
        <img src={portraitIcon} alt="po" />
        <img src={folderIcon} alt="fo" />
      </div>
      <div className="cardImage">
        <img src={img3Icon} alt="img" />
      </div>
    </div>
  );
}

export default ProjectCard;
