import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ViewListIcon from "@material-ui/icons/ViewList";
import { useHistory } from "react-router-dom";

import { addProject } from "../../controllers/ProjectController/ProjectController";

const templates = [
  {
    value: "Prima-Power Project",
    label: "Prima-Power Project",
  },
  {
    value: "Nokia Project",
    label: "Nokia Project",
  },
  {
    value: "Huawei project",
    label: "Huawei project",
  },
  {
    value: "Sony Project",
    label: "Sony Project",
  },
  {
    value: "ABB Project",
    label: "ABB Project",
  },
];

type Props = {
  projectName: string;
  customerName: string;
  managerName: string;
  projectTemplate: string;
};

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Transition = React.forwardRef<HTMLAnchorElement, SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddProject: React.FC = (): JSX.Element => {
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState<Props>({
    projectName: "",
    customerName: "",
    managerName: "",
    projectTemplate: "Prima-Power Project",
  });

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(project));
  }, [project]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeProject = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.currentTarget.id) {
      case "projectName":
        let tempProject = { ...project };
        tempProject.projectName = event.currentTarget.value;
        setProject(tempProject);
        setProject({
          projectName: event.currentTarget.value,
          customerName: project.customerName,
          managerName: project.managerName,
          projectTemplate: project.projectTemplate,
        });
        break;
      case "customerName":
        setProject({
          projectName: project.projectName,
          customerName: event.currentTarget.value,
          managerName: project.managerName,
          projectTemplate: project.projectTemplate,
        });
        break;

      case "managerName":
        setProject({
          projectName: project.projectName,
          customerName: project.customerName,
          managerName: event.currentTarget.value,
          projectTemplate: project.projectTemplate,
        });
        break;

      case "projectTemplate":
        setProject({
          projectName: project.projectName,
          customerName: project.customerName,
          managerName: project.projectName,
          projectTemplate: event.currentTarget.value,
        });
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    {
      alert(
        " Project Name: " +
          project.projectName +
          " , " +
          " Customer Name: " +
          project.customerName +
          " , " +
          " ProjectManager Name: " +
          project.managerName +
          " , " +
          " Project Template: " +
          project.projectTemplate +
          " are created "
      );
    }
    addProject(
      project.projectName,
      project.customerName,
      project.managerName,
      project.projectTemplate
    );
    event.preventDefault();
    setOpen(false);
    history.push("/deliveryportal");
  };

  const enabled =
    project.projectName.length > 3 &&
    project.customerName.length > 3 &&
    project.managerName.length > 3;

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="add to cart"
        onClick={handleClickOpen}
        style={{ marginTop: 0 }}
      >
        <AddIcon />
      </IconButton>

      <div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Add Delivery Project
              </Typography>
              <div>
                <Button autoFocus color="inherit" type="submit" form="my-form" disabled={!enabled}>
                  save
                </Button>
              </div>
            </Toolbar>
          </AppBar>

          <form onSubmit={handleSubmit} id="my-form">
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle style={{ marginTop: 20, marginLeft: 20 }} />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="projectName"
                    label="Project Name"
                    style={{ marginTop: 20, marginLeft: 20 }}
                    onChange={onChangeProject}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle style={{ marginTop: 20, marginLeft: 20 }} />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="customerName"
                    label="Customer Name"
                    style={{ marginTop: 20, marginLeft: 20 }}
                    onChange={onChangeProject}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle style={{ marginTop: 20, marginLeft: 20 }} />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="managerName"
                    label="ProjectManager Name"
                    style={{ marginTop: 20, marginLeft: 20 }}
                    onChange={onChangeProject}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <ViewListIcon style={{ marginTop: 20, marginLeft: 20 }} />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="projectTemplate"
                    select
                    label="Project Template"
                    value={project.projectTemplate}
                    onChange={onChangeProject}
                    fullWidth
                    style={{ marginTop: 20, marginLeft: 20 }}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {templates.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </div>
          </form>
        </Dialog>
      </div>
    </div>
  );
};
export default AddProject;
