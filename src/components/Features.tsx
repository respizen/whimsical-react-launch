const features = [
  {
    title: "Intuitive Design",
    description: "Create beautiful interfaces with our easy-to-use tools.",
  },
  {
    title: "Powerful Tools",
    description: "Access advanced features that bring your ideas to life.",
  },
  {
    title: "Fast Performance",
    description: "Experience lightning-fast loading and smooth interactions.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/5 text-primary">
            Features
          </span>
          <h2 className="mt-6 text-3xl font-bold">
            Everything you need
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover the tools that will transform your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background hover-lift glass-effect"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;