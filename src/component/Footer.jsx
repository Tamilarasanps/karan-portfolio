import React from "react";

const Footer = () => {
  // Custom SVG icons to replace react-icons
  const GitHubIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557c-1.13.635-2.348 1.062-3.625 1.257 1.302-.78 2.301-2.016 2.773-3.491-1.217.721-2.566 1.246-4.002 1.526-1.148-1.225-2.784-1.992-4.596-1.992-3.479 0-6.299 2.821-6.299 6.3 0 .493.056.973.162 1.435-5.235-.263-9.878-2.772-12.984-6.587-.543.932-.854 2.016-.854 3.174 0 2.186 1.112 4.115 2.804 5.244-1.032-.033-2.002-.316-2.851-.789v.08c0 3.052 2.172 5.595 5.051 6.175-.529.144-1.086.221-1.66.221-.406 0-.801-.039-1.186-.112.802 2.503 3.129 4.323 5.886 4.374-2.158 1.691-4.878 2.699-7.829 2.699-.509 0-1.011-.03-1.506-.089 2.792 1.79 6.109 2.835 9.676 2.835 11.607 0 17.955-9.616 17.955-17.955 0-.273-.006-.546-.018-.817 1.232-.89 2.305-2.001 3.15-3.268z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );

  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Karan N
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Sheet Metal Stamping Simulation Engineer specializing in
              automotive manufacturing optimization, advanced simulation
              techniques, and cost-effective production solutions.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-purple-400">🎯</span>
              <span className="text-sm">
                Delivering Excellence in Engineering Solutions
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">
              Quick Links
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#simulation", label: "Simulation" },
                { href: "#blank-layout", label: "Blank Layout" },
                { href: "#process-planning", label: "Process Planning" },
                { href: "#strip-layout", label: "Strip Layout" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-300 hover:text-purple-400 transition-colors duration-300 text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <EmailIcon />
                <a
                  href="mailto:karan.engineer@example.com"
                  className="hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  karan19nagaraj@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <PhoneIcon />
                <span className="text-sm">+91 87789 82175</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-slate-400 mb-3">Connect with me:</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/karanN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 group"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/karan-n-engineer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-700 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 group"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:karan.engineer@example.com"
                  className="p-3 bg-slate-700 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 group"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Karan N. All rights reserved. | Sheet
              Metal Stamping Simulation Engineer
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Made with ❤️ for Engineering Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
