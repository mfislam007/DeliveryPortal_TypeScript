import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import "./ProjectCard.scss";

type Props = {
  id: number | string; //  NOTE  (Roman Bezusiak) [ Shouldn't it be just a `string`? ]
  title: string;
  owner: string;
  tags?: { id: number; name: string }[];
};

const ProjectCard: React.FC<Props> = (props): JSX.Element => {
  const [owner, setOwner] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0 as number | string);
  const [tagElements, setTagElements] = useState(undefined as JSX.Element[]);
  const { path } = useRouteMatch();
  let history = useHistory();

  useEffect(() => {
    setOwner(props.owner);
    setTitle(props.title);
    setId(props.id);

    if (props.tags) {
      setTagElements(
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
    <div className="project-card-container" onClick={handleOnClick}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Project"
            width="300"
            height="240"
            image="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectBCD/Pictures/PSBB_Showroom_PSR_view.jpg"
            title="Project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {owner}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Tooltip title={tagElements}>
            <LocalOfferIcon fontSize="small" />
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
