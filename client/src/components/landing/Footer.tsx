import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer
      id="docs"
      className="border-t border-neutral/10 bg-surface"
    >
      <Container>
        <div className="flex flex-col gap-4 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="font-jersey text-xl text-primary-dark">
            Voxible
          </span>

          <p className="font-geist-pixel text-[9px] tracking-wide text-neutral/45 sm:text-[10px]">
            © 2026 Voxible · System operational.
          </p>
        </div>
      </Container>
    </footer>
  );
}