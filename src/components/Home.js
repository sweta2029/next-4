const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short margin-top-120">
              <h3>
                Sweta yadav <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">Senior Software Developer</span>
            </div>
            <div className="text">
              <p>
                I am a software developer based in the UAE, specializing in
                creating innovative solutions that turn visionary ideas into
                practical, user-focused applications. With a deep passion for
                technology and a dedication to delivering high-quality results,
                I craft intuitive and robust software tailored to meet
                real-world needs and challenges. My commitment to excellence
                drives me to leverage cutting-edge technologies and best
                practices, ensuring that every project I undertake is not only
                functional but also exceptional in its design and execution.
              </p>
            </div>
            <div className="buttons" style={{ marhinTop: 20 }}>
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/shweta-yadav-a34716173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="svg" src="img/svg/social/linkedin.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sweta2029/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="svg" src="img/svg/social/github.svg" alt="" />
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
      {/* <div className="orido_tm_down" style={{display: 'flex', justifyContent: 'center'}}>
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div> */}
      <div
        className="avatar large-screen-visible"
        style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}
      >
        <div className="img">
          <img
            src={`img/hero/${dark ? 5 : 5}.jpg`}
            alt=""
            style={{ height: "80vh" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
