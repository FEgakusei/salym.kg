import React from 'react'
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/posts.css'

const Post = ({ title, slug, date, body, fluid }) => (
  <div className="container">
  <Card className="posts-list">
    <Link to={slug}>
      <Img className="post-image" fluid={fluid} />
    </Link>
    <CardBody className="post-content">
      <CardTitle className="category">
        <Link to={slug}>{title}</Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span>
      </CardSubtitle>
      <CardText className="post-title">{body}</CardText>
      <div className="post-footer">
      <Link
        to={path}
        className="more-link"
      >
        Уландысы бар
      </Link>
      </div>
    </CardBody>
  </Card>
  </div>
)

export default Post
