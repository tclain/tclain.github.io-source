import React from 'react'
import { PoseGroup } from 'react-pose'

export const AnimatedInViewport = ({ active, children }) => (
  <PoseGroup>{children}</PoseGroup>
)
