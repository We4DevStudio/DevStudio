import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Understand Your Business", desc: "I learn about your goals, audience, and requirements." },
  { icon: PenTool, title: "Design the Solution", desc: "Wireframes and prototypes tailored to your brand." },
  { icon: Code, title: "Develop the Product", desc: "Clean, scalable code built with modern technologies." },
  { icon: Rocket, title: "Launch & Support", desc: "Deploy, optimize, and provide ongoing maintenance." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">Process</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          How I <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
              <step.icon className="w-7 h-7 text-primary" />
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
