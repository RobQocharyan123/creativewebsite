import React from "react";
import "./Pricing.css";

export const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-title">
        <h1>Affordable pricing</h1>
        <div className="pricing-title-logo">
          <p>
            Bill me <span> monthly</span> • yearly
          </p>
          <img
            src={require("../../../assets/pricing/pricing-title.png")}
            alt=""
          />
        </div>
      </div>
      <div className="pricing-sections">
        <div className="student">
          <h4>Student</h4>
          <h1>
            Free <span>/ forever</span>
          </h1>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Components-driven system</p>
          </div>

          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Sales-boosting landing pages</p>
          </div>
          
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Awesome Feather icons pack</p>
          </div>

          <button className="student-button">Try for free</button>
        </div>
        <div className="individual">
          <button className="individual-position-button">best!</button>
          <h4>👤 Individual</h4>
          <h1>
            $24 <span>/ month</span>
          </h1>

          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>

            <p>Components-driven system</p>
          </div>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Sales-boosting landing pages</p>
          </div>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Awesome Feather icons pack</p>
          </div>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Themed into 3 different styles</p>
          </div>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Will help to learn Figma</p>
          </div>
          <button className="individual-button">Regular license</button>
        </div>
        <div className="corporate">
          {/* <button className='individual-position-button'>best!</button> */}
          <h4>👥 Corporate</h4>
          <h1>
            $12 <span>/ editor </span>
          </h1>

          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Components-driven system</p>
          </div>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Sales-boosting landing pages</p>
          </div>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Awesome Feather icons pack</p>
          </div>
          <div>
            <div>
              <img
                src={require("../../../assets/pricing/pricing-checkbox.png")}
                alt="pricing-checkbox"
              />
            </div>
            <p>Themed into 3 different styles</p>
          </div>

          <button className="corporate-button">Extended license</button>
        </div>
      </div>
      <img className="pricing-background" src={require("../../../assets/pricing/pricing-footer.png")} alt="" />
    </div>
  );
};
