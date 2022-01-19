import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiPhp, SiMysql, SiJquery } from 'react-icons/si'
import Project1 from '../img/Project1.png';
import Project2 from '../img/Project2.png';
import Project3 from '../img/Project3.png';


const Technologies = [
    {
        icon: FaHtml5,
        name: 'HTML'
    },
    {
        icon: FaCss3Alt,
        name: 'CSS'
    },
    {
        icon: SiJavascript,
        name: 'Javascript'
    },
    {
        icon: FaReact,
        name: 'React',
        color: "#61DAFB"
    },
    {
        icon: SiPhp,
        name: 'PHP'
    },
    {
        icon: SiMysql,
        name: 'MySQL'
    },
    {
        icon: FaBootstrap,
        name: 'Bootstrap'
    },
    {
        icon: SiJquery,
        name: 'JQuery'
    }
];

const Socials= [
    {icon: FaLinkedin,
    color: "#2867B2",
    link: "https://www.linkedin.com/in/kaifa-best-84908375"},
    {icon: FaTwitter,
    color: "#1DA1F2",
    link: "https://twitter.com/KiteSura"},
    {icon: FaGithub,
    color: "#6e5494",
    link: "https://github.com/KaifaB"},
  ];

  const Projs = [
    {
        name: "Huntley Hub",
        image: Project1,
        tech: "HTML, CSS, Javascript, MySQL, PHP",
        summary: "A Rate My Professor clone that allows user to rate professors and post school-based news/questions after logging in.",
        link: "https://huntleyhub.com/",
        git: "https://github.com/CSUPomona/RateIt"
    },
    {
        name: "Rental Stars",
        image: Project2,
        tech: "React, (LocalStorage)",
        summary: "An ecommerce project that allows users to buy or rent scooters.",
        link: "https://rental-stars.herokuapp.com/",
        git: "https://github.com/KaifaB/rental-stars"
    },
    {
        name: "My Portfolio",
        image: Project3,
        tech: "React, (EmailJS)",
        summary: "The website that you are scrolling throught now that showcases my superior skills.",
        link: "",
        git: "https://github.com/KaifaB/Portfolio"
    }
  ]
export { Technologies, Socials, Projs};
