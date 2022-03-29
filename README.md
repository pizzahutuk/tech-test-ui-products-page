# PHDV Live coding - frontend
Welcome to the live coding test for PHDV. This repo contains an extremely basic mock up of our products page. The theory was that, instead of expecting candidates to waste time creating their own app setup and write some features completely from scratch, we'd like to give candidates an experience of adding features to an existing codebase. We feel this better mimics a developer's day to day and also means you spend less time with the fiddly bits during the test.

On that note, the repo has been created using create-react-app, so the build should be fairly generic and an unimportant detail to the output of the test.

# Getting setup

You should be able to run the following commands to get started:

```
nvm use
yarn
yarn start
```

# Description of repo
`data` - Some mock data for products

`features` - Probably the most important directory as it is where all the functionality is implemnented

`layout` - This directory can be completely ignored for the purposes of the test

`services` - Contains a mock api client

`types` - Common TypeScript definitions for some of the objects we use throughout the codebase

# Tasks
The tasks have been ordered in terms of easiest to hardest. You don't need to complete them all and feel free to say things like "If I had more time, then I'd do it this way"

# 1. Warming up:
By default, the prices are showing as e.g. `£6`, in the real world this price would typically show as `£6.00`

Write some code to show prices as `£6.00` wherever they're rendered on the site. 

# 2. A bit of React:
If you look in the data directory, we can see that there is a Pizza product available, but it isn't rendering. The second task is to get the Pizza rendering, including showing the extra information on the Pizza object

# 3. More challenging: state management
Add a product to basket, feel free to do this any way you like, such as:
- Callbacks
- HOCs
- Redux
- context API 

