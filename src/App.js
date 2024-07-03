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

const socialLinks = [
  {
    link: "https://www.instagram.com/theproprogrammer",
    className: "fa-brands fa-instagram",
  },
  {
    link: "https://www.linkedin.com/in/abdullah-asim-2004/",
    className: "fa-brands fa-linkedin",
  },
  {
    link: "https://www.facebook.com/StudiosDeSimp/",
    className: "fa-brands fa-facebook",
  },
  {
    link: "https://www.youtube.com/channel/UCmRoGehyqEmDQLLQDh4610A",
    className: "fa-brands fa-youtube",
  },
  {
    link: "https://github.com/TheProProgrammer",
    className: "fa-brands fa-github",
  },
  {
    link: "https://twitter.com/thepprogrammer",
    className: "fa-brands fa-twitter",
  },
  {
    link: "https://discord.com/users/1134147456964239584",
    className: "fa-brands fa-discord",
  },
  {
    link: "https://wa.me/923490569480",
    className: "fa-brands fa-whatsapp",
  },
];

const skills = [
  {
    category: "Game Engines",
    chips: [
      { name: "Unity3D", classname: "fa-brands fa-unity"},
      { name: "Unreal Engine", classname: "unreal" }
    ]
  },
  {
    category: "Version Control & Management",
    chips: [
      { name: "GitHub", classname: "fa-brands fa-github" },
      { name: "Jira", classname: "jira" },
      { name: "Trello", classname: "fa-brands fa-trello" }
    ]
  },
  {
    category: "Frameworks",
    chips: [
      { name: "Firebase", classname: "firebase" },
      { name: "AdMob", classname: "admob" },
      { name: "Photon", classname: "photon" },
      { name: "Azure PlayFab", classname: "azure" },
      { name: "Play Store API", classname: "fa-brands fa-google-play" },
      { name: "Play Games API", classname: "games" },
      { name: "VR SDK", classname: "vr" },
      { name: "AR SDK", classname: "ar" },

    ]
  }
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
      <div class="name2">
        <b>Senior Game Developer</b>
      </div>
      <div class="links">
      {socialLinks.map((social, index) => (
        <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
          <i className={`social-icon ${social.className}`} style={{ color: "#ffffff" }}></i>
        </a>
      ))}
      </div>
      <div class = "skills">
        {skills.map((skillCategory,index)=>(
          <div class="skillCategory">
            {skillCategory.category}:
            <div class="chipsList">
            {
              skillCategory.chips.map((skill, index)=>(
                <span class = "categoryChip">
                  <i className={skill.classname} style={{ color: "#ffffff" }}></i>
                  <div class="skillName">
                  {skill.name}
                  </div>
                </span>
              )
            )}
            </div>
          </div>
        ))}
      </div>
      <div class="mySummary">
        <div class="statBlock">
          <div class="number">~6</div>
          <div class="desc">YEARS OF EXPERIENCE</div>
        </div>
        <div class="statBlock">
        <div class="number">30+</div>
        <div class="desc">CLIENT PROJECTS COMPLETED</div>
        </div>
        <div class="statBlock">
        <div class="number">8+</div>
        <div class="desc">PROJECTS ON THE STORE</div>
        </div>

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
