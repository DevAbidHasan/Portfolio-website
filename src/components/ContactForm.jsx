import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import toast from "react-hot-toast";
import { sendContactEmail } from "../utils/sendContactEmail";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);

    try {
      await sendContactEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      toast.success("Message sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      if (err.message === "MISSING_KEY") {
        toast.error(
          "Contact form needs a Web3Forms key. Add VITE_WEB3FORMS_ACCESS_KEY to .env and restart the dev server.",
          { duration: 6000 }
        );
      } else {
        toast.error("Could not send. Try email or try again later.");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <p className="contact-form-honeypot" hidden aria-hidden="true">
        <label>
          Leave empty
          <input name="botcheck" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@email.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell me about your project or role…"
          rows={3}
          required
        />
      </div>

      <button
        type="submit"
        className="btn-pill btn-pill-primary contact-form-submit"
        disabled={sending}
      >
        {sending ? "Sending…" : "Send message"}
        <span className="btn-pill-icon" aria-hidden="true">
          <FiArrowRight size={18} />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
