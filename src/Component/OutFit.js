import { animated, useSpring } from "react-spring";

import React from "react";
import { changeOutFitAction } from "../redux/actions/DressingRoomAction";
import { useDispatch } from "react-redux";

export default function OutFit(props) {
  const dispatch = useDispatch();
  const [propsUseSpring, set] = useSpring(() => ({
    from: {
      visibility: "hidden",
      opacity: 1,
      top: "10%",
      right: "50%",
      scale: 1,
    },
    position: "absolute",
    config: { duration: 500 },
  }));
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <img src={props.outfit.imgSrc_jpg} alt={props.outfit.id} />
        <animated.div
          style={{
            visibility: propsUseSpring.visibility,
            opacity: propsUseSpring.opacity,
            top: propsUseSpring.top,
            right: propsUseSpring.right,
            transform: propsUseSpring.scale.interpolate((s) => `scale(${s})`),
            width: "200px",
            height: "200px",
            zIndex: "10",
            position: "fixed",
          }}
        >
          <img
            src={props.outfit.imgSrc_png}
            alt={props.outfit.imgSrc_png}
            style={{ width: "100%" }}
          />
        </animated.div>
        <h4>
          <b>{props.outfit.name}</b>
        </h4>
        <button
          onClick={() => {
            set({
              from: {
                visibility: "visible",
                opacity: 1,
              },
              to: async (next) => {
                await next({
                  visibility: "visible",
                  opacity: 1,
                  top: "25%",
                  right: "50%",
                  scale: 2,
                  config: { delay: 1000 },
                });
                await next({
                  visibility: "visible",
                  opacity: 0,
                  top: "20%",
                  right: "11%",
                  scale: 1,
                });
              },
            });
            setTimeout(() => {
              dispatch(changeOutFitAction(props.outfit.id));
            }, 1000);
          }}
        >
          Thử đồ
        </button>
      </div>
    </div>
  );
}
