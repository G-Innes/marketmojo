export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 gradient-text">Dashboard</h1>
      
      <div className="bento-grid">
        {/* Performance Card - Larger card spanning 2 columns */}
        <div className="bento-card-highlight md:col-span-2 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-xl text-accent-primary">Performance Overview</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-accent-primary/20 text-accent-primary">Last 30 days</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="glass-light p-3 rounded-lg">
              <p className="text-xs text-gray-300">Win Rate</p>
              <p className="text-2xl font-bold text-white">68.5%</p>
            </div>
            <div className="glass-light p-3 rounded-lg">
              <p className="text-xs text-gray-300">Profit Factor</p>
              <p className="text-2xl font-bold text-accent-tertiary">2.3</p>
            </div>
            <div className="glass-light p-3 rounded-lg">
              <p className="text-xs text-gray-300">Net P&L</p>
              <p className="text-2xl font-bold text-accent-secondary">+$2,458</p>
            </div>
          </div>
          <div className="h-32 bg-dark-100/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Performance chart will appear here</p>
          </div>
        </div>
        
        {/* Recent Trades */}
        <div className="bento-card">
          <h3 className="font-semibold text-lg mb-4 text-white">Recent Trades</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 glass-light rounded-lg">
              <div>
                <p className="text-accent-primary font-medium">AAPL</p>
                <p className="text-xs text-gray-400">Long • 100 shares</p>
              </div>
              <span className="text-accent-tertiary font-medium">+$342</span>
            </div>
            <div className="flex justify-between items-center p-2 glass-light rounded-lg">
              <div>
                <p className="text-accent-primary font-medium">TSLA</p>
                <p className="text-xs text-gray-400">Short • 50 shares</p>
              </div>
              <span className="text-accent-secondary font-medium">-$125</span>
            </div>
            <div className="flex justify-between items-center p-2 glass-light rounded-lg">
              <div>
                <p className="text-accent-primary font-medium">MSFT</p>
                <p className="text-xs text-gray-400">Long • 75 shares</p>
              </div>
              <span className="text-accent-tertiary font-medium">+$215</span>
            </div>
          </div>
        </div>
        
        {/* Today's Session */}
        <div className="bento-card">
          <h3 className="font-semibold text-lg mb-4 text-white">Today's Session</h3>
          <div className="flex justify-between mb-3">
            <span className="text-gray-300">Session Status</span>
            <span className="px-2 py-1 text-xs rounded-full bg-accent-primary/20 text-accent-primary animate-pulse-slow">Active</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-300">Trades Taken</span>
            <span className="text-white font-medium">5</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-300">Win/Loss</span>
            <span className="text-white font-medium">3/2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Net P&L</span>
            <span className="text-accent-tertiary font-medium">+$432</span>
          </div>
        </div>
        
        {/* Journal Entries */}
        <div className="bento-card">
          <h3 className="font-semibold text-lg mb-4 text-white">Journal Entries</h3>
          <div className="space-y-3">
            <div className="glass-light p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <p className="text-accent-primary font-medium">Today's Reflection</p>
                <span className="text-xs text-gray-400">Today</span>
              </div>
              <p className="text-sm text-gray-300">Maintained discipline despite market volatility...</p>
            </div>
            <div className="glass-light p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <p className="text-accent-primary font-medium">Trading Notes</p>
                <span className="text-xs text-gray-400">Yesterday</span>
              </div>
              <p className="text-sm text-gray-300">Worked on improving my entry timing...</p>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="bento-card">
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="glass-light p-3 rounded-lg flex items-center justify-center hover:bg-accent-primary/10 transition-colors">
              <span className="text-accent-primary">New Trade</span>
            </button>
            <button className="glass-light p-3 rounded-lg flex items-center justify-center hover:bg-accent-secondary/10 transition-colors">
              <span className="text-accent-secondary">Journal</span>
            </button>
            <button className="glass-light p-3 rounded-lg flex items-center justify-center hover:bg-accent-tertiary/10 transition-colors">
              <span className="text-accent-tertiary">Planner</span>
            </button>
            <button className="glass-light p-3 rounded-lg flex items-center justify-center hover:bg-accent-primary/10 transition-colors">
              <span className="text-accent-primary">Setups</span>
            </button>
          </div>
        </div>
        
        {/* Market Calendar */}
        <div className="bento-card md:col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4 text-white">Market Calendar</h3>
          <div className="glass-light p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">June 2024</span>
              <div className="flex space-x-2">
                <button className="w-6 h-6 rounded-full glass-light flex items-center justify-center text-gray-300 hover:text-white">
                  ←
                </button>
                <button className="w-6 h-6 rounded-full glass-light flex items-center justify-center text-gray-300 hover:text-white">
                  →
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              <span className="text-xs text-gray-400">Su</span>
              <span className="text-xs text-gray-400">Mo</span>
              <span className="text-xs text-gray-400">Tu</span>
              <span className="text-xs text-gray-400">We</span>
              <span className="text-xs text-gray-400">Th</span>
              <span className="text-xs text-gray-400">Fr</span>
              <span className="text-xs text-gray-400">Sa</span>
              {/* Calendar days would go here */}
              <span className="text-xs py-1">-</span>
              <span className="text-xs py-1">-</span>
              <span className="text-xs py-1">-</span>
              <span className="text-xs py-1">-</span>
              <span className="text-xs py-1">-</span>
              <span className="text-xs py-1">1</span>
              <span className="text-xs py-1">2</span>
              {/* More days... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 