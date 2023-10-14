import React from "react";
import "./ContactMe.css";
import phone from "../../image.Icon/icons8-telephone-64.png";
import gmail from "../../image.Icon/icons8-gmail-50.png";
import { Fade, Slide } from "react-awesome-reveal";
import github from "../../image.footer/icons8-github-48.png";
import linkdin from "../../image.footer/icons8-linkedin-60.png";
import telegram from "../../image.footer/icons8-telegram-50.png";
import whatsApp from "../../image.footer/icons8-whatsapp-50.png";
import finger from "../../image.footer/icons8-finger-up-50.png";
import namecom from "../../image.Icon/name.png"
import message from "../../image.Icon/message.png"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ContactUs } from "../EmailMe/EmailMe";

export default function ContactMe() {
  function ScrollPage(top: number) {
    window.scrollTo({ top: top, behavior: "smooth" });
  }
  const [opentel, setOpentel] = React.useState(false);
  const [opengit, setOpengit] = React.useState(false);
  const [openlinkdin, setOpenlinkdin] = React.useState(false);
  const [openwhatsApp, setOpenwhatsApp] = React.useState(false);




  const telagramclick = () => {
    const link = "https://t.me/HOSEIN_AZR";

    window.open(link);

    setOpentel(true);
  };
  // ---------------------------------------------------------------------------
  const githubclick = () => {
    const link = "https://github.com/Hosseinazz9821";

    window.open(link);

    setOpengit(true);
  };
  //------------------------------------------------------------------------------
  const linkdinclick = () => {
    const link = "https://linkedin.com/in/hosein-azarian-a62b58295";

    window.open(link);

    setOpenlinkdin(true);
  };
  //------------------------------------------------------------------------------
  const whatsAppclick = () => {
    const link = "https://wa.me/09361670568";

    window.open(link);

    setOpenwhatsApp(true);
  }
  //--------------------------------------------------------------------------------



  return (
    <div className="contact_content_container">
      <div className="contact_left_content_container">
        <div className="contact_left_content">
          <Slide direction="left">
            <div className="title_contact_place">Portfolio</div>
            <div className="address_title_contactMe_container">Address:</div>
            <div className="addres_contactMe">
              Tehran Narmak Meydan78 Tajuddin<br/> Alley,Number 28 first floor
            </div>
            <div className="title_directly_content">Contact me directly:</div>
          </Slide>

          <div className="phone_contactMe">
            <img src={phone} className="phoneImage_style"></img>
            <Slide direction="left">
              <p>+98 936 167 0568</p>
            </Slide>
          </div>
          <div className="gmail_contactMe">
            <img src={gmail} className="phoneImage_style"></img>
            <Slide direction="left">
              <p> hoseinazarian.80@gmail.com</p>
            </Slide>
          </div>
          <Slide direction="left">
            <div className="titleCheck_contactMe">Check my profiles</div>
          </Slide>
          <div className="place_IconContactMe_content">
            <Fade>
              <div className="place_IconContactMe">
                <img src={github} className="github_footer_img"onClick={githubclick}></img>
              </div>
              <div className="place_IconContactMe">
                <img src={linkdin} className="github_footer_img"onClick={linkdinclick}></img>
              </div>
              <div className="place_IconContactMe">
                <img src={telegram} className="github_footer_img2"onClick={telagramclick}></img>
              </div>
              <div className="place_IconContactMe">
                <img src={whatsApp} className="github_footer_img2"onClick={whatsAppclick}></img>
              </div>
            </Fade>
          </div>
          <div className="iconupPage_content">
            <div
              className="iconupPage"
              onClick={() => {
                ScrollPage(0);
              }}
            >
              <img className="fingerup" src={finger}></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="contact_right_content_container">
        <div className="contact_right_content">
          <div className="box_infosendMe_content">
            <div className="name_contact_container">
              <div className="place_icondiv_content">
         
                <img src={namecom} className="img_iconContent"></img>
              </div>
              <input
                className="inputName_style"
                placeholder="Fullname..."
              ></input>
            </div>
            <div className="name_contact_container">
              <div className="place_icondiv_content">
              <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                </svg> 
              </div>
              <input
                className="inputName_style"
                placeholder="Email..."
              ></input>
            </div>
            <div className="name_contact_container2">
              <div className="place_icondiv_content2">
         
                <img src={message} className="img_iconContent"></img>
              </div>
              <textarea
                className="inputName_style2"
                placeholder="Fullname..."
              ></textarea>
            </div>
              <div className="button_place_content">
                <button className="style_button_submit">Submit</button>
              </div>
          </div>
          
        </div>
      </div> */}
      <ContactUs/>
    </div>
  );
}
     