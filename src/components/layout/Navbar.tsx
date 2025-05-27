import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/constants";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/isMobile";
export default function Navbar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const isMobile = useIsMobile();

  useEffect(() => {
    closeMobileMenu();
  }, [isMobile]);

  return (
    <header className="relative w-full bg-no-repeat bg-cover bg-center bg-[url('/src/assets/media/hero-bg.png')]">
      <nav className="p-4 sm:py-6 flex items-center justify-between max-w-7xl mx-auto">
        {" "}
        <Logo />
        <ul className="py-4 px-8 hidden md:flex items-center gap-10 bg-white rounded-full shadow-sm">
          {" "}
          {NAV_ITEMS.map((item) => {
            const isCurr = item.path === pathname;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`text-lg transition-colors ease-in-out duration-200 ${
                    isCurr ? "text-accent" : "text-primary hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          to="/#"
          className="hidden md:block py-3 px-6 text-lg text-white rounded-xl transition-all ease-in-out duration-300 shadow-md bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg"
        >
          Become an Agent
        </Link>
        <div className="md:hidden">
          {" "}
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Open main menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={closeMobileMenu}
            className="md:hidden fixed inset-0 bg-black/60 z-100"
            aria-hidden="true"
          />
          <div
            ref={menuRef}
            className="md:hidden bg-white absolute top-full left-0 right-0 z-100 border-t border-gray-200"
          >
            {" "}
            <div className="px-4 pt-4 pb-6 space-y-3">
              {NAV_ITEMS.map((item) => {
                const isCurr = item.path === pathname;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block py-2 px-3 rounded-md text-base font-medium transition-colors ease-in-out duration-200 ${
                      isCurr ? "bg-blue-50 text-accent" : "text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/#"
                onClick={closeMobileMenu}
                className="mt-4 block w-full py-3 px-5 text-center text-base font-medium text-white rounded-lg transition-all ease-in-out duration-300 shadow-md bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
              >
                Become an Agent
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
