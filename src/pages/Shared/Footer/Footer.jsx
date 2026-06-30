import { Link } from "react-router";
import {
  GraduationCap
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

import Container from "../../../components/ui/Container";
import footerLinks from "../../../data/footerLinks";

import FooterColumn from "./FooterColumn";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08101F]">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container>

        <div className="grid gap-16 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* Brand */}

          <div>

            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600">

                <GraduationCap
                  size={24}
                  className="text-white"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">

                  LearnHub

                </h2>

                <p className="text-sm text-slate-400">

                  Learn Without Limits

                </p>

              </div>

            </Link>

            <p className="mt-8 max-w-sm leading-8 text-slate-400">

              LearnHub helps students master modern technologies through
              industry-focused courses, practical projects, and expert
              instructors.

            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              {[
                FaFacebookF,
                FaGithub,
                FaLinkedinIn,
                FaInstagram,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                >

                  <Icon size={18} />

                </a>

              ))}

            </div>

          </div>

          {/* Footer Columns */}

          <FooterColumn
            title="Quick Links"
            links={footerLinks.quickLinks}
          />

          {/* // <FooterColumn
          //   title="Courses"
          //   links={footerLinks.courses}
          // /> */}

          {/* <FooterColumn
            title="Company"
            links={footerLinks.company}
          /> */}

          <FooterColumn
            title="Support"
            links={footerLinks.support}
          />

          {/* Newsletter */}

          <Newsletter />

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-center text-sm text-slate-500 md:flex-row">

          <p>

            © {new Date().getFullYear()} LearnHub. All rights reserved.

          </p>

          <div className="flex gap-6">

            <Link
              to="/privacy-policy"
              className="transition hover:text-indigo-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-indigo-400"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
}