import React from "react";
import "./Projectme.css";
import { Slide } from "react-awesome-reveal";
export default function Projectme() {
  return (
    <div className="project_content_container">
      <div className="project_content">
        <div className="project_title_container">
          <p className="title_project_style_text">Recent </p>
          <span className="title_project_style_text_green">Projects</span>
        </div>
        <div className="body_projectme_content_container">
          <Slide direction="left">
            <div className="projectweather_content_container">
              <div className="text_projectw1_content">
                <p className="textTitle_project_weather">Discription</p>
                <p className="text_project_weather">
                  The weather project that displays the weather of each city
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="up">
            <div className="projectMackin_content_container">
              <div className="text_projectw1_content">
                <p className="textTitle_project_weather">Discription</p>
                <p className="text_project_weather">
                  Makin site is my first project for a programming educational
                  institution
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="projectweather2_content_container">
              <div className="text_projectw1_content">
                <p className="textTitle_project_weather">Discription</p>
                <p className="text_project_weather">
                  Set day and night according to API
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
