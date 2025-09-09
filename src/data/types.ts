// Type definitions for portfolio data

export interface NavLink {
    id: string;
    title: string;
}

export interface Education {
    title: string;
    institution_name: string;
    date: string;
    logo: any;
    awards?: string[];
    positions?: string[];
    events?: string[];
}

export interface Technology {
    name: string;
    icon: any;
}

export interface Certification {
    title: string;
    type: string;
    icon: any;
    date: string;
    credential: any;
}

export interface Project {
    title?: string;
    description?: string;
    technologies?: string[];
}
