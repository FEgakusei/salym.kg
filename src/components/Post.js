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
  <Card>
    <Link to={slug}>
      <Img className="card-image-top" fluid={fluid} />
    </Link>
    <CardBody>
      <CardTitle>
        <Link to={slug}>{title}</Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span>
      </CardSubtitle>
      <CardText>{body}</CardText>
      <Link
        to={path}
        className="more-link"
      >
        Уландысы бар
      </Link>
    </CardBody>
  </Card>
)

export default Post
