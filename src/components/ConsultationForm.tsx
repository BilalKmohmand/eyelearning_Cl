"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const GRADES = [
  "Pre-K",
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const PROGRAMS = ["Math", "English", "Summit of Math", "Math and English"];

const CONTACT_TIMES = [
  "Weekday afternoon",
  "Saturday morning",
  "Either is fine",
];

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const parentName = String(data.get("parentName") || "").trim();
    const childName = String(data.get("childName") || "").trim();
    const grade = String(data.get("grade") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telephone = String(data.get("telephone") || "").trim();
    const program = String(data.get("program") || "").trim();
    const preferredContactTime = String(
      data.get("preferredContactTime") || ""
    ).trim();
    const consent = data.get("consent");

    if (!parentName) next.parentName = "Please enter the parent or guardian name.";
    if (!childName) next.childName = "Please enter the child’s name.";
    if (!grade) next.grade = "Please select a grade.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!telephone || telephone.replace(/\D/g, "").length < 10) {
      next.telephone = "Please enter a valid telephone number.";
    }
    if (!program) next.program = "Please select a program of interest.";
    if (!preferredContactTime) {
      next.preferredContactTime = "Please select a preferred contact time.";
    }
    if (!consent) {
      next.consent = "Consent is required to submit this form.";
    }

    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      setMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch("/api/consultation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage(
        "Thank you. Your request was received. Eye Level Learning Center of Hicksville will contact you to confirm a free level test and consultation."
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please call (516) 597-5300 or try again."
      );
    }
  }

  return (
    <form className="panel" onSubmit={onSubmit} noValidate>
      <h2 className="section-title" id="consultation-form">
        Book a Free Level Test and Consultation
      </h2>
      <p className="section-lead">
        Tell us about your child. We will follow up to schedule a diagnostic
        level test at our Hicksville center.
      </p>

      {message ? (
        <div
          className={`form-status ${status === "success" ? "success" : status === "error" || Object.keys(errors).length ? "error" : ""}`}
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      ) : null}

      <input type="hidden" name="location" value="Hicksville" />

      <div className="form-grid two">
        <div className="field">
          <label htmlFor="parentName">Parent or guardian name</label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            autoComplete="name"
            required
            placeholder=" "
          />
          {errors.parentName ? (
            <p className="field-error">{errors.parentName}</p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="childName">Child’s name</label>
          <input
            id="childName"
            name="childName"
            type="text"
            required
            placeholder=" "
          />
          {errors.childName ? (
            <p className="field-error">{errors.childName}</p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="grade">Grade</label>
          <select id="grade" name="grade" required defaultValue="">
            <option value="" disabled>
              Select grade
            </option>
            {GRADES.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
          {errors.grade ? <p className="field-error">{errors.grade}</p> : null}
        </div>

        <div className="field">
          <label htmlFor="program">Program of interest</label>
          <select id="program" name="program" required defaultValue="">
            <option value="" disabled>
              Select program
            </option>
            {PROGRAMS.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
          {errors.program ? (
            <p className="field-error">{errors.program}</p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder=" "
          />
          {errors.email ? <p className="field-error">{errors.email}</p> : null}
        </div>

        <div className="field">
          <label htmlFor="telephone">Telephone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            required
            placeholder=" "
          />
          {errors.telephone ? (
            <p className="field-error">{errors.telephone}</p>
          ) : null}
        </div>
      </div>

      <div className="field" style={{ marginTop: "1rem" }}>
        <label htmlFor="preferredContactTime">Preferred contact time</label>
        <select
          id="preferredContactTime"
          name="preferredContactTime"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a time
          </option>
          {CONTACT_TIMES.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.preferredContactTime ? (
          <p className="field-error">{errors.preferredContactTime}</p>
        ) : null}
      </div>

      <div className="checkbox-row" style={{ marginTop: "1.25rem" }}>
        <input id="consent" name="consent" type="checkbox" value="yes" required />
        <label htmlFor="consent">
          I agree to be contacted about scheduling a free level test and
          consultation, and I have read the{" "}
          <a href="/privacy/">privacy policy</a>.
        </label>
      </div>
      {errors.consent ? <p className="field-error">{errors.consent}</p> : null}

      <button
        className="btn btn-primary"
        type="submit"
        style={{ marginTop: "1.5rem" }}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Request Free Level Test"}
      </button>
    </form>
  );
}
