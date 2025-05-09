import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full py-20 bg-gradient-to-br from-cyan-50 via-blue-100 to-blue-200 flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="w-full max-w-2xl mx-auto px-6 bg-white/90 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="you@example.com"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message..."
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
