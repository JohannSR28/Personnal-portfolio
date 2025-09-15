interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-5 py-5 mx-auto my-10 max-w-4xl ${className}`}
    >
      {children}
    </section>
  );
}
