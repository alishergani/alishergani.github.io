import type { PropsWithChildren } from "react";

type SectionContainerProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section id={id} className={`px-6 sm:px-10 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-screen-content">{children}</div>
    </section>
  );
}
