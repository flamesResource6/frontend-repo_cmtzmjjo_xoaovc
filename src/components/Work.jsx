export default function Work() {
  const items = [
    {
      title: "Fintech Dashboard",
      desc: "React + TypeScript app with realtime charts and role-based access.",
    },
    {
      title: "E-commerce Platform",
      desc: "Node/Express backend with React storefront and payments integration.",
    },
    {
      title: "Fitness Mobile App",
      desc: "React Native app for iOS/Android with offline sync and push notifications.",
    },
  ];

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Selected work
        </h2>
        <p className="mt-4 text-blue-100/90 text-center max-w-2xl mx-auto">
          A few examples of what we build for clients across industries.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-semibold">{item.title}</div>
              <div className="text-sm text-blue-100/90 mt-2">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
