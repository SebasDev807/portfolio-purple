interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    repo?: string;
}


export const projects: Project[] = [
    {
        title: "Solar System 3D",
        description:
            "Interactive 3D solar system built with React, Three.js, and React Three Fiber.",
        image: "/project_1.jpg",
        technologies: ["React", "Three.js", "React Three Fiber"],
        link: "https://imaginative-quokka-70a58e.netlify.app/",
    },
    {
        title: "Landing Page",
        description:
            "VELTRIX – Turn your ideas into experiences. Efficient, secure, and scalable software development designed to optimize processes and elevate digital innovation to the next level. Built with Astro.",
        image: "/project_2.jpg",
        technologies: ["Astro", "JavaScript", "Web Development"],
        link: "https://veltrix-orpin.vercel.app/",
        repo: "https://github.com/Veltrix-team/veltrix-oficial-landing",
    },
    {
        title: "Calorie Counter",
        description:
            "Track your daily calorie intake with ease. Built with React and localStorage for persistent tracking of your meals and calories.",
        image: "/project_3.jpg",
        technologies: ["React", "JavaScript", "localStorage"],
        link: "https://calories-counter-lyart.vercel.app/",
        repo: "https://github.com/SebasDev807/calories-counter/tree/main",
    },
    {
        title: "Foro Unimayor",
        description:
            "Foro Unimayor is a social network created as a project for the Software Engineering course for students to share questions, based on Reddit and Stack Overflow.",
        image: "/project_4.jpg",
        technologies: ["React", "JavaScript", "localStorage"],
        link: "http://foro-unimayor.vercel.app",
        repo: "https://github.com/SebasDev807/foro-unimayor",
    },
    {
        title: "UI Themes Playground",
        description:
            "A React practice project focused on building a UI with themes using Context API. Includes dark/light mode toggling and reusable UI components built with Tailwind CSS.",
        image: "/project_5.jpg", // puedes cambiar por tu imagen
        technologies: ["React", "Tailwind CSS", "Context API", "UI Design"],
        link: "https://ejercicio-5-context-api.vercel.app/auth/login", // link al proyecto si lo subes
        repo: "https://github.com/SebasDev807/ejercicio-5-context-api/tree/main", // link al repositorio
    },
    {
        title: "Personal Portfolio",
        description:
            "My personal portfolio built with Astro, React, and TailwindCSS, designed to showcase my projects and web development skills professionally and attractively.",
        image: "/project_6.jpg",
        technologies: ["Astro", "React", "TailwindCSS", "Web Design"],
        link: "https://portfolio-purple-amfo.vercel.app/",
        repo: "https://github.com/SebasDev807/portfolio-purple/tree/main",
    },
];
