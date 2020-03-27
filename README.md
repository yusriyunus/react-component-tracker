# react-component-tracker

> use react component wrapper to track analyitc ui action

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

npm start # runs rollup with watch flag

The second part will be running the example/ create-react-app that's linked to the local version of your module.

### (in another tab)

cd example

npm start # runs create-react-app dev server

Now, anytime you make a change to your library in src/ or to the example app's example/src, create-react-app will live-reload your local

dev server so you can iterate on your component in real-time.

## Tracker module

Tracker module configuration is inside example/src/tracker_modules

### Step to add tracker provider

- Add folder inside example/src/tracker_modules with tracker provider name

- Add index.js and config.js inside that new folder

- Define how to call tracker function in index.js

- Define function parameter insinde config.js

### Step to use tracker provider

- Add data feeder as paramter Tracker Component in example/src/App.js base on defined config tracker parameter function before

- Run the app

- Click component showed on screen

- Tracker will logged on terminal

## License

MIT © [yusriyunus](https://github.com/yusriyunus)
