import { Code, Smartphone, Server, Rocket } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Applications",
    description:
      "Custom React + TypeScript frontends with robust design systems and high performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "React Native apps for iOS and Android with shared codebases and native quality.",
  },
  {
    icon: Server,
    title: "Backend APIs",
    description:
      "Node.js + Express services, GraphQL/REST APIs, authentication, and integrations.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    description:
      "CI/CD, analytics, A/B testing, and performance tuning to scale confidently.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          What we do
        </h2>
        <p className="mt-4 text-blue-100/90 text-center max-w-2xl mx-auto">
          End-to-end product development across web and mobile, tailored to your goals.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <Icon className="h-6 w-6 text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
