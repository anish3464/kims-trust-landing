import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Profile", path: "/profile" },
  { label: "Departments", path: "/departments" },
  { label: "Doctors", path: "/doctors" },
  { label: "Services", path: "/services" },
  { label: "Career", path: "/career" },
  { label: "Future Plans", path: "/future-plans" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="KIMS Trust Hospital" className="h-12 bg-background rounded p-1" />
          <div className="hidden sm:block">
            <span className="text-primary-foreground font-display text-lg font-bold leading-tight">
              KIMS Trust Hospital
            </span>
            <p className="text-primary-foreground/70 text-xs">Excellence in Healthcare</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-4 text-primary-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" />
            <span>+91 471 2941400</span>
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Nav bar */}
      <nav className="bg-nav hidden md:block">
        <div className="container mx-auto flex items-center justify-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 text-sm font-medium transition-colors hover:bg-primary/80 ${
                location.pathname === link.path
                  ? "bg-primary/60 text-nav-foreground"
                  : "text-nav-foreground/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-nav border-t border-primary/30">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium border-b border-primary/10 ${
                location.pathname === link.path
                  ? "bg-primary/60 text-nav-foreground"
                  : "text-nav-foreground/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
