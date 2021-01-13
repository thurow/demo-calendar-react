import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, RenderResult, screen } from "@testing-library/react"
import { AppBuilder, AppBuilderProps } from '../../../__test__/AppBuilder'
import { ReminderModal } from './ReminderModal'

const setup = (appBuilderProps?: AppBuilderProps): RenderResult => {
  return render(
    <AppBuilder {...appBuilderProps}>
      <ReminderModal />
    </AppBuilder>
  )
}

test('should validate title with max 30 characters', async () => {
  const INVALID_TITLE_INPUT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis urna, sagittis at dui at, accumsan pharetra eros. Nullam vulputate in turpis eu tristique.'

  setup(
    {
      remindersState: {
        isReminderModalOpen: true
      }
    }
  )

  expect(screen.getByText(/Adding/)).toBeInTheDocument()

  userEvent.type(screen.getByLabelText('Reminder name'), INVALID_TITLE_INPUT)

  userEvent.click(screen.getByText('Save'))

  expect(await screen.findByText('Maximum number of characters is 30')).toBeInTheDocument()
})

test('should add new reminder', async () => {
  setup(
    {
      remindersState: {
        isReminderModalOpen: true
      }
    }
  )

  userEvent.type(screen.getByLabelText('Reminder name'), 'Event test')
  userEvent.type(screen.getByLabelText('City name'), 'Blumenau')

  // Date and time are not typed, but they have a default value for todays data

  userEvent.click(screen.getByText('Save'))

  expect(await screen.findByText(/Adding/)).not.toBeVisible()
})
