import { motion } from "framer-motion";
import { Clock, Code2, Smartphone, Search, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Fast Delivery", desc: "Projects delivered on time, every time." },
  { icon: Code2, title: "Clean Scalable Code", desc: "Built to grow with your business." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Perfect experience on every device." },
  { icon: Search, title: "SEO Friendly", desc: "Higher rankings, more traffic." },
  { icon: HeartHandshake, title: "Long-term Support", desc: "Ongoing maintenance and updates." },
];

const WhyChooseSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">Why Me</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Why <span className="gradient-text">Choose Me</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-5 text-center hover-glow"
          >
            <r.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-sm mb-1">{r.title}</h3>
            <p className="text-xs text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
