import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechStart", text: "Transformed our online presence completely. Our leads increased by 300% in the first month." },
  { name: "Michael Roberts", role: "Owner, Urban Eats", text: "The booking system he built saved us hours of manual work every week. Incredible quality." },
  { name: "Dr. Lisa Park", role: "Director, WellCare Clinic", text: "Professional, fast, and truly understands what businesses need from their technology." },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          What Clients <span className="gradient-text">Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 hover-glow"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <div className="font-semibold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
