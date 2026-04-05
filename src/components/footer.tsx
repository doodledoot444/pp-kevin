export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground">John Kevin Dejan</h3>
            <p className="text-muted-foreground">Web App Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/veksimage" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kevin-dejan-108ba1223/?skipRedirect=true" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/kevinforya_/" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 John Kevin Dejan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}