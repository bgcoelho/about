import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const DataExtractor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            AI/LLM-based Data Extraction from Unstructured Documents
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-based solution that reads email content/unstructured data from UWRs communications with back office support teams. Reconciles reviewed submission/bind data database data
          </p>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Data Extraction</Badge>
          <Badge variant="secondary">NLP</Badge>
          <Badge variant="secondary">Document Processing</Badge>
          <Badge variant="secondary">LLM</Badge>
        </div>

        {/* Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-light text-foreground">Overview</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                This intelligent document processing system uses large language models to extract structured data from unstructured email communications and documents. The solution is specifically designed for insurance underwriting workflows, automatically reconciling submission and bind data with existing database records to ensure data accuracy and consistency.
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
                <h3 className="text-lg font-semibold text-primary mb-2">Email Content Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically reads and interprets unstructured email communications between underwriters and support teams
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Data Reconciliation</h3>
                <p className="text-sm text-muted-foreground">
                  Compares extracted data with database records to identify discrepancies and ensure accuracy
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Automated Data Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Validates extracted information against business rules and database constraints
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GitHub Link */}
        <section>
          <a
            href="https://github.com/bgcoelho/ai_data_accuracy_validator"
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

export default DataExtractor;
