import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Slide } from "react-awesome-reveal";
import react from "../../image.skills/icons8-react-80.png";
import html from "../../image.skills/icons8-html-100 (1).png";
import css from "../../image.skills/icons8-css-100 (1).png";
import context from "../../image.skills/icons8-context-64.png";
import redux from "../../image.skills/icons8-redux-100.png";
import next from "../../image.skills/icons8-nextjs-96 (1).png";
import api from "../../image.skills/icons8-rest-api-64.png";
import typescript from "../../image.skills/icons8-typescript-96.png";
import tailwind from "../../image.skills/icons8-tailwind-css-96.png";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Slider() {
  
  return (
    <>
    
      <Slide direction="up">
        <Swiper
          // slidesPerView={3}
          // spaceBetween={30}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:10
            },
            600:{
              slidesPerView:2,
              spaceBetween:10
            },
            900:{
              slidesPerView:3,
              spaceBetween:30
            }
          }}
          
          centeredSlides={false}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={80}
                  text={`${80}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              {/* //***************************************************************************** */}
              <div className="place_slider_imgIcon">
                <img src={react} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">React js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={90}
                  text={`${90}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={html} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">Html</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={90}
                  text={`${90}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={css} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">Css</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={70}
                  text={`${70}%`}
                  styles={{
                    path: {
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={context} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">React Context</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={50}
                  text={`${50}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={redux} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">Redux toolkit</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={70}
                  text={`${70}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={next} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">Next js</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={80}
                  text={`${80}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={api} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">Rest Api</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={70}
                  text={`${70}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={typescript} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">typeScript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider1_react">
            <div className="content_imge_progres">
              <div className="progressbar_react">
                <CircularProgressbar
                  value={20}
                  text={`${20}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: " #01be96",
                    },
                    trail: {
                      stroke: " rgb(25, 25, 35)",
                    },
                    text: {
                      fill: "white",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  }}
                />
              </div>

              <div className="place_slider_imgIcon">
                <img src={tailwind} style={{ height: 90, width: 90 }}></img>
              </div>
            </div>
            <div className="place_textSkills_style">
              <p className="nameskills_styleText">tailwind</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Slide>
    </>
  );
}
