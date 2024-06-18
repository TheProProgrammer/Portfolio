import "./App.css";
import React from "react";
import DrawerAppBar from "./DrawerAppBar";
import { Card, List, Chip } from "@mui/material";

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
      "Achieved a total of ~11,300 downloads across ~172 different countries and territories."
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
      "Proof of work can be provided on demand."
    ],
  },
];

function App() {
  return (
    <div class="body" style={{ fontFamily: "Ubuntu" }}>
      <DrawerAppBar />
      <div class="home" style={{ minHeight: "100" }}>
        <Experiences />
      </div>
    </div>
  );
}

function Experiences() {
  return (
    <div style={{ margin: "24px" }}>
      <center>
        <h2 style={{ width: "100%", color: "#EE4338" }}>EXPERIENCES</h2>
      </center>
      <div>
        <ul
          style={{
            alignItems: "center",
            padding: "0px",
            paddingInlineStart: "0px",
          }}
        >
          {experiences.map((item) => (
            <Card
              sx={{
                padding: "20px",
                borderRadius: 5,
                marginBottom: "40px",
                paddingLeft: "50px",
                justifyContent: "center",
                marginLeft: "5%",
                marginRight: "5%",
                backgroundColor:"#F2F2F2",
                "&:hover": {
                  boxShadow: "0px 2px 3px 3px #FC9F8C",
                },
              }}
              elevation={5}
            >
              <div style={{ display: "flex", flexDirection:"center", margin: "10px" }}>
                <div style={{ width: "40%",
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: 'center'}}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={item.image}
                      style={{ width: "100px",
                        borderRadius: 100 / 2,
                        borderWidth: 3,
                        overflow: 'hidden',
                        borderColor: "red" }} 
                      
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
                        <Chip label={item} style={{ margin: "5px", backgroundColor:"#9EE3F0"}} />
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={{ width: "60%",
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: 'center' }}>
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
export default App;
