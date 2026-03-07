import { motion } from "framer-motion";
import { UtensilsCrossed, Stethoscope, Building2, Lightbulb } from "lucide-react";

const industries = [
  { icon: UtensilsCrossed, title: "Restaurants", desc: "Online menus, reservations, and delivery systems." },
  { icon: Stethoscope, title: "Clinics", desc: "Patient portals, scheduling, and HIPAA-compliant solutions." },
  { icon: Building2, title: "Real Estate", desc: "Property listings, virtual tours, and lead capture." },
  { icon: Lightbulb, title: "Startups", desc: "MVPs, landing pages, and scalable web applications." },
];

const IndustriesSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">Industries</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Industries I <span className="gradient-text">Serve</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center hover-glow group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <ind.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Websites for {ind.title}</h3>
            <p className="text-sm text-muted-foreground">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
