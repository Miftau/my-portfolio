"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  CLIENTS,
  PROFILE,
  SERVICES,
  TESTIMONIALS,
  type TestimonialItem,
} from "@/data/portfolio";

interface AboutSectionProps {
  active: boolean;
}

export default function AboutSection({ active }: AboutSectionProps) {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialItem | null>(null);

  useEffect(() => {
    if (!selectedTestimonial) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedTestimonial(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedTestimonial]);

  return (
    <article className={`about${active ? " active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {PROFILE.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I Offer</h3>

        <ul className="service-list">
          {SERVICES.map((service) => (
            <li className="service-item" key={service.title}>
              <div className="service-icon-box">
                <img
                  src={service.icon}
                  alt={service.iconAlt}
                  width={40}
                  height={40}
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {TESTIMONIALS.map((item) => (
            <li className="testimonials-item" key={item.id}>
              <button
                type="button"
                className="content-card testimonial-trigger"
                onClick={() => setSelectedTestimonial(item)}
              >
                <figure className="testimonials-avatar-box">
                  <img
                    src={item.avatar}
                    alt={item.avatarAlt}
                    width={60}
                    height={60}
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">{item.name}</h4>

                <div className="testimonials-text">
                  <p>{item.quote}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div
        className={`modal-container${selectedTestimonial ? " active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!selectedTestimonial}
        aria-label={selectedTestimonial?.name ?? "Testimonial"}
      >
        <div
          className={`overlay${selectedTestimonial ? " active" : ""}`}
          onClick={() => setSelectedTestimonial(null)}
        />

        {selectedTestimonial && (
          <section className="testimonials-modal">
            <button
              type="button"
              className="modal-close-btn"
              aria-label="Close testimonial"
              onClick={() => setSelectedTestimonial(null)}
            >
              <X size={18} aria-hidden="true" />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.avatarAlt}
                  width={80}
                  height={80}
                />
              </figure>

              <img
                src="/images/icon-quote.svg"
                alt=""
                aria-hidden="true"
                width={35}
                height={35}
              />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedTestimonial.name}</h4>
              <time dateTime={selectedTestimonial.dateTime}>
                {selectedTestimonial.date}
              </time>
              <div>
                <p>{selectedTestimonial.quote}</p>
              </div>
            </div>
          </section>
        )}
      </div>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {CLIENTS.map((client) => (
            <li className="clients-item" key={client.name}>
              {client.url ? (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={client.name}
                >
                  <img src={client.logo} alt={client.name} />
                </a>
              ) : (
                <div className="client-logo-static" title={client.name}>
                  <img src={client.logo} alt={client.name} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
