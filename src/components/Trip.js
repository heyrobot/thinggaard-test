import { Link } from "react-router-dom";
import React, { useContext } from "react";
import CarouselComponent from "./CarouselComponent";
import { SET_CURRENT_TRIP } from "../context/types";
import globalContext from "../context/global/globalContext";

const Trip = ({ trip }) => {
  const { dispatch } = useContext(globalContext);
  const {
    destination_name,
    return_date,
    travel_length,
    room_description,
    minimum_price,
    post,
    accomodation_code,
    period_id,
  } = trip;

  if (!post) {
    return null;
  }

  return (
    <div className="m-4 shadow md:flex">
      <CarouselComponent images={post.meta.gallery_settings} />
      <Link
        onClick={() =>
          dispatch({
            type: SET_CURRENT_TRIP,
            payload: trip,
          })
        }
        to={`hotel/${accomodation_code}/${period_id}`}
        className="block md:w-7/12"
      >
        <div className="p-3 ">
          <h2 className="mb-2 text-themeColor font-semibold text-xl">
            {post?.post_title},
            <span className="ml-2 text-gray-500 font-normal text-sm">
              {destination_name}
            </span>
          </h2>

          <p>{room_description}</p>

          {post?.meta?.hotel_beskrivelse && (
            <div
              className="hotel_beskrivelse--reduceret"
              dangerouslySetInnerHTML={{
                __html: post?.meta?.hotel_beskrivelse,
              }}
            ></div>
          )}

          <div className="flex justify-between">
            <div>
              <p>Rejselængde: {travel_length}</p>
              <p className="m-0">Hjemrejse: {return_date}</p>
            </div>
            <p className="m-0 self-end text-red-500 font-black text-right">{`Pris: ${minimum_price} kr.`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Trip;

// <Link to="/hotel/details" className="p-4 flex flex-col space-y-6 "></Link>
