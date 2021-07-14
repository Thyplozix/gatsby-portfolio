import PropTypes from "prop-types";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>
      <footer className="bg-indigo-700">
        {/* <nav className="flex max-w-2xl mx-auto text-sm md:p-8"> */}
          {/* <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://github.com/Thyplozix"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adrienne Bienapfl
            </a>
          </p> */}
        {/* </nav> */}
      </footer>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;