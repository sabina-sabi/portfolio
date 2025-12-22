const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Fariza FARADJI. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
