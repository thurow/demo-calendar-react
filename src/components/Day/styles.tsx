import styled from 'styled-components'
import { TableCell, Theme, Typography } from '@material-ui/core'

type DayStylesProps = {
  $isWeekendDay: boolean
  theme: Theme
}

type DayNumberProps = {
  $isFromOtherMonth: boolean
} & DayStylesProps

export const DayCell = styled(TableCell)`
  ${(props: DayStylesProps) => `
    background: ${props.$isWeekendDay ? props.theme.palette.grey[100] : props.theme.palette.common.white}
  `}
`

export const DayNumber = styled(Typography)`
  font-weight: 600;
  ${(props: DayNumberProps) => `
    color: ${props.$isFromOtherMonth
      ? props.theme.palette.grey[300]
      : props.$isWeekendDay
        ? props.theme.palette.primary.light
        : props.theme.palette.common.black}
  `}
`
