import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Website",
    price: "₹1,500",
    desc: "Perfect for small businesses getting started online.",
    features: ["5-page responsive website", "Contact form", "SEO basics", "Mobile optimized", "1 month support"],
    popular: false,
  },
  {
    name: "Business Website",
    price: "₹3,500",
    desc: "For growing businesses that need more functionality.",
    features: ["10+ page website", "CMS integration", "Advanced SEO", "Analytics setup", "Blog system", "3 months support"],
    popular: true,
  },
  {
    name: "Custom Application",
    price: "Custom",
    desc: "Full-stack web applications tailored to your needs.",
    features: ["Custom web app", "Database design", "API integration", "User authentication", "Admin dashboard", "6 months support"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">Pricing</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Transparent <span className="gradient-text">Pricing</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl p-6 hover-glow relative ${
              plan.popular ? "gradient-border glow-primary" : "glass"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <div className="text-3xl font-bold mt-2 gradient-text">{plan.price}</div>
            <p className="text-sm text-muted-foreground mt-2 mb-6">{plan.desc}</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "hero" : "hero-outline"}
              className="w-full"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
