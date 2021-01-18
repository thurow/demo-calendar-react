import styled from 'styled-components'
import { IconButton, TableCell, Theme, Typography } from '@material-ui/core'

type DayStylesProps = {
  $isWeekendDay: boolean
  $isFromOtherMonth: boolean
  $pastDay: boolean
  theme: Theme
}

type DeleteAllRemindersBtnProps = {
  $canRemoveAllReminders: boolean,
  theme: Theme
}

export const DayCell = styled(TableCell)`
  ${(props: DayStylesProps) => `
    background: ${props.$isWeekendDay ? props.theme.palette.grey[100] : props.theme.palette.common.white};
    border-right: 1px solid ${props.theme.palette.divider};
    ${props.$isFromOtherMonth || props.$pastDay ? 'pointer-events: none;' : ''}

    &:last-child {
      border-right: none;
    }
  `}
`

export const DayNumber = styled(Typography)`
  font-weight: 600;
  ${(props: DayStylesProps) => `
    color: ${props.$isFromOtherMonth || props.$pastDay
      ? props.theme.palette.grey[300]
      : props.$isWeekendDay
        ? props.theme.palette.primary.light
        : props.theme.palette.common.black};
  `}
`

export const DeleteAllRemindersBtn = styled(IconButton)`
  position: absolute;
  top: -3px;
  right: -20px;
  ${(props: DeleteAllRemindersBtnProps) => `
    display: ${props.$canRemoveAllReminders ? 'block' : 'none'};
  `}
`
