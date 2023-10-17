import React, { useEffect } from "react";
import "./Portfolio.css";
import telegram from "../image.Icon/icons8-telegram-50.png";
import github from "../image.Icon/icons8-github-64.png";
import linckdin from "../image.Icon/icons8-linkedin-30.png";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Imageme from "./imageme/imageme";
import Skills from "./Skills/skills";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Projectme from "./Projectme/Projectme";
import logome from "../image.Icon/logome.svg"
import ContactMe from "./ContactMe/ContactMe";
import DrawerRightHeder from "./DrawerRight/Drawer";

export default function Portfolio() {
  function ScrollPage(top: number) {
    window.scrollTo({ top: top, behavior: "smooth" });
  }
  const [opentel, setOpentel] = React.useState(false);
  const [opengit, setOpengit] = React.useState(false);
  const [openlinkdin, setOpenlinkdin] = React.useState(false);



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
  return (
    <div className="Portfolio_content_container">
               <div className="AppBar_content">
       <DrawerRightHeder/>

          </div>

      {/* <Fade> */}
        <div className="portfolio_scroll_title_content_coasntainer">

          <div className="portfolio_scroll_title_content">

            <span className="span" >
              <a className="a"onClick={()=>{ScrollPage(0)}}>Home</a>
            </span>
            <span className="span">
              <a className="a"onClick={()=>{ScrollPage(550)}}>Services</a>
            </span>
            <span className="span">
              <a className="a"onClick={()=>{ScrollPage(1100)}}>Projects</a>
            </span>
            {/* <span className="span">
              <a className="a">Testimonials</a>
            </span> */}
            <span className="span">
              <a className="a"onClick={()=>{ScrollPage(1600)}}>Portfolio</a>
            </span>
          </div>
          <div className="iconme_content">
            <img src={logome} className="imageLogo_me_content"></img>
          </div>
        </div>
      {/* </Fade> */}
      <div className="picture_info_content_container">
        <Slide direction="left">
          <div className="infoMe_content" >
            <div className="hi_content">
              <p className="hi_styleText">Hello </p>
              <p className="mestyle_Text">I'am</p>
            </div>
            <div className="name_content">
              <div className="name_textStyle">Hossein Azarian</div>
              <div className="learn_styleText">Front - end Developer </div>
            </div>
            <div className="style_textMore">
              One of my most important characteristics is that I start a path
              and never give up. I am an electrical engineering student at
              Malayer State University. I am 23 years old and in my spare time I
              play football and play games and go out with my friends.
            </div>
            <div className="lets_talk_container" onClick={()=>{ScrollPage(3000)}}>Let's talk</div>
            <div className="style_check_content_conteiner">
              {/* <div className="check_content"> */}
                <p className="check_style">Check out my:</p>
              {/* </div> */}
              <div className="iconmajaz_content">
                <div className="insta_place">
                  <img src={telegram} className="image_style_icon"onClick={telagramclick}></img>
                </div>
                <div className="insta_place">
                  <img src={github} className="image_style_icon"onClick={githubclick}></img>
                </div>
                <div className="insta_place">
                  <img src={linckdin} className="image_style_icon"onClick={linkdinclick}></img>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Imageme />
      </div>
      <Skills />
      <Projectme/>
      {/* <div style={{height:300,width:"100%",backgroundColor:"red"}}></div> */}
      <ContactMe/>
    </div>
  );
}
