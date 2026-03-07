import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("EM8auJG0D3uOIAumJ");

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yn7owbw", // put Service ID here
        "template_t8ywh4t", // put Template ID here
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "EM8auJG0D3uOIAumJ", // your Public Key (already in your code)
      )
      .then(() => {
        alert("Thanks for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email failed:", error);
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Let's <span className="gradient-text">Talk</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <textarea
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
            />
            <Button variant="hero" className="w-full" type="submit">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:developerthejas@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />{" "}
                  developerthejas@gmail.com
                </a>
                <a
                  href="https://wa.me/919141417592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary" /> WhatsApp
                  Chat
                </a>
              </div>
            </div>

            {/* Free consultation CTA */}
            <div className="gradient-border rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Free Website Strategy Call</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free 30-minute consultation to discuss your project.
              </p>
              <Button variant="glow" asChild>
                <a href="tel:+919141417592">Book Free Call</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
