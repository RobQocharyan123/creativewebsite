import React, { useReducer, useRef } from "react";
import { reducer } from "../../../reducer";
import "./FineImages.css";
import { initialState } from "./../../../reducer";
import { actions } from "./../../../actions";
import { FaArrowDown } from "react-icons/fa";

export const FineImages = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const learnMoreClick = () => {
    dispatch({ type: actions.LEARN_MORE, payload: !state.learnMore });
  };

  const buttonRef = useRef(null);
  const footerRef = useRef(null);

  const handleClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fineImages" >
      <img
        src={require("../../../assets/fineImages/fineImages-logo-small.png")}
        alt="fineImages"
        className="logo2"
      />

      <div className="fineImages-title">
        <img
          src={require("../../../assets/fineImages/fineImages-background.png")}
          alt="fineImages-background"
        />
        <p className="fineP">
          Combine <span className="fineP-span">fine</span> images
        </p>
        <p className="fineP">To represent a product</p>
      </div>
      
      <div className="news">
        <div className="first-div-section">
          <div className="div1">
            <p className="div1-text">
              Use mixed grid with imagery, replace with your own photos and
              descriptions
            </p>
          </div>

          <div className="div2">
            <img
              src={require("../../../assets/fineImages/background-1.png")}
              alt="background1"
            />
            <p>
              We aimed to deliver HQ templates for Figma{" "}
              <span> Used by 123 people</span>
            </p>
          </div>
        </div>

        <div className="section-divs">
          <div className="second-div-section">
            <div className="div3">
              <img
                src={require("../../../assets/fineImages/background-2.png")}
                alt="background2"
              />
              <p>Consider it done!</p>
            </div>

            <div className="three-section-div">
              <div className="div4">
                <p>
                  This is multipurpose grid, it fits for portfolio, services or
                  agency web site
                </p>
              </div>
                <div className="forandfivedivs">

                <div className="div5">
                  <img
                    src={require("../../../assets/fineImages/background-3.png")}
                    alt="background-3"
                  />
              </div>

              <div className="div6">
                <img
                  src={require("../../../assets/fineImages/background-4.png")}
                  alt="background-4"
                />
              </div>
                </div>
              
            </div>
          </div>

          <div className="for-div-section">
            <div className="div7">
              <img
                src={require("../../../assets/fineImages/background-5.png")}
                alt="background5"
              />
            </div>

            <div className="div8">
              <img
                src={require("../../../assets/fineImages/background-6.png")}
                alt="background6"
              />
              <p>See my goal?</p>
            </div>

            <div className="div9">
              <img
                src={require("../../../assets/fineImages/background-7.png")}
                alt="background7"
              />
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="arrow"  ref={buttonRef} onClick={handleClick}>
          <FaArrowDown />
        </div>
      )}


      {state.learnMore && 
       
       <div className="news newsik">
       <div className="first-div-section">
         <div className="div1">
           <p className="div1-text">
             Use mixed grid with imagery, replace with your own photos and
             descriptions
           </p>
         </div>

         <div className="div2">
           <img
             src={require("../../../assets/fineImages/background-1.png")}
             alt="background1"
           />
           <p>
             We aimed to deliver HQ templates for Figma{" "}
             <span> Used by 123 people</span>
           </p>
         </div>
       </div>

       <div className="section-divs">
         <div className="second-div-section">
           <div className="div3">
             <img
               src={require("../../../assets/fineImages/background-2.png")}
               alt="background2"
             />
             <p>Consider it done!</p>
           </div>

           <div className="three-section-div">
             <div className="div4">
               <p>
                 This is multipurpose grid, it fits for portfolio, services or
                 agency web site
               </p>
             </div>
               <div className="forandfivedivs">

               <div className="div5">
                 <img
                   src={require("../../../assets/fineImages/background-3.png")}
                   alt="background-3"
                 />
             </div>

             <div className="div6">
               <img
                 src={require("../../../assets/fineImages/background-4.png")}
                 alt="background-4"
               />
             </div>
               </div>
             
           </div>
         </div>

         <div className="for-div-section">
           <div className="div7">
             <img
               src={require("../../../assets/fineImages/background-5.png")}
               alt="background5"
             />
           </div>

           <div className="div8">
             <img
               src={require("../../../assets/fineImages/background-6.png")}
               alt="background6"
             />
             <p>See my goal?</p>
           </div>

           <div className="div9">
             <img
               src={require("../../../assets/fineImages/background-7.png")}
               alt="background7"
             />
           </div>
         </div>
       </div>
     </div>
      }
      <div className="button btn"    ref={footerRef}>
        <button onClick={learnMoreClick}>{state.learnMore?'Less more':'Learn'}</button>
      </div>
    </div>
  );
};
