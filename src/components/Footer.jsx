export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8 px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="text-zinc-600 text-sm">© {new Date().getFullYear()} Md. Azizul Islam</span>
    </footer>
  );
}