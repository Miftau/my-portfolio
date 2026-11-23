"use client";

import { Award, BookOpen, Briefcase, Cpu } from "lucide-react";
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  SKILL_GROUPS,
} from "@/data/portfolio";

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
            <Briefcase size={18} aria-hidden="true" />
          </div>
          <h3 className="h3">Work Experience</h3>
        </div>

        <ol className="timeline-list">
          {EXPERIENCE.map((item) => (
            <li className="timeline-item" key={`${item.title}-${item.period}`}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              {item.organization && (
                <p className="timeline-org">{item.organization}</p>
              )}
              <span>{item.period}</span>

              {item.highlights && item.highlights.length > 0 && (
                <ul className="timeline-highlights">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>

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
              {item.organization && (
                <p className="timeline-org">{item.organization}</p>
              )}
              <span>{item.period}</span>
              {item.detail && (
                <p className="timeline-text">
                  {item.label && <strong>{item.label} </strong>}
                  {item.detail}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="certifications">
        <div className="title-wrapper">
          <div className="icon-box">
            <Award size={18} aria-hidden="true" />
          </div>
          <h3 className="h3">Certifications &amp; Training</h3>
        </div>

        <ul className="certifications-grid">
          {CERTIFICATIONS.map((cert) => (
            <li className="certification-card" key={`${cert.title}-${cert.year}`}>
              <span className="certification-year">{cert.year}</span>
              <h4 className="h4 certification-title">{cert.title}</h4>
              {cert.issuer && (
                <p className="certification-issuer">{cert.issuer}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="skill">
        <div className="title-wrapper">
          <div className="icon-box">
            <Cpu size={18} aria-hidden="true" />
          </div>
          <h3 className="h3">Technical Skills</h3>
        </div>

        <div className="skill-groups">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group-card" key={group.category}>
              <h4 className="h4 skill-group-title">{group.category}</h4>
              <ul className="skill-pills">
                {group.skills.map((skill) => (
                  <li className="skill-pill" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
