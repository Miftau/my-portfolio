"use client";

import { BookOpen, Briefcase } from "lucide-react";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/data/portfolio";

interface ResumeSectionProps {
  active: boolean;
}

export default function ResumeSection({ active }: ResumeSectionProps) {
  return (
    <article className={`resume${active ? " active" : ""}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={18} aria-hidden="true" />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {EDUCATION.map((item) => (
            <li className="timeline-item" key={`${item.title}-${item.period}`}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">
                <strong>{item.label} </strong>
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={18} aria-hidden="true" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {EXPERIENCE.map((item) => (
            <li className="timeline-item" key={`${item.title}-${item.period}`}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">
                <strong>{item.label} </strong>
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {SKILLS.map((skill) => (
            <li className="skills-item" key={skill.name}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
