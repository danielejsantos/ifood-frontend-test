# iFood Frontend Test

All the instructions, architecture and decisions about the project can be founded below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its framework, React.

## Dependencies

- **TypeScript**: it types the code at runtime
- **Styled Components**: it optimizes the styling experience for React components.
- **React-router-dom**: it provides a better rendering to the different routes inside a SPA.
- **Axios**: used to access APIs, it gives you the ability to take advantage of JavaScript's _async_ and _await_ for more readable asynchronous code.
- **Material-ui/icons**: an easier way to get svg icons as React components.
- **Date-fns**: it provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── mainifest.json
│ └── robots.txt
├── src
│ ├── assets
│ │ └── images
│ │ └── logo.png
│ ├── components
│ │ ├── FeaturedPlaylist
│ │ │ ├── index.tsx
│ │ │ ├── styles.ts
│ │ │ └── types.d.ts
│ │ ├── Filters
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ ├── Input
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ └── Select
│ │ ├── index.tsx
│ │ └── styles.ts
│ ├── helpers
│ │ └── index.ts
│ ├── pages
│ │ ├── Homepage
│ │ │ ├── index.tsx
│ │ │ ├── styles.ts
│ │ │ └── types.d.ts
│ │ └── Login
│ │ ├── index.tsx
│ │ └── styles.ts
│ ├── services
│ │ ├── apis.ts
│ │ └── storage.ts
│ ├── store
│ │ └── index.ts
│ ├── styles
│ │ └── GlobalStyles.ts
│ ├── App.tsx
│ ├── config.ts
│ ├── index.tsx
│ └── react-app-env.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the pages and that can be reusable.
- **helpers**: util functions
- **pages**: application screens
- **services**: APIs and localStorage functions
- **store**: homepage reducer and state
- **styles**: global styles to be used in the entire application

The project is visually structured by two pages created to be navigated by `react-router-dom`. The Login page has a button that redirects the user to Spotify authentication page. Then the user is redirected to the Homepage.

Homepage has a header, which contains a search bar and a filter button that once clicked can show some more advanced filters: language, country, date and time, number of playlists and number of pages.

The entire application was built with the concept of Mobile First and responsive layout.

In order to keep users logged in, it was used _Local Storage_.

As it isn't a considerably large application, the state is controlled by _React Hooks_.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/spotifood

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/spotifood.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
