import styled from 'styled-components'
import { TableCell, Theme, Typography } from '@material-ui/core'

type DayStylesProps = {
  $isWeekendDay: boolean
  $isFromOtherMonth: boolean
  theme: Theme
}

export const DayCell = styled(TableCell)`
  ${(props: DayStylesProps) => `
    background: ${props.$isWeekendDay ? props.theme.palette.grey[100] : props.theme.palette.common.white}
    ${props.$isFromOtherMonth && 'pointer-events: none;'}
  `}
`

export const DayNumber = styled(Typography)`
  font-weight: 600;
  ${(props: DayStylesProps) => `
    color: ${props.$isFromOtherMonth
      ? props.theme.palette.grey[300]
      : props.$isWeekendDay
        ? props.theme.palette.primary.light
        : props.theme.palette.common.black}
  `}
`
