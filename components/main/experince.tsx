"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";

/* ----------------------------------
   Inline data (formerly constants)
----------------------------------- */

type ExperienceItem = {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer / Technical Support Intern",
    companyName: "Africa’s Talking",
    icon: "/logo.png",
    iconBg: "#383E56",
    date: "2023 – 2025",
    points: [
      "Designed and implemented full-stack solutions integrating SMS and USSD APIs, focusing on seamless frontend and backend flows to enhance developer usability.",
      "Built and maintained developer demo apps and technical resources, simplifying API adoption and accelerating integration timelines.",
      "Led initiatives supporting hackathons and Women in Tech programs, coordinating technical workshops and community-driven projects.",
      "Contributed to backend services for internal tools and demos, improving reliability and scalability of APIs for developers.",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    companyName: "Lane",
    icon: "/logo.png",
    iconBg: "#1d1836",
    date: "2023 - 2024",
    points: [
      "Built and maintained production-grade web applications with a focus on React.js, Tailwind CSS, and TypeScript, delivering scalable, performant UIs.",
      "Developed reusable frontend components, implemented global state management with React Hooks & Context API, and optimized complex UI workflows.",
      "Integrated backend services and third-party APIs, including NestJS, PostgreSQL, Firebase Auth, and Google APIs, ensuring secure, efficient, and maintainable full-stack solutions.",
      "Collaborated in a Git-based workflow with pull requests, code reviews, and feature branching; provided technical guidance to junior developers and peers.",
      "Implemented features end-to-end, including data modeling, API endpoints, authentication flows, and frontend integration, demonstrating full ownership of projects.",
    ],
  },
  {
    title: "Full-Stack Developer",
    companyName: "Amaris Solutions Group",
    icon: "/logo.png",
    iconBg: "#1d1836",
    date: "2023 - 2023",
    points: [
      "Contributed to Fariji, a digital platform for funeral planning and family preparedness, implementing both frontend and backend features to deliver a polished, full-stack product.",
      "Built and optimized user-facing interfaces while integrating backend endpoints to manage dynamic data, authentication, and notifications.",
      "Ensured responsive design and usability while collaborating closely with designers and backend engineers to translate requirements into robust, maintainable code.",
      "Provided technical recommendations on architecture and workflows, contributing to scalable and future-proof solutions.",
    ],
  },
];

/* ----------------------------------
   Card Component
----------------------------------- */

const ExperienceCard: React.FC<ExperienceItem> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

/* ----------------------------------
   Main Exported Component
----------------------------------- */

export const Experience = () => {
  return (
    <section id="experience" className="relative z-0 mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-secondary text-sm uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white text-4xl font-bold">Experience.</h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
