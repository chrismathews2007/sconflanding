import React from "react";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Privacy from "@/components/pages/support/Privacy";

const privacy = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Privacy Policy" />
      <Layout topHeader>
        <div className="home_layout">
          <Privacy />
        </div>
      </Layout>
    </Wrapper>
  );
};

export default privacy;
