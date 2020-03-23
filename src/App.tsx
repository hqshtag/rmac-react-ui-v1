import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";
const styles = makeStyles({
  buttonHolder: {
    position: "absolute",
    bottom: "27px"
  },
  caption: {
    position: "absolute",
    bottom: "9px",
    right: "10px",
    color: "#FFFFF0"
  }
});
function App() {
  function donateHandler() {
    let url: string =
      "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AYPNLZMSEQZRA&source=url";
    window.open(url);
    //console.log("ahah");
  }

  const classes = styles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Developement in proccess</p>

        <div className={classes.buttonHolder}>
          {" "}
          <Button variant="contained" onClick={() => donateHandler()}>
            Donate
          </Button>
        </div>
        <Typography className={classes.caption} variant="caption">
          being built by hqshtag with ♥
        </Typography>
      </header>
    </div>
  );
}

export default App;
