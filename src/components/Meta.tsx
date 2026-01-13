import { Helmet } from 'react-helmet'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import React from 'react'

const WEBSITE_HOST_URL = 'https://v2-info.swap.zircuit.com'

const Meta = ({ location }: RouteComponentProps): JSX.Element => {
  return (
    <Helmet>
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${location.pathname}`} />
    </Helmet>
  )
}

export default withRouter(Meta)
