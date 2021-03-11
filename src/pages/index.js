import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"

const IndexPage = ({data}) => {
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`,`react`]}/>
  <BackgroundSection img={data.img.childImageSharp.fluid} title="Solodke coffee" styleClass="default-background" />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
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
menu:allContentfulCoffeeItem{
   edges{
    node{
      id
      title
      description{
        description
      }
      price
      category
      image{
        fixed(width:50,height:50){
          ...GatsbyContentfulFixed
        }
      }
    }
   }
  }
}
`


export default IndexPage
