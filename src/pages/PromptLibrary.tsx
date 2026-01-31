import { Navigation } from "@/components/Navigation";
import { PromptCard } from "@/components/PromptCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

const PromptLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const prompts = [
    {
      title: "Adjusted earnings calculator",
      tags: ["Finance", "DataExtraction", "LLM"],
      body: `As a financial analyst, your task is to identify **non-core, unusual, or one-time expenses and revenues** from the provided financial content for fiscal year {year}. These are items that do not relate to the company's regular, ongoing business operations and directly impact net income.

# Important Note:
Non-core items are often hidden or buried in **footnotes, accounting policy sections, or special disclosures**. Pay special attention to **footnotes** and **detailed explanatory notes** that accompany the financial statements, as these are frequent places where non-core expenses and revenues are disclosed.

# DO NOT INCLUDE regular operating expenses such as:
- Normal depreciation and amortization
- Regular operating expenses (payroll, rent, etc.)
- Routine inventory provisions
- Recurring R&D expenses
- Regular operating lease expenses
- Standard employee compensation
- Potential or hypothetical expenses with no specific amounts
- Items with zero amounts

# IMPORTANT RULES:
- Only include items with specific monetary amounts mentioned
- impact_ni must be 'y' if item affects net income, 'n' if it only impacts other comprehensive income/equity
- In financial reports, numbers are typically in millions unless specified otherwise

# For Each Item Found, Determine:
1. Description: A one sentence summary of the item
2. Date: When the expense or revenue was incurred (use the fiscal year end date if specific date is unknown)
3. Fiscal Year: {year}
4. Amount: The monetary value (always a positive number)
5. Unit: The currency unit (dollars, millions of dollars, or billions of dollars)
6. Type: "Expense" if it reduces net income (outflow), "Revenue" if it increases net income (inflow)
7. currency: The currency in which the expense was incurred
8. impact_ni: 'y' or 'n' (y=affects net income, n=affects other equity components)

# Deduplication
1. **Identify and remove or merge entries that describe THE SAME financial events**. For example: "gain on Sale" or "gain from a divestiture" may be the same financial event
2. Preserve entries with identical amounts/years but DIFFERENT underlying events`,
    },
    {
      title: "PRD development",
      tags: ["ProductManagement", "PRD", "Strategy"],
      body: `Help me write a comprehensive PRD for [feature name]. Include:

1. Problem Statement
- Current situation
- User pain points
- Business impact

2. Proposed Solution
- Overview
- User stories
- Success metrics

3. Requirements
- Functional requirements
- Technical requirements
- Design requirements

4. Implementation
- Dependencies
- Timeline
- Resources needed

5. Risks and Mitigations

Context:
[Add product context here]`,
    },
    {
      title: "User stories development",
      tags: ["ProductManagement", "UserStories", "Agile"],
      body: `Help me write user stories and acceptance criteria for [feature]. For each story include:

1. User Story Format:
As a [type of user]
I want to [action]
So that [benefit]

2. Acceptance Criteria:
- Given [context]
- When [action]
- Then [result]

3. Edge Cases

4. Technical Considerations

5. Design Notes

Feature context:
[Add feature details here]`,
    },
    {
      title: "Market size estimation",
      tags: ["Strategy", "MarketAnalysis", "Business"],
      body: `Help me calculate market size estimates for [product/service]:

1. Total Addressable Market (TAM)
- Market definition
- Geographic scope
- Total potential customers
- Revenue potential

2. Serviceable Addressable Market (SAM)
- Technical limitations
- Geographic reach
- Platform constraints

3. Serviceable Obtainable Market (SOM)
- Competition analysis
- Market share projection
- Growth timeline

Product context:
[Add context here]`,
    },
    {
      title: "Product principles",
      tags: ["ProductManagement", "Strategy", "Principles"],
      body: `I'm building a product that helps [target audience] [solve what problem or achieve what goal] using [product or approach].

Using this information, write 5–7 product principles I can use as decision rules. Each principle should guide tradeoffs, ensure consistency, and keep the product coherent and relevant as it grows. Keep them short, memorable, and practical enough that my team can apply them when making everyday choices.`,
    },
    {
      title: "Market research – Competitor list",
      tags: ["MarketResearch", "Competitive", "Strategy"],
      body: `I'm building a product that helps
[target audience]
[solve what problem or achieve what goal]
using
[product or approach]

Using this information, return the output as a normal Markdown table (no code blocks) with the following columns:

| Competitor | Type (Direct or Indirect) | Key Offering | Strengths | Weaknesses | How We're Different |

Guidelines:
• Include 5 to 7 competitors
• Be specific and relevant to the space
• Focus on both product features and market positioning
• Type should reflect how closely they compete with what I'm building`,
    },
    {
      title: "Product Strategy and Vision",
      tags: ["ProductManagement", "Strategy", "Vision"],
      body: `Defining the Product Vision: Craft a clear and compelling vision statement for [your product or company] that outlines its long-term goals, purpose, and the value it aims to deliver to customers. Describe how this vision aligns with market trends and customer needs.`,
    },
    {
      title: "Data analysis and insights",
      tags: ["DataAnalysis", "Analytics", "Business"],
      body: `Understanding the Importance of Data Analysis for [your product/business]: Discuss the significance of data analysis in driving informed decision-making for [your product/business]. Explore various types of data (e.g., customer behavior, market trends) and how analyzing it can reveal valuable insights.`,
    },
  ];

  const filteredPrompts = prompts.filter((prompt) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      prompt.title.toLowerCase().includes(searchLower) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
      prompt.body.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
            Prompt Library
          </h1>
          <p className="text-xl text-muted-foreground">
            Curated by Bruno Graca Coelho — Product Manager / Head of Data
          </p>
        </section>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search prompts by title, tags, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-base"
          />
        </div>

        {/* Prompts Section */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-light text-foreground">Featured Prompts</h2>
            <span className="text-sm text-muted-foreground">
              {filteredPrompts.length} {filteredPrompts.length === 1 ? "prompt" : "prompts"}
            </span>
          </div>
          <div className="space-y-4">
            {filteredPrompts.length > 0 ? (
              filteredPrompts.map((prompt, index) => (
                <PromptCard key={index} {...prompt} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No prompts found matching your search.</p>
              </div>
            )}
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

export default PromptLibrary;
