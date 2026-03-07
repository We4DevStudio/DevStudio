import { motion } from "framer-motion";
import { Users, Clock, TrendingUp, CalendarCheck } from "lucide-react";

const results = [
  { icon: Users, title: "More Customers Online", desc: "Reach thousands of potential customers 24/7." },
  { icon: Clock, title: "24/7 Lead Generation", desc: "Your website works for you even while you sleep." },
  { icon: TrendingUp, title: "Better Google Ranking", desc: "SEO-optimized sites that rank higher on search." },
  { icon: CalendarCheck, title: "Automated Bookings", desc: "Let customers book and pay online automatically." },
];

const BusinessResultsSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">Results</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          How a Good Website <span className="gradient-text">Helps</span> Your Business
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center hover-glow"
          >
            <r.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessResultsSection;
