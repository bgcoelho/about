import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const AlphaAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            AI/ML-based Stock's Alpha Analytics & Predictor
          </h1>
          <p className="text-xl text-muted-foreground">
            AI based solution that performs firm analysis and provides concise investment advice, based on public return information determines alpha and beta, reviews SEC 10Ks and strategic/market analysis
          </p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Finance</Badge>
          <Badge variant="secondary">Investment Analysis</Badge>
          <Badge variant="secondary">AI/ML</Badge>
          <Badge variant="secondary">Alpha Prediction</Badge>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Overview</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                This advanced analytics platform uses machine learning to calculate stock alpha (excess returns) and beta coefficients. The system analyzes SEC 10-K filings, performs strategic market analysis, and combines quantitative metrics with qualitative insights to generate actionable investment recommendations.
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
                <h3 className="text-lg font-semibold text-primary mb-2">Alpha & Beta Calculation</h3>
                <p className="text-sm text-muted-foreground">
                  Accurately determines excess returns and market correlation using historical data
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">SEC Filing Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically reviews and extracts insights from 10-K reports and other regulatory filings
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Strategic Market Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Combines quantitative metrics with qualitative market and competitive analysis
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GitHub Link */}
        <section>
          <a
            href="https://github.com/bgcoelho/ai-alpha-analytics"
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

export default AlphaAnalytics;
