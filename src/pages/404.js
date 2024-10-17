import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-400 to-red-600 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-8">Page Not Found</h2>
        <p className="text-xl mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-100 transition-colors">
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>404: Not Found | Your Gatsby Site</title>;
