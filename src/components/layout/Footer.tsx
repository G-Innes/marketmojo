import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-dark-100/30 py-6 md:py-0 backdrop-blur-lg bg-dark-300/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4">
        <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
          &copy; {new Date().getFullYear()} <span className="gradient-text font-medium">MarketMojo</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/terms"
            className="text-sm font-medium text-gray-400 hover:text-accent-primary transition-colors"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="text-sm font-medium text-gray-400 hover:text-accent-primary transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
} 