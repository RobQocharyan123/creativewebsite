import React, { useReducer } from "react";
import { initialState, reducer } from "../../../reducer";
import "./Delivering.css";
import { actions } from "./../../../actions";

export const Delivering = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const supportOnclick = () => {
    dispatch({ type: actions.SUPPORT, payload: !state.support });
  };
  const salesOnclick = () => {
    dispatch({ type: actions.SALES, payload: !state.sales });
  };
  const driventOnclick = () => {
    dispatch({ type: actions.DRIVEN, payload: !state.driven });
  };
  const swaptOnclick = () => {
    dispatch({ type: actions.SWAP, payload: !state.swap });
  };

  return (
    <div className="delivering">
      <div className="delivering-first">
        <h3>Delivering good designs since 1954 🚚💨</h3>
        <p>
          We’re the first multi-purpose design kit solutions for businesses. We
          help you bridge gaps between your layouts, templates and developers to
          empower all involved.
        </p>
      </div>
      <div className="delivering-second">
        <div className="support">
          <img
            src={require("../../../assets/delivering/delivering-support.png")}
            alt="delivering-support"
          />
          <h3>Support</h3>
          <div className="delivering-text">
            <p>
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
              {state.support && (
                <p>
                  {" "}
                  Delivering faster and more personalized support with shared
                  screens and cool design systems for Figm
                </p>
              )}
            </p>
            <div className="button" onClick={supportOnclick}>
              <button className="bt">{state.support ? "Less" : "Learn more"}</button>
            </div>
          </div>
        </div>
        <div className="sales">
          <img
            src={require("../../../assets/delivering/delivering-sales.png")}
            alt="delivering-support"
          />
          <h3>Sales growth</h3>
          <div className="delivering-text">
            <p>
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
              {state.sales && (
                <p>
                  {" "}
                  Delivering faster and more personalized support with shared
                  screens and cool design systems for Figma
                </p>
              )}
            </p>
            <div className="button" onClick={salesOnclick}>
              <button className="bt">{state.sales ? "Less" : "Learn more"}</button>
            </div>
          </div>
        </div>
        <div className="driven">
          <img
            src={require("../../../assets/delivering/delivering-driven.png")}
            alt="delivering-support"
          />
          <h3>Coponents-driven</h3>
          <div className="delivering-text">
            <p>
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
              {state.driven && (
                <p>
                  {" "}
                  Delivering faster and more personalized support with shared
                  screens and cool design systems for Figma
                </p>
              )}
            </p>
            <div className="button" onClick={driventOnclick}>
              <button className="bt">{state.driven ? "Less" : "Learn more"}</button>
            </div>
          </div>
        </div>
        <div className="swap">
          <img
            src={require("../../../assets/delivering/delivering-swap.png")}
            alt="delivering-support"
          />
          <h3>Swap the icon</h3>
          <div className="delivering-text">
            <p>
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
              {state.swap && (
                <p>
                  {" "}
                  Delivering faster and more personalized support with shared
                  screens and cool design systems for Figma
                </p>
              )}
            </p>
            <div className="button" onClick={swaptOnclick}>
              <button className="bt">{state.swap ? "Less" : "Learn more"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
