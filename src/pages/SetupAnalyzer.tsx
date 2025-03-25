export function SetupAnalyzer() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Setup Analyzer</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Setup Type Selection</h3>
          <p className="text-muted-foreground">Select and verify setup types for your trades.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Confluence Factors</h3>
          <p className="text-muted-foreground">Identify confluence factors to strengthen your setup.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Visual Pattern Recognition</h3>
          <p className="text-muted-foreground">Visual guides for pattern recognition in charts.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Risk Calculator</h3>
          <p className="text-muted-foreground">Calculate position size based on your risk parameters.</p>
        </div>
      </div>
    </div>
  );
} 