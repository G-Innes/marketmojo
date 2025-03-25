import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  
  // Function to check if a link is active
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-dark-300/80 border-b border-dark-100/30">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold">
            <span className="gradient-text">MarketMojo</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/dashboard" 
            className={`text-sm font-medium transition-colors ${isActive('/dashboard') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/planner" 
            className={`text-sm font-medium transition-colors ${isActive('/planner') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Trading Planner
          </Link>
          <Link 
            to="/setups" 
            className={`text-sm font-medium transition-colors ${isActive('/setups') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Setup Analyzer
          </Link>
          <Link 
            to="/journal" 
            className={`text-sm font-medium transition-colors ${isActive('/journal') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Trade Journal
          </Link>
          <Link 
            to="/personal-journal" 
            className={`text-sm font-medium transition-colors ${isActive('/personal-journal') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Personal Journal
          </Link>
          <Link 
            to="/strategy" 
            className={`text-sm font-medium transition-colors ${isActive('/strategy') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Strategy Guide
          </Link>
          <Link 
            to="/health" 
            className={`text-sm font-medium transition-colors ${isActive('/health') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Health & Discipline
          </Link>
          <Link 
            to="/settings" 
            className={`text-sm font-medium transition-colors ${isActive('/settings') 
              ? 'text-accent-primary' 
              : 'text-gray-300 hover:text-accent-primary/80'}`}
          >
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="glass-light px-4 py-2 rounded-lg text-sm font-medium text-accent-primary hover:bg-accent-primary/20 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
} 