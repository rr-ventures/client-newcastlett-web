import { useState } from "react";
import { SITE } from "../config";
import { track } from "../analytics";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <div id="contact" className="card">
      <h3 style={{ marginTop: 0 }}>Contact</h3>
      <p>
        No phone line — email is best. For now, submit the form to draft your message, then we’ll open your email
        client to send to {SITE.email}.
      </p>
      <a className="button primary" href={`mailto:${SITE.email}`} onClick={() => track("email_click")}>
        Email Us
      </a>
      <div style={{ margin: "1rem 0", fontWeight: 700 }}>Quick form (POC)</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStatus("sent");
          track("form_submit");
          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const message = [`Name: ${formData.get("name")}`, `Email: ${formData.get("email")}`, `Question: ${formData.get("message")}`]
            .filter(Boolean)
            .join("%0D%0A");
          window.open(`mailto:${SITE.email}?subject=Question%20from%20website&body=${message}`, "_blank");
        }}
        className="grid"
        style={{ gap: "0.75rem", maxWidth: 520 }}
      >
        <label>
          <div>Name</div>
          <input name="name" required style={inputStyle} />
        </label>
        <label>
          <div>Email</div>
          <input type="email" name="email" required style={inputStyle} />
        </label>
        <label>
          <div>Question</div>
          <textarea name="message" required rows={4} style={inputStyle} />
        </label>
        <button type="submit" className="button secondary">
          Ask a Question
        </button>
      </form>
      {status === "sent" && (
        <div className="badge" style={{ marginTop: 10 }}>
          Form captured — finish sending via your email app.
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem",
  borderRadius: 10,
  border: "1px solid #cbd5e1",
  fontSize: "1rem",
};
