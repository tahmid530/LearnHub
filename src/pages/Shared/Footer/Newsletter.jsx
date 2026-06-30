import { Mail, ArrowRight } from "lucide-react";

import Button from "../../../components/ui/Button";

export default function Newsletter() {
  return (
    <div>

      <h3 className="text-lg font-semibold text-white">

        Newsletter

      </h3>

      <p className="mt-6 leading-7 text-slate-400">

        Subscribe to receive the latest courses, tutorials,
        learning resources, and exclusive offers directly
        in your inbox.

      </p>

      <form className="mt-8 space-y-4">

        <div className="relative">

          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-500 focus:bg-white/10"
          />

        </div>

        <Button
          className="w-full justify-center"
        >
          Subscribe

          <ArrowRight size={18} />

        </Button>

      </form>

      <p className="mt-4 text-sm leading-6 text-slate-500">

        No spam. Unsubscribe anytime.

      </p>

    </div>
  );
}