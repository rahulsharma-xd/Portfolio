const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 text-center">
      <p className="font-mono text-sm text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <span className="text-gradient font-semibold">Rahul Kumar</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
