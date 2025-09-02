interface LayoutProps {
  children: React.ReactNode;
}

import Navigation from "./Navigation";
import StarryBackground from "./StarryBackground";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <StarryBackground />
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;