import { Code } from "lucide-react"
import { Section } from "./section"

const skills = [
    "JavaScript", "Node", "React", "TypeScript", "Zod", "TailwindCSS", "Scss", "MongoDB", "SQL", "SQLite", 
    "Java", "Spring Boot", "Git", "GitHub", "NextJs", "Vite", "Comunicação", "Inglês C1",
    "Scrum", "Bitrix", "Trabalho em Equipe", "Resolução de problemas", "Colaboração em projetos"
]

export function Skills() {
    return (
        <Section title="Habilidades" icon={<Code />}>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <li 
                        key={index} 
                        className={
                            `bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-center text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-100 ${
                            skill.length > 10 ? 'text-xs' : 'text-sm'
                        }`}
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </Section>

    )
}