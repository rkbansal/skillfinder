import React from "react";
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import "./index.scss";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

function Registarion(props){
  const { classes } = props;
  return(
    <div className="registration">
      <div className="heading">Register your Skill with our Database Community</div>
      <div className="form">
        <div className="left">
        <TextField
          id="product-name"
          label="Product Name"
          className={classNames(classes.margin, "register-input")}
          variant="outlined"
        />
        <TextField
          id="voice-platform"
          label="Voice Platform"
          className={classNames(classes.margin, "register-input")}
          variant="outlined"
        />
        <TextField
          id="category"
          label="Category"
          className={classNames(classes.margin, "register-input")}
          variant="outlined"
        />
        <TextField
          id="website-download-link"
          label="Website / Download Link"
          className={classNames(classes.margin, "register-input")}
          variant="outlined"
        />
        </div>
        <div className="right">
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="6"
            className={classNames(classes.margin, "register-input", "textbox")}
            // margin="normal"
            variant="outlined"
          />
          <TextField
            id="search-keywords"
            label="Search Keywords"
            type="search"
            className={"register-input"}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className="div-register">
          <button className="btn-register">REGISTER YOUR SKILL</button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Registarion);