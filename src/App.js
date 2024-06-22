import "./App.css";
import React from "react";
import DrawerAppBar from "./DrawerAppBar";
import { Card, Chip } from "@mui/material";

const experiences = [
  {
    company: "Texinity Pvt. Ltd.",
    position: "Contractual Game Developer",
    toolsAndTech: ["Unity 3D", "Blender"],
    image: require("./assets/texinity.jpg"),
    duration: "April 2024 - June 2024",
    description: [
      "Developed a <b>story-mode simulation game</b> using Unity.",
      "Designed and developed <b>6+ levels</b> along with their UI, environment and the core game loop.",
      "Integrated <b>proprietary hardware</b> within the Game.",
      "Integrated an <b>AI assistant</b> and numerous other third-party SDKs.",
      "Debugged and revised features numerous times to exactly fit the client's needs.",
    ],
  },
  {
    company: "MHFL Studios",
    position: "Senior Game Developer",
    image: require("./assets/mhfl.jpg"),
    toolsAndTech: ["Unity 3D", "Blender"],
    duration: "August 2023 - Current",
    description: [
      "Led development as <b>Senior Game Developer</b>.",
      "Utilized remote collaboration tools, implementing a seamless remote work experience.",
      "Orchestrated successful cooperation among developers, artists, and marketers to achieve successful projects.",
      "Mastered the art of <b>leading the development team</b>, exceeding module development schedules.",
      "Reverse-engineered and modified some open-source codebases to fit our project's specific needs.",
    ],
  },
  {
    company: "Simp Studios",
    position: "Director | Lead Software Engineer",
    image: require("./assets/simpstudios.png"),
    toolsAndTech: ["Unity 3D", "Blender", "Android"],
    duration: "Sept 2018 - Current",
    description: [
      "Established and directed my own Apps & Games Studio.",
      "Designed, Developed, Tested and Published functional Games and Apps for the Google Play Store.",
      "Achieved a total of <b>~11,300 downloads</b> across <b>~172 different countries</b> and territories.",
    ],
  },
  {
    company: "The Pro Programmer",
    position: "Director | Lead Software Engineer",
    image: require("./assets/theproprogrammer.png"),
    toolsAndTech: ["Unity 3D", "Blender", "Android"],
    duration: "Jan 2017 - Current",
    description: [
      "Director & Lead software developer at my own small start-up, providing software development services.",
      "Achieved a turnover equivalent to a <b>thousand dollars</b> even before my 18th birthday.",
      "Hired client acquisition and lead generation experts.",
      "Operating over numerous different social platforms developing solutions for clients across the globe.",
      "Worked with numerous small and large-scale Local and International corporations.",
      "Clients relating to the Architecture, Automotive, Real Estate, Gaming, and many more industries.",
      "Proof of work can be provided on demand.",
    ],
  },
];

const recommendations = [
  require("./assets/recs/rec1.png"),
  require("./assets/recs/rec2.png"),
  require("./assets/recs/rec3.png"),
  require("./assets/recs/rec4.png"),
];

function App() {
  return (
    <div class="body">
      <DrawerAppBar />
      <About />
      <Experiences />
      <Recommendations />
      <Connect />
      <footer class="footer">
        <span>
          Designed and Developed in ReactJS by <special> Abdullah Asim</special>
        </span>
      </footer>
    </div>
  );
}

function About() {
  return (
    <div class="about">
      <img src={require("./assets/me.png")} class="myPic" />
      <div class="name">
        <span>
          <b>Abdullah</b> Asim
        </span>
      </div>
      <div class="links">
        <a href="https://www.instagram.com/theproprogrammer" target="_blank">
          <i
            className="social-icon fa-brands fa-instagram"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/abdullah-asim-2004/" target="_blank">
          <i
            className="social-icon fa-brands fa-linkedin"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a href="https://www.facebook.com/StudiosDeSimp/" target="_blank">
          <i
            className="social-icon fa-brands fa-facebook"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a href="https://www.youtube.com/channel/UCmRoGehyqEmDQLLQDh4610A" target="_blank">
          <i
            className="social-icon fa-brands fa-youtube"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a href="https://github.com/TheProProgrammer" target="_blank">
          <i
            className="social-icon fa-brands fa-github"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a href="https://twitter.com/thepprogrammer" target="_blank">
          <i
            className="social-icon fa-brands fa-twitter"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a href="https://discord.com/users/1134147456964239584" target="_blank">
          <i
            className="social-icon fa-brands fa-discord"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
        <a href="https://wa.me/923490569480" target="_blank">
          <i
            className="social-icon fa-brands fa-whatsapp"
            style={{ color: "#ffffff" }}
          ></i>
        </a>
      </div>

    </div>
  );
}

function Experiences() {
  return (
    <div class="experiences">
      <center>
        <h2 class="sectionHeading">EXPERIENCES</h2>
      </center>
      <div>
        <ul class="experiencesCardsList">
          {experiences.map((item) => (
            <Card
              sx={{
                padding: "20px",
                borderRadius: 3,
                marginBottom: "40px",
                justifyContent: "center",
                marginLeft: "10%",
                marginRight: "10%",
                backgroundColor: "#FFFF",
                maxWidth: "1000px",
                "&:hover": {
                  boxShadow: "0px 0px 4px 4px #9EE3F0",
                },
              }}
              elevation={5}
            >
              <div class="experienceCardInside">
                <div class="experienceCardCompanySection">
                  <div style={{ textAlign: "center" }}>
                    <img
                      class="experienceCardCompanyLogo"
                      src={item.image}
                      alt="icon"
                    />
                    <h2 style={{ fontWeight: "bold", color: "#37A4DC" }}>
                      {item.company}
                    </h2>
                    <h5 style={{ color: "#909090" }}>{item.position}</h5>
                    <h6 style={{ color: "#ABABAB", marginTop: "-20px" }}>
                      {item.duration}
                    </h6>
                    <ul style={{ padding: "0px" }}>
                      {item.toolsAndTech.map((item) => (
                        <Chip
                          label={item}
                          style={{ margin: "5px", backgroundColor: "#9EE3F0" }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                <div class="experienceCardDescription">
                  <ul style={{ listStyleType: "disc", padding: "30px" }}>
                    {item.description.map((item1) => (
                      <BoldListItem item={item1} />
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Recommendations() {
  return (
    <div class="recommendations">
      <center>
        <h2 class="sectionHeading">RECOMMENDATIONS</h2>
      </center>
      <div>
        <ul class="recommendationsList">
          {recommendations.map((item) => (
            <img class="recommendation" src={item} alt="recommendation" />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Connect() {
  return (
    <div class="connect">
      <center>
        <h2 class="sectionHeading">LET'S CONNECT</h2>
      </center>
    </div>
  );
}

const BoldListItem = ({ item }) => {
  return <li dangerouslySetInnerHTML={{ __html: item }}></li>;
};
export default App;
