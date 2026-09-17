import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} — dados de demonstração
        </p>
        <p>construído com Next.js · packets &amp; pixels</p>
      </div>
    </footer>
  );
}
