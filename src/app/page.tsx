'use client';

import './globals.css'
import Image from 'next/image'
import { Github, Linkedin, Mail, Phone, BookOpen, Briefcase, GraduationCap, Code, BookOpen as BookOpenIcon, Gamepad, Moon, Sun } from 'lucide-react';
import { useDarkMode } from './hooks/useDarkMode';
import { Header } from './components/Header';
import { Section } from './components/section';
import { Skills } from './components/Skills';
export default function LandingPage() {
  
  const [darkMode, setDarkMode] = useDarkMode();
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <main className="container mx-auto px-4 py-8">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Section title='Resumo'>
          <p className="text-gray-700 dark:text-gray-300">
            Estou à procura de uma oportunidade onde possa utilizar meus conhecimentos em JavaScript, React e 
            Node. Dedicado a desenvolver aplicações web escaláveis, responsivas, interativas e eficientes, estou motivado 
            para me integrar a uma equipe dinâmica, contribuindo ativamente enquanto aprimoro minhas habilidades com 
            experiências práticas.
          </p>
        </Section>

        <Skills />

        <Section title='Experiências'>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center border-l-4 border-gray-300 dark:border-gray-600 pl-3">
            <Briefcase className="mr-2" />
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Gerente de Desenvolvimento de Sistemas | Norte Tel – Pimenta Bueno/RO</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">07/2022 - Atualmente</p>
              <p className="text-gray-700 dark:text-gray-300">
                Liderei a reformulação dos fluxos de comunicação para interação de clientes entre Opa!Suite e Whatsapp, além de 
                realizar manutenções e melhorias tanto no Opa!Suite quanto no IXCSoft. Fui responsável pela criação de APIs para 
                otimizar processos de inserção de tarefas no IXC, melhorando em 80% a eficiência de trabalho das filiais. Líder do 
                departamento de Tecnologia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Desenvolvedor Full Stack | Freelancer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">07/2024 - 08/2024</p>
              <p className="text-gray-700 dark:text-gray-300">
                Desenvolvi uma aplicação web completa utilizando React e TypeScript, implementando autenticação JWT, integração com 
                MongoDB via Prisma e criando uma interface intuitiva para gerenciamento de usuários. O projeto incluiu desde a criação 
                de APIs até a implementação de funcionalidades de registro e login, com foco em segurança e performance.
              </p>
              <p className="text-gray-600 dark:text-gray-400">Repositórios: Schambin/signin-web | Schambin/signin-api</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Desenvolvedor Full Stack | NorteTel</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">09/2024 - 10/2024</p>
              <p className="text-gray-700 dark:text-gray-300">
                Criei um sistema de formulários reutilizáveis com React e TypeScript, permitindo o envio de dados e arquivos (PDF/DOCX) 
                para um Banco de dados no Google Sheets via API. O projeto incluiu validação de dados utilizando Zod, integração com 
                Google Drive para armazenamento de arquivos, foco em escalabilidade e manutenção do código, além de implementação 
                de medidas de segurança como Rate Limiting e HTTPS.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Educação" icon={<GraduationCap />}>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Engenharia de Software – Cruzeiro do Sul</h3>
              <p className="text-gray-600 dark:text-gray-400">01/2023 – 01/2026</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Desenvolvedor FullStack – RocketSeat</h3>
              <p className="text-gray-600 dark:text-gray-400">01/2024 – 01/2025</p>
            </li>
          </ul>
        </Section>

        <Section title="Cursos Relevantes" icon={<BookOpen />}>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>RocketSeat HTML, CSS JavaScript</li>
            <li>RocketSeat React</li>
            <li>RocketSeat Node</li>
            <li>RocketSeat Clean Code</li>
            <li>RocketSeat Java</li>
            <li>UX/UI para desenvolvedores</li>
            <li>Figma para desenvolvedores</li>
            <li>Aplicações Web</li>
            <li>Acessibilidades Web</li>
          </ul>
        </Section>

        <Section title="Hábitos de Estudo" icon={<BookOpenIcon />}>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Minha principal plataforma de estudo é a RocketSeat, onde aprofundo meus conhecimentos em:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Java</li>
              <li>Node</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Frameworks como NextJs, NestJs</li>
              <li>Microframeworks como Vite, Express e Fastify</li>
            </ul>
            <p>
              Além disso, frequentemente recorro ao Google e YouTube para buscar conteúdos específicos que necessito.
            </p>
            <p>
              Tenho me dedicado cada vez mais à leitura de livros técnicos. Atualmente, estou lendo:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>"Desenvolvimento Real de Software: um Guia de Projetos Para Fundamentos em Java"</li>
              <li>"Aprenda Domain-driven Design: Alinhando Arquitetura de Software e Estratégia de Negócios"</li>
            </ul>
          </div>
        </Section>

        <Section title="Atividades Favoritas" icon={<Gamepad />}>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Embora atualmente esteja focado nos estudos, sou um grande entusiasta de videogames. Alguns dos meus jogos favoritos incluem:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>osu!</li>
              <li>Cyberpunk</li>
              <li>Apex Legends</li>
              <li>Terraria</li>
              <li>Minecraft (inclusive já desenvolvi mods quando era mais jovem)</li>
            </ul>
            <p>
              Além dos jogos, gosto muito de ler. Não tenho um gênero favorito específico, geralmente escolho livros que me parecem interessantes à primeira vista.
            </p>
            <p>
              Também aprecio assistir séries. Algumas das minhas favoritas são:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Dr. House</li>
              <li>Todo Mundo Odeia o Chris</li>
            </ul>
          </div>
        </Section>

        <Section title="Atividades de Liderança e Interesse">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Professor | NorteTel</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">09/2024 – 09/2024</p>
            <p className="text-gray-700 dark:text-gray-300">
              Ministrei aulas de tecnologia com mais de 15 membros no âmbito do projeto ODS da faculdade. Cobri 
              fundamentos de HTML, CSS e JavaScript. Abordei conceitos de front-end, back-end e bancos de dados, além de 
              como as aplicações web interagem entre si e a integração da programação no cotidiano.
            </p>
          </div>
        </Section>
      </main>
    </div>
  )
}