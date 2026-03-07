import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingContact = () => (
  <motion.a
    href="#contact"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all duration-300"
    aria-label="Contact me"
  >
    <MessageCircle className="w-6 h-6 text-primary-foreground" />
  </motion.a>
);

export default FloatingContact;
