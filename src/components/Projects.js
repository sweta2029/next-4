import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import {
  CONSOLIDATED,
  STATE_FARM_PROJECT,
  CRM_PROJECT,
} from "../constants/project";

const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [data, setData] = useState({});

  return (
    <Fragment>
      <DetailsPopup
        data={data}
        close={() => setDetailsPopup(false)}
        open={detailsPopup}
      />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  {/* Look at my
                  <br /> */}
                  Recent Projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="">
                      {/* <img src="img/thumbs/37-40.jpg" alt="" /> */}
                      <img
                        // className="main"
                        src="img/service/stateFarm.png"
                        style={{
                          objectFit: "contain",
                          height: 180,
                          borderRadius: 12,
                        }}
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>ER 1099</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link popup-vimeo"
                      onClick={() => {
                        setData(STATE_FARM_PROJECT);
                        setDetailsPopup(true);
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="" style={{ objectFit: "fill" }}>
                      {/* <img src="img/thumbs/37-40.jpg" alt="" /> */}
                      <img
                        className="main"
                        // src="img/service/HTC.jpeg"
                        style={{
                          objectFit: "fill",
                          height: 180,
                          borderRadius: 12,
                        }}
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>Consolidated 1099 </span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link soundcloude_link mfp-iframe audio"
                      onClick={() => {
                        setData(CONSOLIDATED);
                        setDetailsPopup(true);
                      }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="">
                      {/* <img src="img/thumbs/37-40.jpg" alt="" /> */}
                      <img
                        className="main"
                        src="img/service/panaroma.png"
                        style={{
                          objectFit: "fill",
                          height: 180,
                          borderRadius: 12,
                        }}
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>CRM Project</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => {
                        setData(CRM_PROJECT);
                        setDetailsPopup(true);
                      }}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
