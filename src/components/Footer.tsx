import logoImage from "/images/We4DevStudio.jpeg";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <img
        src={logoImage}
        alt="We4DevStudio Logo"
        className="h-8 md:h-10 object-contain"
      />
      <span>© {new Date().getFullYear()} All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
