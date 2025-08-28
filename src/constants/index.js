import {
    republicpoly, northlandss,
    html, css, javascript,
    python, mysql, mongodb, typescript,
    aws,
    openedg
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About"
    },
    {
        id: "education",
        title: "Education"
    },
    {
        id: "certifications",
        title: "Certifications"
    },
    {
        id: "skills",
        title: "Skills"
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "contact",
        title: "Contact"
    }
]

const education = [
    {
        title: "Diploma in Enterprise Cloud Computing & Management",
        instituion_name: "Republic Polytechnic",
        date: "Apr 2024 - Present",
        logo: republicpoly,
        awards: [
            "Director's Roll of Honour - Year 2024 Semester 2",
            "Director's Roll of Honour - Year 2024 Semester 1"
        ],
        events: [
            "Participation in BrianHack [2025]"
        ]
    },
    {
        title: "General Certificate of Education Ordinary Level",
        instituion_name: "Northland Secondary School",
        date: "Jan 2020 - Nov 2023",
        logo: northlandss,
        awards: [
            "School Outstanding Leadership Award 2023",
        ],
        positions: [
            "Band Major of Pipe Band (2022 - 2023)"
        ],
        events: [
            "Represented School at New Year's Performance (Virtual) [2022]",
            "Represented School at Residents' Network Welcoming Party To Receive Grassroot Advisor [2022]",
            "Represented School at Speech Day Performance (Virtual) [2022]",
            "Singapore and Southeast Asian Pipe Band Championship 2023 - Certification of Participation (Band)"
        ]
    }
]

const technologies = [
    {
        name: "Python",
        icon: python
    },
    {
        name: "MySQL",
        icon: mysql
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "Typescript",
        icon: typescript
    },
    {
        name: "HTML",
        icon: html
    },
    {
        name: "CSS",
        icon: css
    },
    {
        name: "Javascript",
        icon: javascript
    },
    {
        name: "AWS",
        icon: aws
    },
]

const certifications = [
    {
        title: "Certified Entry-Level Python Programmer",
        type: "Professional Certificate",
        icon: openedg,
        date: "Nov 2024",
        credential: openedg
    }
]

const projects = [

]

export {
    education,
    technologies,
    certifications,
    projects
}