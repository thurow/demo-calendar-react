# demo-calendar-react

## What is it?

This is a simple React project that renders a Calendar component that is used to display, add, update and delete reminders.

## How to Run

You just have to run `yarn install` to install all packages required and `yarn start` to run the application.

For testing purposes, run `yarn test`

## What is missing

- Weather Forecast (Component and API call) for the specific date selected and city entered
- Expand the calendar to support more than the current month
- Block adding and updating reminders on passed dates
- Persist reminders:
  - Just on Frontend: Redux Persist
  - Backend: Maybe Lambda + API Gateway + DynamoDB + Redux Sagas
