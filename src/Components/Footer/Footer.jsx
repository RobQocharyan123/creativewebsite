import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="follow">
        <div className="icons">
          <div>
            <h2>follow us</h2>
          </div>
          <div className="fakeul">
            <div>
              <a href="#">
                <img
                  src={require("../../assets/footer-img/facebook.png")}
                  alt="Facebbok"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src={require("../../assets/footer-img/linkedin.png")}
                  alt="divnkedin"
                  className="linkedin"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src={require("../../assets/footer-img/sharp.png")}
                  alt="Sharp"
                  className="sharp"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src={require("../../assets/footer-img/twitter.png")}
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mail">
          <h2>follow us</h2>
          <h1>hello@fapsterapp.com</h1>
        </div>
      </div>
      <div className="information">
        <div className="info">
          <h2>information</h2>
          <div className="links-footer">
            <div>
              <a href="#">About Fapster app</a>
            </div>
            <div>
              <a href="#">Onhovered / Active</a>
            </div>
            <div>
              <a href="#">We are hiring!</a>
            </div>
            <div>
              <a href="#">Get in Touch</a>
            </div>
            <div>
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <a href="#">Resources</a>
            </div>
            <div>
              <a href="#">Things We Like</a>
            </div>
            <div>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="touch">
          <h2>keep in touch</h2>
          <div className="register">
            <div className="inputs">
              <div className="name">
                <input type="text" placeholder="Youre Name" />
                <img
                  src={require("../../assets/footer-img/icon-user.png")}
                  alt="User"
                />
              </div>
              <div className="email">
                <input type="text" placeholder="E-mail" />
                <img
                  src={require("../../assets/footer-img/icon-mail.png")}
                  alt="User"
                />
              </div>
            </div>
            <div className="textarea">
              <div className="message">
                <textarea name="Leave your message|" id="" cols="30" rows="10">
                  Leave your message|
                </textarea>
                <img
                  src={require("../../assets/footer-img/icon-edit.png")}
                  alt="Edit"
                />
              </div>
              <div className="button">
                <button className="send">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={require("../../assets/footer-img/footer-logo.png")}
        alt="Logo"
        className="background-footer"
      />
      <div className="logos">
      <img src={require("../../assets/footer-img/background-mini1.png")} alt="Logo" className="logo1" />
        <img src={require("../../assets/footer-img/background-dots.png")} alt="Logo" className="logo2" />
      </div>
    </div>
  );
};
