interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    repo?: string;
}

export const ProjectCard = ({
    title,
    description,
    image,
    technologies,
    link,
    repo,
}: ProjectCardProps) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <div className="h-48 w-full overflow-hidden">
                <img src={image} alt={title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="text-lg font-bold text-violet-400 mb-2">{title}</h4>
                    <p className="text-gray-300 text-sm mb-3">{description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-3 mt-auto">
                    {link && (
                        <a href={link} target="_blank" className="text-sm text-primary-400 hover:underline">
                            Live Demo
                        </a>
                    )}
                    {repo && (
                        <a href={repo} target="_blank" className="text-sm text-primary-400 hover:underline">
                            Repository
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
