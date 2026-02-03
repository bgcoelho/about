import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/bruno.png";

const Home = () => {
  const projects = [
    {
      title: "AI/LLM-based adjusted earnings calculator & predictor",
      description: "AI-based solution that reviews financial statements, extracts relevant information, calculates adjusted earnings over 10 years timeline and projects future earnings",
      link: "/earnings-calculator",
      githubLink: "https://github.com/bgcoelho/ai_earnings_predictor",
    },
    {
      title: "AI/LLM-based Stock's alpha (excess returns) analytics/predictor",
      description: "AI based solution that performs firm analysis and provides concise investment advice, based on public return information determines alpha and beta, reviews SEC 10Ks and strategic/market analysis",
      link: "/alpha-analytics",
      githubLink: "https://github.com/bgcoelho/ai-alpha-analytics",
    },
    {
      title: "Machine learning (ML) toolkit",
      description: "From ML in Finance and my own studies, please access here the collection of concepts, methods, models, algorithms, and tools that you may use to solve data-driven problems.",
      link: "/ml-toolkit",
      githubLink: "https://github.com/bgcoelho/ml-toolkit",
    },
  ];

  const designProjects = [
    {
      title: "Learning/ enablement coach",
      description: "Powered by FIGMA",
      link: "#",
      figmaLink: "https://life-pascal-99109425.figma.site/",
    },
    {
      title: "Data analytics buddy",
      description: "Powered by FIGMA",
      link: "#",
    },
  ];

  const academics = [
    {
      title: "Masters in Business Administration (MBA)",
      institution: "University of Chicago Booth School of Business",
      description: "Concentrations in Applied AI, Strategy and Entrepreneurship",
    },
    {
      title: "Masters in Communication Network Engineering",
      institution: "University of Lisbon - Lisbon Tech (IST)",
      description: "Concentrations in Wireless Sensor Networks. Publication: SENSORNETS 2014: LA6-Local Aggregation in the IoT",
    },
  ];

  const certifications = [
    { name: "Microsoft Azure", details: "Azure Fundamentals (AZ-900), Azure AI Fundamentals (AI-900)" },
    { name: "Databricks", details: "Databricks Lakehouse Fundamentals; Databricks ML Associate" },
    { name: "Amazon Web Services", details: "AWS Certified Cloud Practitioner (CLF-C02)" },
    { name: "Google Cloud", details: "Cloud Computing Fundamentals; Data, ML, and AI in Google Cloud" },
    { name: "PMP - Project Management Professional", details: "" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 pt-6 pb-12 space-y-6">
        {/* Hero Section */}
        <section className="flex items-start justify-between gap-8 flex-wrap">
          <div className="space-y-4 flex-1 min-w-[300px]">
            <h1 className="text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Bruno Graca Coelho
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Product Manager / Problem solver · Head of Data · MBA@UChicago Booth
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={profilePhoto} 
              alt="Bruno Graca Coelho" 
              className="w-20 h-28 object-cover object-top rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-2">
          <h2 className="text-3xl font-light text-foreground">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Problem solver with AI and Machine Learning. Currently Head of Data at a global Insurance group, 
            passionate about AI transformation, product strategy, and development. I am currently completing 
            my MBA at Booth with a concentration on Strategy and Applied AI.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">LLM/ ML based product experiments</h2>
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Design Projects Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Product design/ prototyping experiments</h2>
          <div className="grid gap-4">
            {designProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Academics Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Academics</h2>
          <div className="space-y-4">
            {academics.map((academic, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="py-2 px-4">
                  <h3 className="text-base font-semibold text-foreground mb-0.5">
                    {academic.title}
                  </h3>
                  <p className="text-sm text-primary mb-1">{academic.institution}</p>
                  <p className="text-xs text-muted-foreground">{academic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Trainings & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="py-2 px-4">
                  <h3 className="text-sm font-semibold text-foreground mb-0.5">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Readings Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Most recent readings</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="py-2 px-4">
                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                  Mismatch
                </h3>
                <p className="text-xs text-muted-foreground">How inclusion shapes design by Kat Holmes</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="py-2 px-4">
                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                  To sell is human
                </h3>
                <p className="text-xs text-muted-foreground">by Daniel H. Pink</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="py-2 px-4">
                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                  The Startup owner's manual
                </h3>
                <p className="text-xs text-muted-foreground">by Steve Blank & Bob Dorf</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-light text-foreground">Resources</h2>
          <div className="space-y-4">
            <Card className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="py-3 px-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  My Prompt Library
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Curated collection of AI and LLM prompts for data, strategy, and product applications
                </p>
                <Link
                  to="/prompts"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                >
                  <span>Explore Prompts</span>
                  <span>→</span>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="py-3 px-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  SENSORNETS 2014: LA6-Local Aggregation in the IoT
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Research publication on wireless sensor networks and local aggregation techniques for Internet of Things applications
                </p>
                <a
                  href="https://www.scitepress.org/Papers/2014/47104/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                >
                  <span>View Publication</span>
                  <span>→</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>&copy; 2025 Bruno Graca Coelho</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
