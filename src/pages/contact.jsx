import React from "react";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Contact from "@/components/pages/support/Contact";

const contact = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Contact" />
      <Layout topHeader>
        <div className="home_layout">
          <Contact />
        </div>
      </Layout>
    </Wrapper>
  );
};

export default contact;
