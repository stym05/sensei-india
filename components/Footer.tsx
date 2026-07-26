import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black">{site.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{site.tagline}</p>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <Link href="/courses">Courses</Link>
            <Link href="/find-tutors">Find Tutors</Link>
            <Link href="/register">Student Registration</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Legal</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
