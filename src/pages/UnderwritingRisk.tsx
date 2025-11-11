import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const UnderwritingRisk = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            AI/LLM-based Insurance Underwriting Risk Decision Engine
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-based insurance Underwriting (UWR) risk engine that uses user key information, enhanced with internal databases and public information to assess risk
          </p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Insurance Tech</Badge>
          <Badge variant="secondary">Risk Assessment</Badge>
          <Badge variant="secondary">AI/ML</Badge>
          <Badge variant="secondary">LLM</Badge>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Overview</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                This intelligent underwriting system combines large language models with proprietary risk assessment algorithms to evaluate insurance applications. The engine aggregates data from multiple sources including internal databases and public records to provide comprehensive risk profiles and automated underwriting decisions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Key Features</h2>
          <div className="grid gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Multi-Source Data Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Combines user information with internal databases and public records for comprehensive risk assessment
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Intelligent Risk Scoring</h3>
                <p className="text-sm text-muted-foreground">
                  Uses AI to analyze complex patterns and generate accurate risk scores
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Automated Decision Making</h3>
                <p className="text-sm text-muted-foreground">
                  Provides instant underwriting decisions based on configurable risk thresholds
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GitHub Link */}
        <section>
          <a
            href="https://github.com/bgcoelho/ai-uwr-risk-predictor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-secondary hover:border-primary transition-all group"
          >
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">View on GitHub</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>&copy; 2025 Bruno Graca Coelho</p>
        </footer>
      </main>
    </div>
  );
};

export default UnderwritingRisk;
