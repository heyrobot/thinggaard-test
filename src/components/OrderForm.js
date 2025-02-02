import { TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import globalContext from "../context/global/globalContext";
import { useStyles } from "../styles";
import Participant from "./Participant";

const OrderForm = ({ tailwindCSS }) => {
  const classes = useStyles();
  const { order } = useContext(globalContext);
  console.log("🚀 ~ file: OrderForm.js ~ line 8 ~ OrderForm ~ order", order);

  return (
    <div className={` ${tailwindCSS}`}>
      <h2 className="bg-gray-100 p-4 text-4xl text text-center font-bold text-themeColor mb-4 rounded shadow">
        Deltagere
      </h2>
      <form className="">
        <div className="p-2 shadow">
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
          />
        </div>
        <ul className="mt-4 space-y-3 ">
          {order?.participants.map((item, index) => (
            <Participant key={index} participant={item} personCount={index} />
          ))}
        </ul>
      </form>
    </div>
  );
};

export default OrderForm;
