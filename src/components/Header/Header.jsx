import React from "react";
// import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, InputBase, Toolbar, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Aadvisory
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Yop
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="search anything"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
