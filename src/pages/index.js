import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info"

const IndexPage = ({data}) => {
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`,`react`]}/>
  <BackgroundSection img={data.img.childImageSharp.fluid} title="Solodke coffee" styleClass="default-background" />
    <Info />
  </Layout>
);
  };


export const query = graphql`
{
img:file(relativePath:{eq:"coffeeshop.jpg"}) {
  childImageSharp{
fluid{
...GatsbyImageSharpFluid
}
  }
  
}
}
`


export default IndexPage
