import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "../data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "918848833410"; // Hardcoded WhatsApp number as requested
    const text = `*New Contact Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Get In <span className="text-[#a855f7]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#a855f7] to-transparent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-[#1a1a2e] border border-[#2d2d44] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-[#1a1a2e] border border-[#2d2d44] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-[#1a1a2e] border border-[#2d2d44] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#9333ea] to-[#d8b4fe] text-white font-bold py-4 rounded-xl transition-transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-10 text-[#94a3b8]">
              I'm always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="flex items-center gap-6 p-5 rounded-2xl bg-[#1a1a2e] border border-[#2d2d44] group hover:border-[#a855f7]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c084fc] to-[#9333ea] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-6 p-5 rounded-2xl bg-[#1a1a2e] border border-[#2d2d44] group hover:border-[#22d3ee]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#22d3ee] to-[#0284c7] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 {profile.phone}</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-6 p-5 rounded-2xl bg-[#1a1a2e] border border-[#2d2d44] group hover:border-[#e879f9]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e879f9] to-[#c026d3] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(232,121,249,0.5)]">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">{profile.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
