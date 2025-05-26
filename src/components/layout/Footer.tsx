import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 pt-[9rem] pb-14 w-full bg-accent rounded-t-[3.25em]">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <Link
          to="#"
          className="self-center w-fit flex flex-col text-white font-espuma mb-[7.5em]"
        >
          <span className="text-[4rem] sm:text-[8rem] lg:text-[clamp(24px,16vw,14.5rem)] leading-tight">
            DreamDwell
          </span>
          <span className="text-[6vw] italic text-right leading-none opacity-90">
            Estates
          </span>
        </Link>
        <div className="w-full flex flex-wrap justify-between gap-8 md:gap-12 mb-15.25">
          {FOOTER_LINKS.map((section, i) => (
            <div key={i} className="space-y-4 w-fit">
              <ul className="space-y-8">
                {section.links.map((link) => (
                  <li key={link.label + link.path}>
                    {" "}
                    <SmartLink
                      to={link.path}
                      isExternal={link.isExternal}
                      className="text-lg text-gray-100 hover:text-white transition-all duration-200 ease-in-out hover:underline"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-t-white">
          <p className="text-base text-white text-center tracking-wide">
            &copy;Copyright 2025 DreamDwell Estates - All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface SmartLinkProps {
  to: string;
  children: React.ReactNode;
  isExternal: boolean;
  className: string;
}
function SmartLink({ to, children, isExternal, className }: SmartLinkProps) {
  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
