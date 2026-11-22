"use client";

import { useState } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className={`sidebar${expanded ? " active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            width={80}
            height={80}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={PROFILE.name}>
            {PROFILE.displayName}
          </h1>
          <p className="title">{PROFILE.role}</p>
        </div>

        <button
          type="button"
          className="info_more-btn"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span>{expanded ? "Hide Contacts" : "Show Contacts"}</span>
          <ChevronDown
            size={16}
            className={`chevron-icon${expanded ? " rotated" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={18} aria-hidden="true" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="contact-link"
                title={PROFILE.email}
              >
                {PROFILE.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={18} aria-hidden="true" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href={PROFILE.phoneHref} className="contact-link">
                {PROFILE.phoneDisplay}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Github size={18} aria-hidden="true" />
            </div>

            <div className="contact-info">
              <p className="contact-title">GitHub</p>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {PROFILE.githubLabel}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={18} aria-hidden="true" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{PROFILE.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator" />

        <ul className="social-list">
          <li className="social-item">
            <a
              href={PROFILE.socials[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a
              href={PROFILE.socials[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <Twitter size={18} aria-hidden="true" />
            </a>
          </li>
          <li className="social-item">
            <a
              href={PROFILE.socials[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
