import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout pageTitle="Байланыш жок...">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary text-uppercase" to={'/'}>
      Башкы бетке барыӊыз
    </Link>
  </Layout>
)

export default NotFoundPage
