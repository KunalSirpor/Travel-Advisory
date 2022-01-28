import { useState } from "react";
import {
  Typography,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants</Typography>
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
