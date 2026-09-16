import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 990,
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.96)" : "#ffffff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: "1px solid var(--color-border)",
          boxShadow: scrolled ? "var(--shadow-md)" : "none",
          transition: "all var(--transition-normal)"
        }}
      >
        <div className="container">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "76px"
            }}
          >
            {/* Brand Logo */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none"
              }}
              aria-label="Hower Commerce Home"
            >
              <img
                src="/brand-logo.jpg"
                alt="Hower Commerce Logo"
                style={{
                  height: "46px",
                  width: "auto",
                  borderRadius: "8px",
                  objectFit: "contain"
                }}
                onError={(e) => {
                  // Fallback in case of image load delay
                  e.currentTarget.style.display = "none";
                }}
              />
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: "800",
                    color: "var(--color-dark)",
                    letterSpacing: "-0.02em",
                    display: "block",
                    lineHeight: 1
                  }}
                >
                  Hower<span style={{ color: "var(--color-primary)" }}>Commerce</span>
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.6875rem",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    color: "var(--color-text-light)",
                    textTransform: "uppercase",
                    marginTop: "3px"
                  }}
                >
                  Digital Skills Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                listStyle: "none",
                margin: 0,
                padding: 0
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: isActive ? "700" : "600",
                        color: isActive ? "var(--color-primary)" : "var(--color-dark)",
                        position: "relative",
                        padding: "8px 0"
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "2px",
                            backgroundColor: "var(--color-primary)",
                            borderRadius: "2px"
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Action CTA & Mobile Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <Link
                to="/contact"
                className="btn btn-primary btn-sm desktop-nav"
                style={{ display: "inline-flex" }}
              >
                <span>Enroll Now</span>
                <ArrowRight size={15} />
              </Link>

              {/* Hamburger Button for Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-nav-toggle"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                style={{
                  background: "transparent",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "8px",
                  display: "none",
                  cursor: "pointer",
                  color: "var(--color-dark)"
                }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={location.pathname}
      />

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
