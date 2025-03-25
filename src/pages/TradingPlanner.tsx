export function TradingPlanner() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Trading Planner</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Session Selection</h3>
          <p className="text-muted-foreground">Select your trading session (London/NY/Asian).</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Pre-Session Checklist</h3>
          <p className="text-muted-foreground">Complete your pre-session checklist before trading.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Key Level Identification</h3>
          <p className="text-muted-foreground">Identify and record key price levels for your session.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Market News</h3>
          <p className="text-muted-foreground">Relevant market news and events for your session.</p>
        </div>
      </div>
    </div>
  );
} 