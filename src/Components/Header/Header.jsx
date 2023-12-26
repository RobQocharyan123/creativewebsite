import React, { useState, useEffect,useReducer } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "./../../../node_modules/react-icons/rx/index.esm";
import { IoMdCloseCircle } from "./../../../node_modules/react-icons/io/index.esm";
import { reducer, initialState } from './../../reducer';
import { actions } from './../../actions';

export const Header = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    const handleWindowResize = () => {
      // setWindowSize(window.innerWidth);
      dispatch({type:actions.WINDOWSIZE,payload:window.innerWidth})
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  const clickBurger = ()=>{
    dispatch({type:actions.BURGER,payload:true})
  }

  const clickBurgerClose = ()=>{
    dispatch({type:actions.BURGER,payload:false})
  }
  console.log(state.burger);
  return (
    <div className="header">
      <div className="navbar">
        <RxHamburgerMenu className="burger" onClick={clickBurger} />
        {(state.burger || state.windowSize>860) &&
          <nav>
          <IoMdCloseCircle className="close" onClick={clickBurgerClose} />
 
          <ul>
            <li>
              <a href="/work">How it works</a>
            </li>
            <span className="arrow"></span>
            <li>
              <a href="/are">Who we are</a>
            </li>
            <span className="arrow"></span>
            <li>
              <a href="/do">What we do</a>
            </li>
            <span className="arrow"></span>
            <li>
              <a href="/contact">Contact us</a>
            </li>
          </ul>
        </nav>
        
        }
       
       
        <div className="logo">
          <img
            src={require("../../assets/header-img/logo1.png")}
            alt="logoOne"
            className="logo1"
          />
          {state.windowSize<400 ? <img
             src={require("../../assets/header-img/Grid-small.png")}
             alt="Grid"
             className="grid"
           />:
             <img
             src={require("../../assets/header-img/Grid.png")}
             alt="Grid"
             className="grid"
           />
          }
         
        </div>
      </div>

      <div className="button">
        <button>Sign In</button>
      </div>
    </div>
  );
};
