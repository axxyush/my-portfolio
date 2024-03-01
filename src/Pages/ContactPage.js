import React, { useRef } from "react";
import useDarkMode from "../Functions/DarkMode";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const { mode, toggleMode } = useDarkMode();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eiwta7c", "template_ds4qfci", form.current, {
        publicKey: "ZvEOIpC-oM_CV3cDM",
      })
      .then(
        () => {
          alert("Email sent successfully!");
          window.location.reload();
        },
        (error) => {
          alert("Error sending email. Please try again.");
        }
      );
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div className="mainPage">
        <div className="form-card1">
          <div className="form-card2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form"
              style={{
                backgroundColor: mode === `light` ? `	#F5F5F5` : `#353839`,
              }}
            >
              <p
                className="form-heading"
                style={{
                  color: mode === `light` ? `black` : `white`,
                }}
              >
                Get In Touch
              </p>
              <div
                className="form-field"
                style={{
                  color: "black",
                  backgroundColor: mode === `light` ? `white` : `#353839`,
                  boxShadow:
                    mode === `light`
                      ? "inset 2px 5px 10px grey"
                      : "inset 2px 5px 10px rgb(5, 5, 5",
                }}
              >
                <input
                  id="name"
                  required=""
                  placeholder="Name"
                  className="input-field"
                  type="text"
                  name="name"
                  style={{
                    color: mode === `light` ? `black` : `white`,
                  }}
                />
              </div>
              <div
                className="form-field"
                style={{
                  color: "black",
                  backgroundColor: mode === `light` ? `white` : `#353839`,
                  boxShadow:
                    mode === `light`
                      ? "inset 2px 5px 10px grey"
                      : "inset 2px 5px 10px rgb(5, 5, 5",
                }}
              >
                <input
                  required=""
                  placeholder="Email"
                  name="email"
                  id="email"
                  className="input-field"
                  type="email"
                  style={{
                    color: mode === `light` ? `black` : `white`,
                  }}
                />
              </div>
              <div
                className="form-field"
                style={{
                  color: "black",
                  backgroundColor: mode === `light` ? `white` : `#353839`,
                  boxShadow:
                    mode === `light`
                      ? "inset 2px 5px 10px grey"
                      : "inset 2px 5px 10px rgb(5, 5, 5",
                }}
              >
                <input
                  required=""
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  className="input-field"
                  type="text"
                  style={{
                    color: mode === `light` ? `black` : `white`,
                  }}
                />
              </div>
              <div
                className="form-field"
                style={{
                  color: "black",
                  backgroundColor: mode === `light` ? `white` : `#353839`,
                  boxShadow:
                    mode === `light`
                      ? "inset 2px 5px 10px grey"
                      : "inset 2px 5px 10px rgb(5, 5, 5)",
                }}
              >
                <textarea
                  required=""
                  placeholder="Message"
                  cols={30}
                  rows={3}
                  name="message"
                  className="input-field"
                  defaultValue={""}
                  style={{
                    color: mode === `light` ? `black` : `white`,
                  }}
                />
              </div>
              <input type="hidden" name="_captcha" value="false"></input>
              <button
                className="sendMessage-btn"
                style={{
                  color: mode === `light` ? `black` : `white`,
                  fontFamily: "Kode Mono",
                  outline:
                    mode === `light` ? `1px solid black` : `1px solid white`,
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer mode={mode} />
    </>
  );
}

export default ContactPage;
