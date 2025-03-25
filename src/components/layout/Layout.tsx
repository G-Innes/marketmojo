import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="relative min-h-screen bg-dark-300 text-gray-100 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-50"></div>
      
      {/* Content wrapper */}
      <div className="flex min-h-screen flex-col z-10">
        <Header />
        <main className="flex-1 container mx-auto px-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
} 