import { Code2, GraduationCap, Briefcase, Award, Rocket, Heart, Coffee, BookOpen, Zap, Database, Server, Cloud, Mail, MapPin, Phone, Icon, icons } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import todoapp from '../assets/todo-app.png'
import movieexplorer from '../assets/movie-explorer.png'
import mernAuth from '../assets/mern-auth.png'
import mernShortUrl from '../assets/mern-shorturl.png'
import portfolio from '../assets/portfolio.png'
import { head, image, title } from "framer-motion/client";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "React", level: 95, color: "bg-yellow-200" },
            { name: "TypeScript", level: 90, color: "bg-blue-600" },
            { name: "Next.js", level: 70, color: "bg-gray-500" },
            { name: "Tailwind CSS", level: 90, color: "bg-pink-500" },
        ]
    },
    {
        title: "Backend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces",
        skills: [
            { name: "Node.js", level: 95, color: "bg-green-500" },
            { name: "Express.js", level: 90, color: "bg-pink-400" },
            { name: "Python", level: 70, color: "bg-gray-900" },
            { name: "REST APIs", level: 90, color: "bg-yellow-500" },
        ]
    },
    
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vite",
    "Figma",
    "Notion",
    "MongoDB",
    "REST-APIs"
];

export const STATS = [
    {number: "5+", label:"Project Completed"},
    {number: "3+", label:"Years Experience"},
    {number: "10+", label:"Technologies"},
    {number: "100%", label:"Clients Satisfaction"},
    
];

export const PROJECTS = [
    {id: 1,
     title: "To-do app",
     description: "A responsive Todo app built with React, Vite, and Tailwind CSS.",
     image: todoapp,
     tags: ["Javascript", "React", "Vite", "TailwindCSS-v4"],
     liveUrl:"https://todo-app-drab-alpha-42.vercel.app/",
     githubUrl:"https://github.com/oumaimabnz/Todo-app",
     featured: false,
     category: "Frontend",
    },
    {id: 2,
     title: "Movie explorer",
     description: "A movie exploration app built with React that lets users browse and search movies using a public API.",
     image: movieexplorer,
     tags: ["React", "JavaScript", "API", "Responsive UI", "Vite"],
     liveUrl:"https://movie-explorer-ten-lime.vercel.app/",
     githubUrl:"https://github.com/oumaimabnz/Movie-explorer",
     featured: false,
     category: "Frontend",
    },
    {id: 3,
     title: "Portfolio",
     description: "Early portfolio project showcasing basic React components and responsive layout",
     image: portfolio,
     tags: ["React", "Javascript", "HTMS5","CSS3", "Vite", "Responsive UI"],
     liveUrl:"https://portfolio-nu-three-67.vercel.app/",
     githubUrl:"https://github.com/oumaimabnz/Portfolio",
     featured: false,
     category: "Frontend",
    },
    {id: 4,
     title: "MERN-URL-shortener",
     description: "MERN URL shortener app with QR code generation, download, and MongoDB persistence",
     image: mernShortUrl,
     tags: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS-v4"],
     liveUrl:"https://mern-url-shortener-drab.vercel.app/",
     githubUrl:"https://github.com/oumaimabnz/MERN-URL-shortener",
     featured: false,
     category: "MERN",
    },
    {id: 5,
     title: "MERN-authentication",
     description: "Full-stack MERN authentication system with JWT-based login and protected routes",
     image: mernAuth,
     tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS-v4"],
     liveUrl:"https://mern-authentication-iota.vercel.app/",
     githubUrl:"https://github.com/oumaimabnz/MERN-authentication",
     featured: false,
     category: "MERN",
    },
];

export const JOURNEY_STEPS = [
    {
        year: 2021,
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Began learning web developement with HTML, CSS and Javascript.",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: 2022,
        title: "First Internship",
        company: "Yassir SPA",
        description: "Completed my first internship where I worked on real-world UI development, implemented responsive interfaces, and collaborated with a development team.",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: 2023,
        title: "Computer Science Degree",
        company: "University of Technology",
        description: "Graduated, specializing in web technologies and software engineering.",
        icon: GraduationCap,
        color: "bg-green-500",
    },

    {
        year: 2024,
        title: "React & UI/UX Development",
        company: "Self-learning",
        description: "Strengthened my React knowledge, learned UI/UX design fundamentals, and created several small apps to refine my frontend development workflow.",
        icon: Rocket,
        color: "bg-yellow-500",
    },
    {
        year: 2025,
        title: "Portfolio & Real Projects",
        company: "Freelance / Personal Work",
        description: "Focused on building polished frontend projects using React, Next.js, and TailwindCSS to prepare for professional opportunities.",
        icon: Award,
        color: "bg-purple-500",
    },
]

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces that users love."
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning complex challenges into elegant solutions."
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices."
    },

]

export const SOCIAL_LIKNS = [
    {
        name: "Github",
        icon: FiGithub,
        url:"https://github.com/oumaimabnz",
        color:"hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url:"https://www.linkedin.com/in/oumaima-benaziza",
        color:"hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url:"mailto:oumaimabenaziza21@gmail.com",
        color:"hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
]

export const CONTACT_INFO = [
    {
        icon: MapPin,
        lable: "Location",
        value: "Chemnitz, Germany",
    },
    {
        icon: Mail,
        lable: "Email",
        value: "oumaimabenaziza21@gmail.com",
    },
    {
        icon: Phone,
        lable: "Phone",
        value: "+49 152 18839874",
    },
]