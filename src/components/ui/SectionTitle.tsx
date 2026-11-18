interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-8 flex items-center gap-4 text-2xl font-bold tracking-wide text-white sm:text-3xl">
      <span className="glow-cyan font-mono">#</span>
      <span>{title}</span>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-cyber-cyan/30 to-transparent" />
    </div>
  );
}
