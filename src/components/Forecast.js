import React from 'react'
import { mapIcons } from '../utils/mapIcons'
import { SvgIcon } from './SvgIcon'
import TextPrimary from './TextPrimary'
import TextSecondary from './TextSecondary'
import Item from './Item'
import styled from '@emotion/styled'

const Container = styled(Item)`
  min-width: 8rem;
  min-height: 8rem;
  text-align: center;
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.borderRadius};
`

export default function Forecast({
  max,
  min,
  icon,
  description,
  date,
  iconColor,
  bg,
  color,
  borderRadius
}) {
  return (
    <Container bg={bg} borderRadius={borderRadius}>
      <TextPrimary color={color}>{date()}</TextPrimary>
      <SvgIcon path={mapIcons(icon)} color={iconColor} size='3.5rem' />
      <TextSecondary color={color}>{description}</TextSecondary>
      <TextSecondary color={color}>{max + ' / ' + min}</TextSecondary>
    </Container>
  )
}
