"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

interface ContactSectionProps {
  active: boolean;
}

export default function ContactSection({ active }: ContactSectionProps) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    fullname.trim().length > 0 &&
    email.trim().includes("@") &&
    message.trim().length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${fullname.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${fullname.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <article
      className={`contact${active ? " active" : ""}`}
      data-page="contact"
    >
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            title="Ibadan, Oyo State, Nigeria location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7913.398455935627!2d3.868775235848148!3d7.387562384313787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d0ffa026e23%3A0x766da2e50ee6265c!2sDugbe%20Railway%20Station%20Ibadan!5e0!3m2!1sen!2sng!4v1748042348277!5m2!1sen!2sng"
            width={800}
            height={600}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
                setSubmitted(false);
              }}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubmitted(false);
              }}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setSubmitted(false);
            }}
          />

          <div className="form-footer">
            {submitted && (
              <p className="form-feedback" role="status">
                Opening your email client to send directly to {PROFILE.email}.
              </p>
            )}

            <button className="form-btn" type="submit" disabled={!isValid}>
              <Send size={16} aria-hidden="true" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </article>
  );
}
