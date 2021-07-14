import React from "react";
import Layout from "../components/Layout";
import icon from "../images/icon.png";

function IndexPage() {
  return (
    <Layout>
      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Oh my god is this actually working.
        </h2>
        <p className="leading-loose">
          This is an attempt to learn GatsbyJS with TailwindCSS integrations, among others. 
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;