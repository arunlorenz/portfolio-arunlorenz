// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "ARUNKUMAR N S",
  tagline: "Cloud Computing | SDE",
  img: profile,
  about: `I am a Pre final year student majoring in the stream of ECE`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/arunkumar-ns",
  github: "https://www.github.com/arunlorenz",
  twitter: "https://twitter.com/arunlorenz",
  instagram: "https://www.instagram.com/arunlorenz",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Internet of Things intern",
    Company: `SD Pro Solutions`,
    Location: "Trichy",
    Type: "Internship",
    Duration: "Feb 2023",
  }
];

// Enter your Education Details here
export const eduDetails = [

  {
    Position: "Bachelor in Electronics & Communication Engineering",
    Company: `Karpagam Institute of Technology`,
    Location: "Coimbatore",
    Type: "Full Time",
    Duration: "Aug 2021 - May 2025",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Air Quality Monitoring System",
    image: projectImage1,
    description: `It monitors air quality level of the environment and alerts users when it goes critical`,
    techstack: "Embedded C, Arduino Uno",
    previewLink: "https://google.com",
    githubLink: "https://github.com/arunlorenz/AirQualityMonitoring",
  },
  {
    title: "Personal Cloud Storage using AWS EC2",
    image: projectImage2,
    description: `A simple private cloud storage solution deployed on EC2 instance using opensource software`,
    techstack: "AWS EC2, Owncloud",
    previewLink: "https://google.com",
    githubLink: "https://github.com/arunlorenz/Personal-Cloud-using-AWS.git",
  },
  {
    title: "MachX - Online coding platform",
    image: projectImage3,
    description: 'An online coding platform that lets users engage in coding battles' ,
    techstack: "AWS EC2, Django",
    previewLink: "https://google.com",
    githubLink: "https://github.com/arunlorenz/MachX.git",
  },
  {
    title: "Air Quality Monitoring System",
    image: projectImage4,
    description: `It monitors air quality level of the environment and alerts users when it goes critical`,
    techstack: "Embedded C, Arduino Uno",
    previewLink: "https://google.com",
    githubLink: "https://github.com/arunlorenz/AirQualityMonitoring",
  },
  {
    title: "Personal Cloud Storage using AWS EC2",
    image: projectImage5,
    description: `A simple private cloud storage solution deployed on EC2 instance using opensource software`,
    techstack: "AWS EC2, Owncloud",
    previewLink: "https://google.com",
    githubLink: "https://github.com/arunlorenz/Personal-Cloud-using-AWS.git",
  },
  {
    title: "MachX - Online coding platform",
    image: projectImage6,
    description: 'An online coding platform that lets users engage in coding battles' ,
    techstack: "AWS EC2, Django",
    previewLink: "https://google.com",
    githubLink: "https://github.com/arunlorenz/MachX.git",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "arunkumarns543@gmail.com",
  phone: "+91 73396 16476",
};
