import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10"
      style={{
        background: "linear-gradient(180deg, #110C3B, #2B1F8F)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-10 xl:px-16">
        <Link to="/" className="flex shrink-0 items-center no-underline" onClick={() => setMenuOpen(false)}>
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/z2t1y5k3_expires_30_days.png"}
            className="mr-2 h-9 w-9 object-fill sm:mr-3 sm:h-10 sm:w-10"
            alt="LMS Logo"
          />
          <span className="text-2xl font-bold text-white sm:text-[28px]">LMS</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="no-underline">
              <span className={`text-sm xl:text-base ${isActive(item.path) ? "text-[#FF9A3C]" : "text-white"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex xl:gap-5">
          <Link to="/login" className="no-underline">
            <span className={`text-sm xl:text-base ${isActive('/login') ? 'text-[#FF9A3C]' : 'text-white'}`}>Login</span>
          </Link>
          <Link
            to="/signup"
            className={`rounded border border-solid border-[#FFFFFF33] px-5 py-2.5 no-underline ${
              isActive('/signup') ? 'bg-[#FF9A3C]' : 'bg-[#FFFFFF1A]'
            }`}
          >
            <span className="text-sm font-bold text-white xl:text-base">Signup</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#1b1454] px-4 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm no-underline ${isActive(item.path) ? 'bg-white/10 text-[#FF9A3C]' : 'text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-md border border-white/20 bg-white/5 px-3 py-2.5 text-center text-sm text-white no-underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="rounded-md bg-[#FF9A3C] px-3 py-2.5 text-center text-sm font-semibold text-white no-underline"
            >
              Signup
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
