import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Framework Used", value: 6 },
  { name: "Packages Used", value: 40 },
  { name: "Corporate Projects", value: 7 },
  { name: "Own Projects", value: 4 },
];

const skills = [
  { name: "React JS", value: "", icon: "img/svg/reactjs.svg" },
  { name: "Next JS", value: "", icon: "img/svg/nextjs.svg" },
  { name: "React Native", value: "", icon: "img/svg/reactnative.svg" },
  { name: "Node JS", value: "", icon: "img/svg/nodejs.svg" },
  { name: "Express JS", value: "", icon: "img/svg/express.svg" },
  { name: "My SQL", value: "", icon: "img/svg/mysql.svg" },
];

const experiences = [
  {
    company: "PFE Technologies L.L.C.",
    designation: "Senior Software Developer",
    time: "2023 - 2024",
  },
  {
    company: "HTC Global Service",
    designation: "Senior Software Developer",
    time: "2019 - 2023",
  },
];

const educations = [
  {
    institution: "JSpider Bangalore",
    certificate: "full stack developer",
    time: "2017 - 2018",
  },
  {
    institution: "Sathyabama University",
    certificate:
      "Bachelor of Engineering in Electronics and Telecommunication Engineering",
    time: "2014 - 2018",
  },
];

const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>Areas of Expertise</span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    With 6 years of experience as a software developer, I
                    specialize in crafting seamless digital experiences using
                    React JS, Next JS, React Native, and Node JS. My expertise
                    lies in transforming innovative ideas into efficient,
                    user-friendly software solutions. I am passionate about
                    collaborating with fellow developers, designers, and tech
                    enthusiasts to brainstorm solutions and dive into tech
                    discussions.
                  </p>
                  <p>
                    <strong>Expert Areas</strong>
                  </p>
                  <p>
                    <strong>React JS:</strong> Crafting dynamic, interactive
                    user interfaces with a deep understanding of component-based
                    architecture and state management.
                  </p>
                  <p>
                    <strong>Next JS:</strong> Leveraging server-side rendering
                    and static site generation for fast, SEO-friendly web
                    applications while optimizing performance and scalability.
                  </p>
                  <p>
                    <strong>React Native:</strong> Developing cross-platform
                    mobile applications with a native-like experience for both
                    iOS and Android.
                  </p>
                  <p>
                    <strong>Node JS:</strong> Building robust, scalable back-end
                    solutions, designing and implementing APIs, and ensuring
                    smooth communication between front and back end.
                  </p>
                </div>

                {/* <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div> */}
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">{skill.name}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpertAreas;
