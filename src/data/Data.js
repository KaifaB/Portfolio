import { FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaBootstrap, FaNode, FaNodeJs } from 'react-icons/fa';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiPhp, SiMysql, SiJquery, SiMongodb } from 'react-icons/si'
import Project1 from '../img/Project1.png';
import Project2 from '../img/Project1.png';


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
        icon: FaWordpress,
        name: 'WordPress'
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
    },
    {
        icon: SiMongodb,
        name: 'MongoDB'
    },
    {
        icon: FaNodeJs,
        name: 'Express'
    },
    {
        icon: FaNode,
        name: 'NodeJS'
    }
];

const Socials= [
    {icon: FaLinkedin,
    color: "#2867B2",
    link: ""},
    {icon: FaTwitter,
    color: "#6e5494",
    link: ""},
    {icon: FaGithub,
    color: "#1DA1F2",
    link: ""},
  ];

  const Projs = [
    {
        name: "Huntley Hub",
        image: Project1,
        tech: "HTML, CSS, Javascript, MySQL, PHP"
    },
    {
        name: "Rental Stars",
        image: Project2,
        tech: "React, Node, Express"
    }
  ]
export { Technologies, Socials, Projs};
