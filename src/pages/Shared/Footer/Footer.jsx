import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "Courses",
  "About",
  "Contact",
  "FAQ",
];

const studentLinks = [
  "Dashboard",
  "My Courses",
  "Progress",
  "Certificates",
  "Quiz",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              Learn
              <span className="text-indigo-400">
                Hub
              </span>
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              LearnHub is a modern learning platform that helps
              students master real-world skills through premium
              courses, practical projects and expert mentorship.
            </p>

            <div className="mt-8 flex gap-4">

              {[
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaGithub,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                >
                  <Icon />
                </a>
              ))}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-indigo-400"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Student */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Student
            </h3>

            <ul className="space-y-4">

              {studentLinks.map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-indigo-400"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaMapMarkerAlt
                  className="mt-1 text-indigo-400"
                />

                <p className="text-slate-400">
                  Dhaka, Bangladesh
                </p>

              </div>

              <div className="flex gap-4">

                <FaEnvelope
                  className="mt-1 text-indigo-400"
                />

                <p className="text-slate-400">
                  support@learnhub.com
                </p>

              </div>

              <div className="flex gap-4">

                <FaPhoneAlt
                  className="mt-1 text-indigo-400"
                />

                <p className="text-slate-400">
                  +880 17XX XXX XXX
                </p>

              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-8">

              <h4 className="mb-3 font-semibold">
                Newsletter
              </h4>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500"
              />

              <button
                className="mt-4 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold transition duration-300 hover:bg-indigo-500"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-slate-400 md:flex-row">

            <p>
              © {new Date().getFullYear()} LearnHub.
              All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <a
                href="#"
                className="transition hover:text-indigo-400"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-indigo-400"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="transition hover:text-indigo-400"
              >
                Cookies
              </a>

              <a
                href="#"
                className="transition hover:text-indigo-400"
              >
                Sitemap
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;