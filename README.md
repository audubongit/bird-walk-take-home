# Guided Bird Walk App

Welcome to the Bird Walk App. Book a guided Bird Walk tour at an Audubon Center near you!

The project is set up with basic data fetching and rendering of a list of available bird walk slots.

# The Ask

This is an open ended assignment to help us guage your experience and expertise. Your decisions around testing, data fetching, state management, UI library, etc. are up to you. Please use these decisions as an oppurtunity to highlight how you like to build.

You can choose to build the "app" in the next.js `frontend` folder or start a fresh Expo project. You shouldn't need to touch the `backend` code.

### Suggested Features

- [ ] Fetch available bird walk appointments from the backend, and display relative to their Audubon Centers.
- [ ] Audubon Centers in different timezones, results should be in the relative timezone to the Audubon Centers.
- [ ] Allow the user to filter by New York State.
- [ ] Allow users to tap on a time and "save" it somewhere.
- [ ] Bonus: handle users who leave the page open then come back to it.

The figma design and assets are available [here](https://www.figma.com/design/U80dz4olB6SOqyCfznYbFb/Untitled?node-id=0-1&t=Z0jPIe549CYOchol-1)

<img width="270" alt="screenshot" src="">

# Your Time

Give yourself no more than 4 hours and complete whatever you can in that timeframe.

Clone this repo, and put it into your own Github as a new private repo. Invite @scottarnold when you're ready and we will review and look forward to discussing it with you.

## Setup

Getting the frontend up and running:

```bash
cd frontend
yarn install
yarn dev
```

Getting the backend up and running:

```bash
cd backend
yarn install
yarn dev
```

## Tests

Each project has their own Jest unit tests.

```bash
yarn test --watch
```
