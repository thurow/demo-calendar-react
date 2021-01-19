import { Box, Chip, Theme } from "@material-ui/core";
import styled from "styled-components";

type ReminderChipProps = {
  $bgColor: string
  theme: Theme
}

export const RemindersListContainer = styled(Box)`
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ReminderChip = styled(Chip)`
  margin-bottom: 4px;
  border-radius: 4px;
  justify-content: space-between;
  ${(props: ReminderChipProps) => `
    background: ${props.$bgColor};
    color: ${props.theme.palette.getContrastText(props.$bgColor)};

    svg {
      color: ${props.theme.palette.getContrastText(props.$bgColor)};
    }
  `}
`
