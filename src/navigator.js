
/**
 * Helpers for use with raid-navigator
 */

import React from 'react'

import { PageTransition } from './page'

export const mapChildren = child => (
  <PageTransition
    key={child.key || child.props.route}
    route={child.props.route}
  >
    {child}
  </PageTransition>
)

export const childFactory = transition => child =>
  React.cloneElement(child, { transition })
