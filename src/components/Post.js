import React from 'react'
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

import '../styles/posts.css'

const Post = ({ title, slug, date, body, fluid, tags }) => (
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
      <ul className="post-tags">
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>
              <Badge color="primary" className="text-uppercase">
                {tag}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>
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
