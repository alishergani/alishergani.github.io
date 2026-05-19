export default function ResumePage() {
  return (
    <main className="min-h-screen bg-portfolio-bg px-6 py-20 text-portfolio-text sm:px-10">
      <div className="mx-auto max-w-3xl rounded-3xl border border-portfolio-border bg-portfolio-card p-8 sm:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-portfolio-accent">CV</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Resume Request</h1>
        <p className="mt-4 text-lg text-slate-300">
          The latest CV is available on request to keep project details up to date and relevant for
          each role.
        </p>
        <a
          className="mt-8 inline-flex rounded-xl border border-portfolio-accent/70 bg-portfolio-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          href="mailto:alishermeldebek@gmail.com?subject=CV%20Request"
        >
          Request CV via Email
        </a>
      </div>
    </main>
  );
}
