// ========================================
// PORTFOLIO DATA CONFIGURATION
// ========================================

const portfolioData = {
    // Personal information
    personal: {
        name: "Jerry Sun",
        email: "jerryjiayisun@gmail.com",
        status: "Open to Work",
        bio: "Full Stack Engineer specializing in robust <span>Java</span> backends and modern <span>React</span> interfaces."
    },

    // Social links
    social: {
        github: "https://github.com/jerrysuncoding/",
        linkedin: "https://www.linkedin.com/in/jiayi-sun-sde/"
    },

    // Latest work experience
    experience: {
        company: "Prism Insight Inc.",
        position: "Software Engineer Intern",
        period: "Apr 2025 – Sep 2025",
        description: "Built scalable backend services and infrastructure for Generative AI workflows. Focused on optimizing latency for LLM integrations.",
        techStack: ["Flask", "PostgreSQL", "AWS ECS", "Redis"]
    },

    // Education background
    education: [
        {
            school: "City University of Seattle",
            degree: "MS in Computer Science",
            period: "Sep 2023 – Sep 2025"
        },
        {
            school: "Hefei University of Technology",
            degree: "Bachelor of Engineering",
            period: "Sep 2012 – June 2016"
        }
    ],

    // Technical skills organized by category with colors and icons
    techStack: {
        languages: [
            { name: "Java", icon: "coffee" },
            { name: "Python", icon: "terminal" },
            { name: "TypeScript", icon: "braces" },
            { name: "SQL", icon: "database" }
        ],
        frontend: [
            { name: "React", icon: "atom" },
            { name: "Next.js", icon: "triangle" },
            { name: "Tailwind", icon: "wind" },
            { name: "HTML/CSS", icon: "code" }
        ],
        backend: [
            { name: "Node.js", icon: "server" },
            { name: "Spring Boot", icon: "leaf" },
            { name: "PostgreSQL", icon: "database" },
            { name: "Redis", icon: "layers" }
        ],
        tools: [
            { name: "Git", icon: "git-branch" },
            { name: "Docker", icon: "box" },
            { name: "AWS", icon: "cloud" },
            { name: "Linux", icon: "terminal-square" }
        ]
    },

    // Featured projects
    projects: [
        {
            title: "Automated Manga Translator",
            description: "An OCR pipeline translating Japanese Manga to English using Computer Vision.",
            link: "#",
            stats: [
                { value: "30%+", label: "Accuracy" },
                { value: "80%", label: "Time Saved" }
            ],
            techStack: ["Python", "OpenCV"]
        },
        {
            title: "Content Distribution Engine",
            description: "Enterprise publishing platform for automated article syndication.",
            link: "#",
            stats: [
                { value: "95%", label: "Success Rate" },
                { value: "Microservices", label: "Architecture" }
            ],
            techStack: ["Java", "Spring Boot"]
        }
    ],

    // Footer text
    footer: "Designed by Jerry Sun using Vanilla HTML & CSS."
};
