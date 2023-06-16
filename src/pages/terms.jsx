import React from "react";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Terms from "@/components/pages/support/Terms";

const terms = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Terms & Conditions" />
      <Layout topHeader>
        <div className="home_layout">
          <Terms />
        </div>
      </Layout>
    </Wrapper>
  );
};

export default terms;
