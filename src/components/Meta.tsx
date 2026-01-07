import { Helmet } from 'react-helmet'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import React from 'react'
import { WEBSITE_URL } from '../constants'

const Meta = ({ location }: RouteComponentProps): JSX.Element => {
  return (
    <Helmet>
      <link rel="canonical" href={`${WEBSITE_URL}${location.pathname}`} />
    </Helmet>
  )
}

export default withRouter(Meta)
