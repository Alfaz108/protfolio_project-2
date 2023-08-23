import React, { Component } from "react";
import Modal from "../work/Modal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currentText: "",
      currentIndex: 0
    };
    this.writeNameText = "Alfaz Bin Rumon";
    this.delay = 100;
  }

  componentDidMount() {
    this.updateText();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  updateText = () => {
    const { currentText, currentIndex } = this.state;

    if (currentIndex < this.writeNameText.length) {
      this.timeout = setTimeout(() => {
        this.setState({
          currentText: currentText + this.writeNameText[currentIndex],
          currentIndex: currentIndex + 1
        });
        this.updateText();
      }, this.delay);
    }
  };

  handleModalOpen = () => {
    this.setState({
      modal: true
    });
  };

  handleModalClose = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    const { currentText, modal } = this.state;

    return (
      <>
        <header className="header" id="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-xs-12">
                <div className="header__data">
                  <div className="header_data_contents">
                    <div className="header_datacontents_top">Hi My Name Is</div>
                    <div className="header_datacontents_heading">
                      {currentText}
                    </div>
                    <div className="header_datacontents_bottom">
                      MERN Stack Developer
                    </div>
                    <div className="heaser_data_contents_link">
                      <a
                        href="https://drive.google.com/file/d/1QTjthwdcUtaTyUBZlQwPpCfRrP6cyAK4/view?usp=sharing"
                        className="btn btn-default"
                        target="_blank"
                      >
                        Download Cv
                      </a>{" "}
                      &nbsp;
                      <button
                        onClick={this.handleModalOpen}
                        className="btn btn-dark open__modal"
                      >
                        Hire Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {modal && <Modal setModal={this.handleModalClose} />}
      </>
    );
  }
}

export default Home;
