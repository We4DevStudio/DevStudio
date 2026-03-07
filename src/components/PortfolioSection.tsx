import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Plants Showcasing",
    desc: "Website to showcase various plants with details and care instructions.",
    tags: ["React", "Node.js"],
    color: "from-primary/20 to-accent/20",
    image: "/images/Screenshot 2026-03-07 215451.png",
    link: "https://gardaning-plants.vercel.app/",
  },
  {
    title: "E-Commerce Shoe Store",
    desc: "Online store for purchasing shoes with a seamless shopping experience.",
    tags: ["Next.js", "PostgreSQL", "Maps API"],
    color: "from-accent/20 to-primary/20",
    image: "/images/Screenshot 2026-03-07 215736.png",
    link: "https://frontend-shoe-app.vercel.app/",
  },
  {
    title: "Netflix Clone",
    desc: "A Netflix clone with user authentication, movie browsing, and watchlist features.",
    tags: ["React", "TypeScript", "HIPAA"],
    color: "from-primary/20 to-accent/20",
    image: "/images/Screenshot 2026-03-07 220419.png",
    link: "https://neewfliix.netlify.app/",
  },
  {
    title: "E-commerce Fashion Store",
    desc: "High-performance online store with inventory management and analytics.",
    tags: ["Shopify", "React", "GraphQL"],
    color: "from-accent/20 to-primary/20",
    image: "/images/Screenshot 2026-03-07 220708.png",
    link: "https://harsha8722.github.io/fasionstore/",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary uppercase tracking-wider">
          Portfolio
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          const imageElement = p.image ? (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div
              className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}
            >
              <div className="text-4xl font-bold text-foreground/10 group-hover:scale-110 transition-transform duration-500">
                {p.title.split(" ")[0]}
              </div>
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>
            </div>
          );

          const contentElement = p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {imageElement}
            </a>
          ) : (
            imageElement
          );

          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer hover-glow"
            >
              {contentElement}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
