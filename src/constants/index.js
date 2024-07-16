import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";
import project4 from "../assets/projects/Project-4.png";

export const HERO_CONTENT = `I am a passionate Software Engineer/Full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience in software development, I have honed my skills in programming languages like C++, Java, front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am Madhu B, a Software/full stack developer based in Bengaluru, with a strong background in Computer Science and Engineering. \n\n Skilled in Java, C/C++, Python, JavaScript, SQL, HTML, and CSS, I am proficient in using tools like VS Code, Jenkins, Git, and GitHub.

At Nokia Solutions and Networks, I specialized in 5G NR architecture and call flows, debugging C++ code, and conducting automated testing. As a Full Stack Intern at Varcons Technologies, I developed functional web pages and worked on projects like Network Intrusion Detection (MERN Stack, LSTM, CNN) and Blood Bank Management System (HTML, CSS, JavaScript, MySQL).

Certified in Microsoft Azure Data Fundamentals, Microsoft Power Platform Fundamentals, and Git and GitHub.`;

export const EXPERIENCES = [
  {
    year: "Sept 2023 - May 2024",
    role: "Software Development Intern",
    company: "Nokia",
    description: [
      "Gained comprehensive knowledge of 5G NR architecture and call flows, including Registration, PDU Session Establishment, Handover, Service Request, and Paging, with hands-on experience in UEC and UeProxy debugging.",
      " Debugged C++ code in a Linux environment and used Jenkins for automated testing, resolving 30+ Coverity issues to ensure code integrity.",
      " Engaged in Unit Testing, System Component Testing, and Sanity Testing under the guidance of senior developers, successfully merging validated changes into the codebase for production deployment.",
      " Collaborated closely with cross-functional teams to streamline development efforts and prioritize tasks effectively.",
    ],
    technologies: [
      "C++",
      "Linux",
      "Python",
      "Git",
      "Gerrit",
      "Jenkins",
      "Jira",
      "Bash",
    ],
  },
  {
    year: "April 2023 - May 2023",
    role: "Full-Stack Intern",
    company: "Varcons Technology",
    description: `Worked on the project ”We Save Animals - web template,” creating fully functional web pages as per client
specifications. Demonstrated strong design skills and a proactive attitude towards learning, exceeding expectations and
successfully completing the project on time. Received positive feedback on design skills and demonstrated a high level of adaptability and problem-solving
ability throughout the internship.
`,
    technologies: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
  },
];

export const PROJECTS = [
  {
    title: "Intrusion Detection using Deep Learning",
    link: "https://github.com/madhuraj0705/Intrusion-Detection-using-Deep-Learning",
    image: project1,
    description:
      "This project combines CNNs and LSTMs to analyze network data from the NSL KDD dataset, enhancing intrusion detection capabilities. By capturing spatial and temporal patterns, it effectively identifies various types of network threats, improving overall security.",
    technologies: ["ReactJs", "CNN", "LSTM", "NodeJs", "MongoDB"],
  },
  {
    title: "Blood Bank Management System",
    link: "https://github.com/madhuraj0705/Blood-Bank-Management-System",
    image: project2,
    description:
      "The main objective of the Blood Bank Management System is to manage the details of Blood, Donor, Blood Group, Blood Bank Stock. It manages all the information about Blood, Stock. The project is totally built at administrative end and thus only the administrator is guaranteed the access and maintained all the records effectively using MySQL.",
    technologies: ["HTML", "CSS", "MySQL", "PHP"],
  },
  {
    title: "Social Media Application",
    link: "https://github.com/madhuraj0705/Social-Media-Application-using-MERN",
    image: project3,
    description:
      "Media Social is a dynamic and feature-rich social media application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This platform brings people together, fostering connections and enabling users to share their experiences, thoughts, and moments with a global ",
    technologies: ["ReactJs", "ExpressJs", "NodeJs", "MongoDB"],
  },
  {
    title: "Tourism Website",
    link: "https://madhuraj0705.github.io/Tourism-Website/",
    image: project4,
    description:
      "Implemented interactive elements and features using JavaScript to enhance user engagement and interaction on the website, such as dynamic forms, sliders, and animations. Designed website with scalability for easy expansion and addition of new features as the project evolve.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Bengaluru, KA ",
  phoneNo: "+91 99162 40835",
  email: "madhu.b07@outlook.com",
};
