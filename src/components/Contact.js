const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <img className="anim_circle" src="img/hero/5.jpg" alt="" />
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                {`Let's`} join forces to turn your vision into reality.
                Together, we can transform your goals into actionable strategies
                and work towards achieving outstanding results for your
                business. I look forward to collaborating with you and making
                our combined efforts a success.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href="#">
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a
                      className="line_effect"
                      href="tel:971523791751"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +971 569614386
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a
                      className="line_effect"
                      href="mailto:shweta.yadav2029@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      shweta.yadav2029@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shweta-yadav-a34716173/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="svg"
                        src="img/svg/social/linkedin.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/sweta2029/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="svg"
                        src="img/svg/social/github.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/_s.h.w.e.t.a_yadav/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
