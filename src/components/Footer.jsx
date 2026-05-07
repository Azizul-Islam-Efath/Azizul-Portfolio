export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 md:px-16 text-center">
      <p className="text-white/50 text-sm">
        © {new Date().getFullYear()} Md. Azizul Islam
      </p>
    </footer>
  );
}