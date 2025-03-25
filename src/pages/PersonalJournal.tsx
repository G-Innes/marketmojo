export function PersonalJournal() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Personal Journal</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Daily Journal</h3>
          <p className="text-muted-foreground">Record your daily trading thoughts and reflections.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Mood Tracking</h3>
          <p className="text-muted-foreground">Track your mood and market bias over time.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Journal Calendar</h3>
          <p className="text-muted-foreground">View your journal entries in a calendar format.</p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold text-lg mb-2">Weekly Reflections</h3>
          <p className="text-muted-foreground">Guided prompts for weekly trading reflections.</p>
        </div>
      </div>
    </div>
  );
} 