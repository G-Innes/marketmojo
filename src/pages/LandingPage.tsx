import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

export function LandingPage() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        MarketMojo Trading Assistant
      </h1>
      <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
        Your intelligent companion for implementing the Smash & Grab trading strategy. Plan, analyze, journal, and improve your trading results.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild size="lg">
          <Link to="/dashboard">Get Started</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/strategy">Learn More</Link>
        </Button>
      </div>
    </section>
  );
} 