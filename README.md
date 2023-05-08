Hi Chris,

I hope you're well!

I thought I would spend a few words on what I did and why.

The stack I used is:
React, Typescript, Styled Components, Zustand to manage state, the React Player package to show the youtube videos, Jest and React Testing Library for testing, and many other packages to help with the Webpack configuration.

So since my focus was on the production aspect of the app, I didn't want to use create-react-app to initialise the project, as it adds so many additional things I won't be needed; so to have more control, I have done all the Webpack and Babel config myself and only added the things I really need, saving on the final build bundle size.

Typescript is only used for type checking and not transpiling, which is done with Babel.

I never really worked with videos before, so after some research, I got a feeling of what was needed to make the best out of it in terms of streaming quality, and got myself a list of must-have features:

Using adaptive bitrate streaming
Optimising video resolution
Using hardware acceleration
video compression

There is more, but those seemed the most important to me.

Then I did some research and found out about React Player, which can help with all of the above, so I used this package for streaming. It is used in the VideoPlayer component, and I commented on those configs.

When the App is first loaded, I make an API call to get a list of videos, which is then stored in the Zustand Store, then when users click on one of the thumbnails, they get redirected to another route where I show the video, as per design; one thing to note is that I only make an additional API call to get the data of the specific video only if I don't have it already in State, that only happens if the user refreshes the specific /video/123 route view.

I tried to optimise for performance in all the ways I could think of; for example, using React.lazy on the Home page that will load specific components only when needed, and some caching with useMemo and memo. Regarding the production build, I have used webpack config that should be helpful with compression, splitting code into chunks and minimisation.

I think that's about it really; sorry about the super long message, but I thought I would give you a general idea of what I did.

If I had more time, I would have added more test coverage and used analytics tools to check the production build and see how it could be improved. Some caching would be good, as also using Server Side Rendering, which would make everything much faster, I would have used Next.js for that, but I still needed more exposure to it and feel more confident with React atm.

This is the live url hosted in Netlify:

#### `https://stately-druid-ca5b50.netlify.app/`

### `npm install`

to install all the require packages

### `npm run dev`

to start the dev server

### `npm run build`

to make a production build of the app

you would need an YouTube Api key for this to run,
it should live in a .env.local file and have this format

#### `REACT_APP_YOUTUBE_API_KEY=yourKeyHere`
