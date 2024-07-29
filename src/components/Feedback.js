const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Award Winning and
                <br />
                Achiements
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src={`img/hero/photo.jpg`} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “I am honored to have received the Lime Light Award for my
                  contributions as a Frontend Developer. This accolade
                  recognizes not only my technical proficiency but also my
                  commitment to delivering exceptional user experiences. Through
                  innovative design solutions and a dedication to quality, I
                  strived to create engaging, intuitive, and aesthetically
                  pleasing interfaces. This award symbolizes the culmination of
                  countless hours of problem-solving, collaboration, and
                  perseverance, and I am grateful to have had the opportunity to
                  contribute to projects that push the boundaries of frontend
                  development. ”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>LIME LIGHT AWARD</span>
                </h3>
                <span className="job">HTC Global Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
