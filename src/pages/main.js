import React, { useState } from "react";
import shea from "../assets/shea.png";
import enriched from "../assets/essentially-enriched.png";
import aloe from "../assets/aloe-vera.png";
import cocoa from "../assets/cocoa-butter.png";
import creamy from "../assets/creamy.png";
import dots from "../assets/dots.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const imgs = shea;
  const imge = enriched;
  const imga = aloe;
  const imgc = cocoa;
  const creams = { imgs, imge, imga, imgc };
  const [selected, setSelected] = useState(creams.imge);

  const [bg, changeBGColor] = useState("#A4ACDA");
  const [col, changeColor] = useState("#fff");

  return (
    <div className="container">
      <div className="wrapper">
        <div className="side-a">
          <h1 className="side-a__h1">NIVEA</h1>
          <div className="dots-d">
            <img src={dots} className="dots" alt="dots"></img>
          </div>
        </div>
        <div
          className="side-b"
          style={{
            backgroundColor: bg,
          }}
        >
                      <img src={creamy} alt="" className="creamy-img"></img>
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
        <AnimatePresence>
          <motion.img src={selected} alt="" className="large-img" 
              key={{ selected }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              />
 </AnimatePresence>
          <div className="slider__links">
            <div className="link link__1">
              <img
                src={enriched}
                alt=""
                className="white-bg link__thumb"
                onClick={() => {
                  setSelected(creams.imge);
                  changeBGColor("#A4ACDA");
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
                  changeBGColor("#E5E5E5");
                  changeColor("#A4ACDA");
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
                  changeBGColor("#A4ACDA");
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
                  changeBGColor("#E5E5E5");
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
