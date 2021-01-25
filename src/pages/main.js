import React, { useState } from "react";
import shea from "../assets/shea.png";
import enriched from "../assets/essentially-enriched.png";
import aloe from "../assets/aloe-vera.png";
import cocoa from "../assets/cocoa-butter.png";

export default function Main() {
  const imgs = shea;
  const imge = enriched;
  const imga = aloe;
  const imgc = cocoa;
  const creams = { imgs, imge, imga, imgc };
  const [selected, setSelected] = useState(creams.imge);

  const [bg, changeBGColor] = useState("#a6a7ec");
  const [col, changeColor] = useState("#fff");

  return (
    <div className="container">
      <div className="wrapper">
        <div className="side-a">
          <h1 className="side-a__h1">NIVEA</h1>
          <div className="dots-design"></div>
        </div>
        <div
          className="side-b"
          style={{
            backgroundColor: bg,
          }}
        >
          <div className="side-b__wrapper">
            <h3 className="side-b__heading">
              <span
                className="h3__1"
                style={{
                  color: col
                }}
              >
                SOFT
              </span>
              <span className="h3__2">SMOOTH</span>
              <span className="h3__3">NOURISHING</span>
            </h3>
            <div className="teardrop"></div>

            <p className="desc">Made with special ingredients</p>
            <div className="circle-wrapper">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="slider__wrapper">
          <img src={selected} alt="" className="large-img"></img>
          <div className="slider__links">
            <div className="link link__1">
              <img
                src={enriched}
                alt=""
                className="white-bg link__thumb"
                onClick={() => {
                  setSelected(creams.imge);
                  changeBGColor("#a6a7ec");
                  changeColor("#fff");
                }}
              ></img>
              <p className="white link__title">Enriched</p>
            </div>
            <div className="link link__2">
              <img
                src={cocoa}
                alt=""
                className="off-bg link__thumb"
                onClick={() => {
                  setSelected(creams.imgc);
                  changeBGColor("#fff");
                  changeColor("#a6a7ec");
                }}
              ></img>
              <p className="white link__title">Cocoa</p>
            </div>
            <div className="link link__3">
              <img
                src={shea}
                alt=""
                className="white-bg link__thumb"
                onClick={() => {
                  setSelected(creams.imgs);
                  changeBGColor("#a6a7ec");
                  changeColor("#fff");
                }}
              ></img>
              <p className="blue link__title">Shea</p>
            </div>
            <div className="link link__4">
              <img
                src={aloe}
                alt=""
                className="off-bg link__thumb"
                onClick={() => {
                  setSelected(creams.imga);
                  changeBGColor("#fff");
                  changeColor("#a6a7ec");
                }}
              ></img>
              <p className="blue link__title">Aloe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
