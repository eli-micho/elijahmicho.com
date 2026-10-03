import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer II",
    company: "Communify Fincentric",
    employment: "Full-time",
    location: "Calgary, AB",
    period: "Jul 2023 - Present",
    description:
      "Developing TypeScript applications that deliver real-time financial data to enterprise banking clients, supporting more than one million daily active users.",
    highlights: [
      "Led a data-intensive administration platform with granular permissions, configuration management, and complex workflow automation.",
      "Introduced TestCafe end-to-end testing across six repositories, reducing regression risk and improving deployment confidence.",
      "Partnered with backend and product teams to evolve GraphQL APIs for enterprise financial applications.",
    ],
    technologies: ["TypeScript", "React", "GraphQL", "TestCafe", "Claude Code"],
  },
  {
    title: "Frontend Software Developer",
    company: "TotalETO",
    employment: "Full-time",
    location: "Toronto, ON",
    period: "Sep 2021 - Jul 2023",
    description:
      "Developed and maintained reusable React and TypeScript components that improved UI consistency and accelerated feature delivery across applications.",
    highlights: [
      "Built responsive, accessible interfaces in close collaboration with design and product teams using Figma workflows.",
      "Implemented unit and integration testing with React Testing Library and Jest to strengthen frontend reliability.",
      "Designed and integrated GraphQL schemas, queries, and mutations for scalable client-server interactions.",
    ],
    technologies: ["React", "TypeScript", "Jest", "GraphQL", "Figma"],
  },
  {
    title: "Fullstack Software Developer",
    company: "Essence Home And Health Care",
    employment: "Full-time",
    location: "Calgary, AB",
    period: "Jan 2020 - Feb 2021",
    description:
      "Developed a modern React website and booking platform that improved online visibility and streamlined appointment scheduling.",
    highlights: [
      "Built custom scheduling and appointment management flows that reduced administrative overhead.",
      "Improved operational efficiency with a focused, maintainable booking experience for staff and clients.",
    ],
    technologies: ["React", "JavaScript", "Node.js", "REST APIs"],
  },
];
