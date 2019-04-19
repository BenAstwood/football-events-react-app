## Technology choices

### React

I've opted for React to build the application UI and have used create-react-app to build the overall application. This has allowed me to concentrate on the UI creation and interaction with the provided WebSocket api.

### Atomic design pattern

I've tried to follow an atomic design pattern for the components the improve maintainability and scalability. Modularizing the components in a clear way makes it clearer to use or extend them, and being small component parts they are also reusable.

### Material UI

For styling I have opted for Material UI as it is very well supported and has good documentation.

## Starting instructions

As this is a create-react-app, once you have installed the packages with `npm i` go to the project directory. There you can run `npm start`, with the development server set to `http://localhost:3000`.

### User story

As a User I want to search live game listings and markets so that I can informed decisions about what bets I will place.

### Testing criteria

Feature: Football market dashboard

Scenario: User clicks on football list item
Given the User has opened the dashboard
When the User clicks on a football list item
Then the football list item will expand revealing more information

Scenario: User clicks on view markets button
Given the User has clicked on a football list item
And that the football list item has expanded
When the User clicks on the view market button
Then a modal opens up and the market data is populated in cards

Scenario: User clicks on view price as fractions button
Given the User has opened the dashboard
When the User clicks on the view price as fractions button and
When the User clicks on a football list item and
When the User clicks on the view market button
Then a modal opens up and the market data is populated in cards and
Then the price information is in fractions not decimals
