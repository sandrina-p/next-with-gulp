# next.js with Gulp
A very simple "Hello World" example that uses `next.js` with `gulp` with a task to watch and minify scss.

**What is [Next.js](https://zeit.co/blog/next)**
> a small framework for server-rendered (isomorphic) universal JavaScript webapps, built on top of React, Webpack and Babel.

**What is [Gulp](gulpjs.com)**
> A Javascript task runner that lets you automate tasks such as minifying js and (s)css and refreshing your browser links when you save your files.

<br>

**How to make it work:**

- install node_modules needed:

`npm install`


- You need to have `next` and `gulp` running at the same time:

Gulp : `gulp watch`

Next : `npm run dev`

_Ready to go!_

<br>
**Browser-sync**

`Next.js` injects `.css` files through `React`, so browser-sync seems to not find those css files to update them when you make changes. At least I couldn't find a solution.. The code about it is commented on _package.json_. If you want to give it a try and succeed, a `Pull request` is very welcome!
