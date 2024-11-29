import { ReactNode } from "react";

interface SectionProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
}

export function Section({title, icon, children}: SectionProps) {
    return (
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center border-l-4 border-gray-300 dark:border-gray-600 pl-3">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
            </h2>
            {children}
        </section>
    )
}