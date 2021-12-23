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
              color: "white",
              fontSize: "60px",
              fontWeight: "bolder",
              fontFamily: "proxima-nova",
              marginTop: "20px",
            }}
          >
            TRANSFORMING THE ENERGY LANDSCAPE USING LOW CARBON POWER GENERATION
            TECHNOLOGY
          </h1>
        </div>
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            color: "white",
            fontFamily: "Proxima Nova",
            marginTop: "20px",
          }}
        >
          The introduction of REHM, ARCS, and SWERS technologies into the
          landscape will create a better future for the energy industry.
        </h4>
      </div>

      <div className="list-banner-sub">
        <div className="top-cards">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default List;
