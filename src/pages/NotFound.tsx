import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold bg-cosmic bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Oops! This galaxy sector doesn't exist
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-cosmic text-primary-foreground rounded-lg hover:animate-cosmic-pulse transition-all duration-300 font-semibold"
          >
            Return to Home Base
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
