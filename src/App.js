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
      "Developed a story-mode simulation game using Unity.",
      "Designed and developed 6+ levels along with their UI, environment and the core game loop.",
      "Integrated proprietary hardware within the Game.",
      "Integrated an AI assistant and numerous other third-party SDKs.",
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
      "Led development as Senior Game Developer.",
      "Utilized remote collaboration tools, implementing a seamless remote work experience.",
      "Orchestrated successful cooperation among developers, artists, and marketers to achieve successful projects.",
      "Mastered the art of leading the development team, exceeding module development schedules.",
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
      "Achieved a total of ~11,300 downloads across ~172 different countries and territories.",
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
      "Achieved a turnover equivalent to a thousand dollars even before my 18th birthday.",
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
      <Experiences />
      <Recommendations />
      <footer class="footer">
        <span>Designed and Developed in ReactJS by <special> Abdullah Asim</special></span>
      </footer>
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
                paddingLeft: "50px",
                justifyContent: "center",
                marginLeft: "10%",
                marginRight: "10%",
                backgroundColor: "#FFFF",
                maxWidth:"1000px",
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
                    {item.description.map((item) => (
                      <li>{item}</li>
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
            <img class = "recommendation" src={item}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
