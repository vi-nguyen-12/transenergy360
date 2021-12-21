import React from "react";
import { Cards } from "./Cards";
import "./ListStyle.css";
import BottomCard from "./BottomCard";
import { Button } from "react-bootstrap";

const List = () => {
  return (
    <>
      <div className="list-banner">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              width: "80%",
              textAlign: "center",
              color: "#252161",
              fontSize: "60px",
            }}
          >
            HIGH CARBON FOOTPRINT GAS PROCESSING PHASE NOW REDUNDANT
          </h1>
        </div>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod incident ut laoreet dolore magna aliquam erat
          volutpat.
        </h4>
      </div>

      <div className="list-banner-sub">
        <div className="top-cards">
          <Cards />
        </div>
        <div className="bottom-cards">
          <BottomCard />
        </div>
      </div>
    </>
  );
};

export default List;
