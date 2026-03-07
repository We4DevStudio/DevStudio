import { motion } from "framer-motion";
import { Globe, AppWindow, ShoppingCart, Cog, Paintbrush, Zap } from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", desc: "Professional websites that convert visitors into customers." },
  { icon: AppWindow, title: "Web Applications", desc: "Custom web apps tailored to your business workflows." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Online stores with secure payments and inventory management." },
  { icon: Cog, title: "Automation Tools", desc: "Save time and money with custom automation solutions." },
  { icon: Paintbrush, title: "Website Redesign", desc: "Transform your outdated website into a modern experience." },
  { icon: Zap, title: "Performance Optimization", desc: "Speed up your website for better rankings and conversions." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">What I Do</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Services That <span className="gradient-text">Grow</span> Your Business
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover-glow group cursor-default"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
