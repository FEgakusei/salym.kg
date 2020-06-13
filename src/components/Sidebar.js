import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardUl,
  CardLi,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Sidebar from '../components/Sidebar.js'

import '../styles/Sidebar.css' 

const Sidebar = ({ }) => (
  <div >
    )}
    <Card className="widget">
      <CardTitle className="widget-title">Бөлүмдөр</CardTitle>
        <ul class="widget-category-list">
          <li><a href="">Интервьюлар</a> (0)</li>
          <li><a href="">Туура тамактануу</a> (0)</li>
          <li><a href="">Саякат</a> (0)</li>
        </ul>
    </Card>

    <Card className="widget">
      <CardBody className="widget-title">
        <CardTitle className="widget-post-list">
          Акыркы кошулгандар
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="post-image-small"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>

    <Card className="widget">
      <CardBody className="widget-title">
        <CardTitle className="widget-post-list">
          Көп окулгандар
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="post-image-small"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
    
    <Card className="widget" >
      <CardTitle className="widget-title"> Видеолор </CardTitle>  
        <ul className="widget-posts-list">
          <li className="widget-post-title"> Токойдогу гуруч талаа </li> 
      </ul>
      <div className="videos">
        <div className="videos__wrapper">
          <div className="video__item"></div>
            <iframe className="video__element" src="D:\it-academy2\final-project\src\images\rice field.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>      
      </div>
      </Card>
    
    <Card>
      <CardBody className="widget">
        <CardTitle className="widget-title">
          Жазылуу
        </CardTitle>
        <Form className="subscribe">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Сиздин email"
            />
          </FormGroup>
        </Form> 
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
