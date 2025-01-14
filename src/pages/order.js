import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OrderForm from "../components/OrderForm";
import OrderTotal from "../components/OrderTotal";
import globalContext from "../context/global/globalContext";

const Order = () => {
  const history = useHistory();
  const { order } = useContext(globalContext);

  //   useEffect(() => {
  //     if (order === null) {
  //       history.replace("/");
  //     }
  //   }, []);

  return (
    <>
      <div className="md:flex">
        <OrderForm tailwindCSS="md:w-8/12 md:p-2" />
        <OrderTotal tailwindCSS="md:w-4/12 md:m-2" />
      </div>
      {/* <pre>{JSON.stringify(order, null, 2)}</pre> */}
    </>
  );
};

export default Order;
