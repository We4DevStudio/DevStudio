const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="gradient-text font-bold text-base">DevStudio</span>
      <span>© {new Date().getFullYear()} All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
