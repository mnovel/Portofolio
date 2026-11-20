interface SectionTitleProps {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'div';
}

export default function SectionTitle({ title, as: Tag = 'h2' }: SectionTitleProps) {
  return (
    <Tag className="mb-8 flex items-center gap-4 text-2xl font-bold tracking-wide text-white sm:text-3xl">
      <span className="glow-cyan font-mono" aria-hidden="true">#</span>
      <span>{title}</span>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-cyber-cyan/30 to-transparent" aria-hidden="true" />
    </Tag>
  );
}
