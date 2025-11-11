import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const EarningsCalculator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            AI/LLM-based Adjusted Earnings Calculator & Predictor
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-based solution that reviews financial statements, extracts relevant information, calculates adjusted earnings over 10 years timeline and projects future earnings
          </p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">AI/ML</Badge>
          <Badge variant="secondary">Financial Analysis</Badge>
          <Badge variant="secondary">Earnings Prediction</Badge>
          <Badge variant="secondary">LLM</Badge>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Overview</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                This project leverages large language models to analyze financial statements and automatically calculate adjusted earnings metrics. The system processes historical data spanning 10 years, identifies key financial indicators, and uses machine learning algorithms to project future earnings with confidence intervals.
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
                <h3 className="text-lg font-semibold text-primary mb-2">Automated Financial Statement Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Uses NLP to extract and interpret complex financial data from various statement formats
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">10-Year Historical Calculation</h3>
                <p className="text-sm text-muted-foreground">
                  Computes adjusted earnings across a decade to identify trends and patterns
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Predictive Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Projects future earnings based on historical patterns and market indicators
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GitHub Link */}
        <section>
          <a
            href="https://github.com/bgcoelho/ai_earnings_predictor"
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

export default EarningsCalculator;
