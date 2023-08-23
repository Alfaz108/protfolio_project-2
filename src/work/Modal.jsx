import React, { Component } from "react";
import userImg from "../src/images/bg/Rumon3.png";

class Modal extends Component {
  render() {
    const { setModal } = this.props;

    return (
      <section style={{ display: "flex" }} className="modal" id="modal">
        <div className="modal__wrapper">
          <i
            onClick={() => setModal(false)}
            className="bi bi-x modal_wrapper_close"
          />
          <div className="modal_wrapper_images">
            <img
              src={userImg}
              alt="user"
              className="modal_wrapperimages_img"
            />
          </div>
          <div className="modal_wrapper_contents">
            <h1 className="heading">Why Hire Me?</h1>
            <p className="modal_wrappercontents_text">
              Hard-working listing programmer with a flair for creating elegant
              solutions in the least amount of time. As a freelance programmer, I
              have created many professional websites for clients around the
              globe.ke love what we do and we do what our clients love &amp; work
              with great clients all over the world to create thoughtful and
              purposeful websites.
            </p>
            <div className="modal_wrappercontents_block">
              <span className="modal_wrappercontentsblock_left">Emial</span>
              <span className="modal_wrappercontentsblock_right">
                alfazbinrumon@gmail.com
              </span>
            </div>
            <div className="modal_wrappercontents_block">
              <span className="modal_wrappercontentsblock_left">Phone</span>
              <span className="modal_wrappercontentsblock_right">
                +8801710303309
              </span>
            </div>
              <button onClick={()=> setModal(false)}>close</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Modal;
