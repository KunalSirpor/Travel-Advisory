import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@material-ui/core"; //useMediaQuery;
import { Rating } from "@material-ui/lab";
import { LocationOnOutlined } from "@material-ui/icons/LocationOnOutlined";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();

  const coordinates = { lat: -23.5489, lng: -46.6388 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={""}
        onChnage={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
