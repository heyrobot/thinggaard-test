import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";

const Participant = ({ participant }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  const [select, setSelect] = useState(0);
  const [select1, setSelect1] = useState(0);
  const [select2, setSelect2] = useState(0);

  const [value, setValue] = React.useState("nej");

  console.log(
    "🚀 ~ file: Participant.js ~ line 4 ~ Participant ~ participant",
    participant
  );

  return (
    <li className="flex flex-col md:flex-row md:flex-wrap mx-auto space-x-2 border-b-2	border-gray-200">
      <TextField
        id="name"
        label="name"
        variant="outlined"
        type="text"
        name="name"
      />
      <TextField
        id="age"
        label="age"
        variant="outlined"
        type="number"
        name="age"
      />
      <FormControl variant="outlined">
        <InputLabel id="køn">Køn</InputLabel>
        <Select
          id="køn"
          label="køn"
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <MenuItem disabled value="0">
            -- Køn --
          </MenuItem>
          <MenuItem value="1">Mand</MenuItem>
          <MenuItem value="2">Kvinde</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="liftkort">Liftkort</InputLabel>
        <Select
          id="liftkort"
          value={select1}
          onChange={(e) => {
            setSelect1(e.target.value);
          }}
        >
          <MenuItem disabled value="0">
            -- Vælg --
          </MenuItem>
          {participant?.services.map((item) => {
            if (item.service_group_id == 1) {
              return (
                <MenuItem
                  key={item.service_price_id}
                  value={item.service_price_id}
                >
                  {item.description}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="Parking">Parking</InputLabel>
        <Select
          id="Parking"
          value={select2}
          onChange={(e) => {
            setSelect2(e.target.value);
          }}
        >
          <MenuItem disabled value="0">
            -- Vælg --
          </MenuItem>
          {participant?.services.map((item) => {
            if (item.service_group_id == 66) {
              return (
                <MenuItem value={item.service_price_id}>
                  {item.description}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
    </li>
  );
};

export default Participant;
