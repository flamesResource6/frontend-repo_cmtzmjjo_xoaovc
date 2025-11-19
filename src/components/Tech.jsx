export default function Tech() {
  const stack = [
    {
      name: "React",
      desc: "Component-driven UIs with modern hooks and SSR-ready patterns.",
    },
    { name: "TypeScript", desc: "Type safety for fewer bugs and better DX." },
    { name: "Node.js", desc: "Fast, scalable JavaScript on the server." },
    { name: "Express", desc: "Minimal, robust HTTP layer with middleware." },
    { name: "React Native", desc: "Cross-platform mobile with native performance." },
    { name: "JavaScript", desc: "The lingua franca of the web." },
  ];

  return (
    <section id="tech" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Our tech stack
        </h2>
        <p className="mt-4 text-blue-100/90 text-center max-w-2xl mx-auto">
          We build with proven, production-ready technologies to ship quality fast.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-white font-semibold">{item.name}</div>
              <div className="text-sm text-blue-100/90 mt-2">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
