export function TradeJournal() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Trade Journal</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Trade Entry Form</h3>
          <p className="text-muted-foreground">Record your trades with detailed information.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Trade List</h3>
          <p className="text-muted-foreground">View and filter your past trades.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Trade Analysis</h3>
          <p className="text-muted-foreground">Analyze your trade performance and patterns.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Screenshot Attachments</h3>
          <p className="text-muted-foreground">Attach chart screenshots to your trade entries.</p>
        </div>
      </div>
    </div>
  );
} 