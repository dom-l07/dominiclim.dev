import {
    republicpoly, northlandss,
    html, css, javascript,
    python, mysql, mongodb, typescript,
    aws,
    openedg
} from "../assets";

import navigationData from "./navigation.json";
import educationData from "./education.json";
import technologiesData from "./technologies.json";
import certificationsData from "./certifications.json";
import projectsData from "./projects.json";

const assetMap: Record<string, any> = {
    republicpoly,
    northlandss,
    html,
    css,
    javascript,
    python,
    mysql,
    mongodb,
    typescript,
    aws,
    openedg
};

export const navLinks = navigationData;

export const education = educationData.map(item => ({
    ...item,
    logo: assetMap[item.logo]
}));

export const technologies = technologiesData.map(item => ({
    ...item,
    icon: assetMap[item.icon]
}));

export const certifications = certificationsData.map(item => ({
    ...item,
    icon: assetMap[item.icon],
    credential: assetMap[item.credential]
}));

export const projects = projectsData;

export { navigationData, educationData, technologiesData, certificationsData, projectsData };
