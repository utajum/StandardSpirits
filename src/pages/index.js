import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Your Gatsby Site
          </h1>
          <p className="text-xl">
            Congratulations! You've just created something amazing. 🎉
          </p>
        </header>

        <section className="bg-white text-gray-800 rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
          <p className="mb-4">
            Edit{' '}
            <code className="bg-gray-200 px-2 py-1 rounded">
              src/pages/index.js
            </code>{' '}
            to see this page update in real-time. 😎
          </p>
          <Link
            to="/about"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Learn More
          </Link>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {links.map((link) => (
            <a
              key={link.url}
              href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: link.color }}>
                {link.text}
              </h3>
              <p className="text-gray-600">{link.description}</p>
              {link.badge && (
                <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-2">
                  NEW!
                </span>
              )}
            </a>
          ))}
        </section>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 Your Gatsby Site. All rights reserved.</p>
          <img
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23fff'/%3E%3C/svg%3E"
          />
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page | Your Gatsby Site</title>;

// Keep the existing `links` array as is
