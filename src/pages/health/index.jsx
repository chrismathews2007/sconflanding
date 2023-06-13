import React from "react";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Intro from "@/components/pages/women/intro";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <Layout topHeader>
        <div className="home_layout">
          <Intro />
        </div>
      </Layout>
    </Wrapper>
  );
};

export default index;
