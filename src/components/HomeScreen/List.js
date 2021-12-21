import React from "react";
import { Cards } from "./Cards";
import "./ListStyle.css";
import BottomCard from "./BottomCard";
import { Button } from "react-bootstrap";

const List = () => {
  return (
    <>
      <div
        className="topList"
        style={{
          height: "580px",
          width: "100%",
          marginTop: "20px",
        }}
      >
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
      <div style={{ position: "relative", top: "260px" }}>
        <Cards />
      </div>
      <div
        className="list"
        style={{
          height: "996px",
          width: "100%",
        }}
      ></div>
      <div style={{ position: "relative", top: "80px" }}>
        <BottomCard />
      </div>
    </>
  );
};

export default List;
