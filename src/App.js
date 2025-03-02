import "./App.css";
import React from "react";
import { Card, Chip } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const experiences = [
  {
    company: "Hayaland Inc.",
    position: "Game Developer",
    toolsAndTech: ["Unity 3D"],
    image: require("./assets/hayaland.jpeg"),
    duration: "September 2024 - Current",
    description: ["Transformed client ideas into working features.",
      "Developed core and supporting game mechanics.",
      "Worked remotely with a dynamic team."],
  },
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
    duration: "August 2023 - September 2024",
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

const stats = [
  {
    amount: "6+",
    description: "Years of Experience",
  },
  {
    amount: "30+",
    description: "Client Projects Completed",
  },
  {
    amount: "8+",
    description: "Projects on the store",
  },
]

const skills = [
  {
    category: "Tools",
    chips: [
      { name: "Unity3D", classname: "fa-brands fa-unity" },
      { name: "Blender", classname: "blender" },
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
      { name: "Amazon Web Services", classname: "fa-brands fa-aws" },
      { name: "Photon", classname: "photon" },
      { name: "Azure PlayFab", classname: "azure" },
      { name: "Play Store API", classname: "fa-brands fa-google-play" },
      { name: "Play Games API", classname: "games" },
      { name: "VR SDK", classname: "vr" },
      { name: "AR SDK", classname: "ar" },
    ]
  }
];

const projects = [
  {
    title: "Meta Frontier",
    description: "A tower defense blockchain game ⚔️ Gather your allies and destroy the enemy tower",
    thumbnail: require("./assets/projects/metafrontier.jpg"),
    trailer: require("./assets/projects/metafrontier.mp4"),
    link: "https://x.com/xmeta_frontier"
  },
  {
    title: "Drift Racing Legends",
    description: "Dive into the world of high-speed drifting! Buy and customize your favourite cars and race in beautiful maps.",
    thumbnail: require("./assets/projects/drift.png"),
    trailer: require("./assets/projects/drift.mp4"),
    link: "https://play.google.com/store/apps/details?id=com.MHFLStudios.DriftLegends&hl=fr"
  },
  {
    title: "Fruit Slice",
    description: "Drop to merge similar fruits into bigger ones and score in the puzzle, get a watermelon, relax, and keep collecting.",
    thumbnail: require("./assets/projects/fruit1.jpg"),
    trailer: require("./assets/projects/fruit1.mp4"),
    link: "https://play.google.com/store/apps/details?id=com.MHFLStudios.FruitSlice&hl=en",
  },
  {
    title: "Mega Merge Fruit",
    description: "Connect and pop similar fruits to score big! Aim to merge the most fruits and achieve record-breaking scores.",
    thumbnail: require("./assets/projects/fruit2.jpg"),
    link: "https://play.google.com/store/apps/details?id=com.MHFLStudios.StickyFruits&hl=en_US"
  },
  {
    title: "Shape Blast | Number Game",
    description: "Use logic and gravity to figure out and shoot down shapes before they reach the top!",
    thumbnail: require("./assets/projects/numbergame.jpg"),
    link: "https://play.google.com/store/apps/details?id=com.MHFLStudios.NumberGame&hl=en_US"
  },
  {
    title: "Escubar",
    description: "Swerve and hop through the platforms to avoid falling into the void. Set new highscores and compete against friends.",
    thumbnail: require("./assets/projects/escubar.png"),
    link: "https://play.google.com/store/apps/details?id=com.theproprogrammer.Escubar&hl=en_US"
  },
  {
    title: <i>Undisclosed</i>,
    description: "A story-mode simulation game with 6+ levels, proprietary hardware integration, An AI assistant and detailed reporting.",
    thumbnail: require("./assets/projects/confidential.jpg"),
    link: "",
  },
];

const connectLinks = [
  {
    link: "mailto:abdullah.asim.0807@gmail.com",
    className: "fa-solid fa-envelope",
    text: "abdullah.asim.0807@gmail.com"
  },
  {
    link: "https://wa.me/923490569480",
    className: "fa-solid fa-phone",
    text: "+92-3490569480"
  },
];

const recommendations = [
  require("./assets/recs/rec1.png"),
  require("./assets/recs/rec2.png"),
  require("./assets/recs/rec3.png"),
  require("./assets/recs/rec4.png"),
  require("./assets/recs/rec5.png"),
];

function App() {
  return (
    <div className="body">
      <div className="left-section">
        <Card
          sx={{
            className: "introCard",
            margin: "1vh",
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: "white",
            padding: "1.5vh",
            borderRadius: 4,
            backgroundColor: "#2A2B2C",
            width: "80%",
            boxShadow: {
              xs: "0px 0px 4px 4px rgb(0,123,255)", // Always apply in mobile (portrait)
              sm: "none", // Remove in landscape/tablets
            },
            "&:hover": {
              boxShadow: "0px 0px 4px 4px rgb(0,123,255)",
            },
          }}
          elevation={5}>
          <img src={require('./assets/me.jpg')} alt="Abdullah Asim" style={{ width: "80%", borderRadius: "15px", margin: "2vw" }} />
          <div class="name">Abdullah Asim</div>
          <div class="name j">(アブドラ・アシム)</div>
          <div class="occupation">Game Developer | Software Engineer</div>
          <span style={{ marginTop: "1vh" }}>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className={social.className} style={{ fontSize: "1vw", margin: "0.4vw" }}></i>
              </a>
            ))}
          </span>
          <ContactInfo/>
        </Card>
      </div>
      <div className="right-section">
        <Intro />
        <Projects />
        <ExperienceList />
        <Skills />
        <Recommendations />
      </div>
      <a href="/Resume.pdf" download="Abdullah Asim Game Developer Resume.pdf">
        <div className="download-resume">
          DOWNLOAD RESUME
        </div>
      </a>
    </div>
  );
}
function Intro() {
  return (
    <div className="intro">
      <div className="title">
        Bringing <span className="highlight">stories</span> to <span className="highlight">life</span>, one line of <span className="highlight">code</span> at a time
      </div>
      <div className="subtitle">
        An experienced Game Developer and Software Engineer with an unending passion to craft the next big thing.
      </div>
      <div className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <div className="amount">{stat.amount}</div>
            <div className="description">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
function Projects() {
  return (
    <div className="projects">
      <div className="title">
        Recent <span className="highlight">Projects</span>:
        <div
        className="projectsContainer">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
function ExperienceList() {
  return (
    <div className="experience-container">
      <div className="title">Work Experience:</div>
      {experiences.map((exp, index) => (
        <div
          className={`experience-card ${index === 0 ? "highlighted" : ""}`}
          key={index}>

          <img src={exp.image} alt={exp.company} className="experience-image" />
          <div className="experience-info">
            <h3 className="company">{exp.company}</h3>
            <p className="position">{exp.position}</p>
            <ul className="experience-description">
              {exp.description.map((desc, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: desc }}></li>
              ))}
            </ul>
            <p className="duration">
              {exp.duration.split(" ").map((word, i) =>
                word.toLowerCase() === "current" ? (
                  <span key={i} className="highlight-current">{word} </span>
                ) : (
                  word + " "
                )
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
function Skills() {
  return (
    <div class="skills">
      <div className="title">
        Skillset:
      </div>
      {skills.map((skillCategory, index) => (
        <div class="skillCategory">
          {skillCategory.category}:
          <div class="chipsList">
            {
              skillCategory.chips.map((skill, index) => (
                <span class="categoryChip">
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
  )
}
function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  return (

    <div className="recommendations">
      <div className="title">
        Recommendations:
      </div>
      <div className="carousel">

        <div className="carouselControls">
          <button onClick={prevImage} className="cbutton">
            {"<"}
          </button>
          <button onClick={nextImage} className="cbutton">
            {">"}
          </button>
        </div>
        <img className="image"
          src={recommendations[currentIndex]}
          alt={`Recommendation ${currentIndex + 1}`}
          style={{ width: "100%", height: "auto", borderRadius: "8px", "&:hover": { boxShadow: "0px 0px 4px 4px rgb(0,123,255)" } }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null); // Reference to video element

  const handleCardClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Check if video is in view
      },
      { threshold: 1.0 } // Trigger only when 100% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play(); // Play when in full view
      } else {
        videoRef.current.pause(); // Pause when out of view
      }
    }
  }, [isVisible]);

  return (
    <div className="project-card"
      onClick={handleCardClick}
      style={{
        width: "18vw",
        cursor: "pointer",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1vw",
        overflow: "hidden",
        backgroundColor: "#2A2B2C",
        transition: "transform 0.3s",
      }}
    >
      {project.trailer ? (
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          muted
          loop={false}
          controls
        >
          <source src={project.trailer} type="video/mp4" />
        </video>
      ) : (
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1vw",
            objectFit: "scale-down",
          }}
        />
      )}

      <div className="projectDetails">
        <div
        className="projectTitle">
          {project.title}
        </div>
        <p
        className="projectDescription">
          {project.description}
        </p>
      </div>
    </div>
  );
}
function ContactInfo() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      {!showInfo ? (
        <button className="button" onClick={() => setShowInfo(true)}>
          Let's Connect
        </button>
      ) : (
        <div className="contact-info">
          <p><a href="tel:+923490569480">+92-349-0569480</a></p>
          <p><a href="mailto:abdullah.asim.0807@gmail.com">abdullah.asim.0807@gmail.com</a></p>
        </div>
      )}
    </div>
  );
}
export default App;
