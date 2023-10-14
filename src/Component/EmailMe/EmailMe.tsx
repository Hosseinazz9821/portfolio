import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import namecom from "../../image.Icon/name.png"
import message from "../../image.Icon/message.png"
import "../../Component/ContactMe/ContactMe.css"
export const ContactUs = () => {
  const form :any= useRef();

  const sendEmail = (e:any) => {
    // e.preventDefault();

    form.current&&emailjs.sendForm('service_k5x8p89', 'template_l5q7ikv', form.current, '_f6PgoMqbiwIe3q-s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='form_style'>
      <div className="contact_right_content_container">
        <div className="contact_right_content">
          <div className="box_infosendMe_content">
            <div className="name_contact_container">
              <div className="place_icondiv_content">
         
                <img src={namecom} className="img_iconContent"></img>
              </div>
              <input
              type="text" name="user_name"
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
              type="email" name="user_email"
                className="inputName_style"
                placeholder="Email..."
              ></input>
            </div>
            <div className="name_contact_container2">
              <div className="place_icondiv_content2">
         
                <img src={message} className="img_iconContent"></img>
              </div>
              <textarea
              name="message"
                className="inputName_style2"
                placeholder="Message..."
              ></textarea>
            </div>
              <div className="button_place_content">
                <button className="style_button_submit" type='submit'>Submit</button>
              </div>
          </div>
          
        </div>
      </div> 
    </form>
  );
};