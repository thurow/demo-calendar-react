import { Chip, Theme } from "@material-ui/core";
import styled from "styled-components";

type ReminderChipProps = {
  $bgColor: string
  theme: Theme
}

export const ReminderChip = styled(Chip)`
  margin-bottom: 4px;
  ${(props: ReminderChipProps) => `
    background: ${props.$bgColor};
    color: ${props.theme.palette.getContrastText(props.$bgColor)};
  `}
`
