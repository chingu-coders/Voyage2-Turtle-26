# Voyage2-Turtle-26

## WanderTab
This is turtles-team-38's project cloning the [Wandertab Chrome extension] (https://chrome.google.com/webstore/detail/wandertab-by-hitlist/fobdcmnamenjmkffajcbljjpgiolooeh?hl=en-US).A new tab extension for Google Chrome that offers travel costs for amazing destinations around the world.

## Tech Stacks

### Front-End:
1. React.js
2. Redux
3. ReduxPersist (for local storage)
4. ReduxThunk
5. CSS3
6. JSX


### DevOps:
1. GitHub
1. npm
1. CreateReactApp

## Making a Pull Request
1. When you've finished making your changes, [watch this video](https://www.youtube.com/watch?v=mENDYhfxH-o) to make sure your local clone is up-to-date, and then properly make a pull request.

## Deployment to Chrome
1. Clone or download this repo
2. Open up Google Chrome
3. Enter `chrome://extensions` in browser's address bar
4. In top right-hand corner, ensure that the **Developer Mode** box is checked
5. Click **Load unpacked extension...** , a file navigation box will appear
6. Navigate to the directory where you cloned/downloaded the repo, select the `dist` folder and click **Select**
7. DevTab extension should appear on page
8. On right-hand side, ensure the **Enabled** box is checked
9. Open up a new tab either by pressing the new tab button on the top-right hand corner of your browser or by pressing `Cmd+T` (mac) or `Ctrl+T` (windows)

## Progress

Track our project on our Wandertab Clone GitHub [Kanban Board](https://github.com/chingu-coders/Voyage2-Turtle-26/projects/1).  

## Contributing

Once the project is finished, We will welcome pull requests from other members too. Found an **issue** or like to add a **feature**? Please submit an issue.
<br/>

| Contributors |
| ------------ |
| **[David Kalu](https://github.com/joshmorel)** |
| **[Himanish Kabiraj](https://github.com/himanish58)** |
| **[Ilya](https://github.com/Dar0n)** |

Let us know you, if are working on any *issue/feature* by creating an **issue**.
<br/>

### Prerequisites

|Prerequisite                                              | Version   |
|----------------------------------------------------------|-----------|
| [Node.js](http://nodejs.org)                             | `~ ^6`    |
| npm (comes with Node - npm install -g npm@5 to upgrade)  | `~ ^5`    |
| create-react-app (npm install -g create-react-app        | `^1.0.10` |

> _Updating to the latest releases is recommended_.
<br/>

If you have already installed Node.js in your system, then run the following command to validate the versions.

```shell
node -v
npm -v
```

If your versions are lower than suggested, then you should update to avoid any errors.

To install dependencies:

```shell
npm install
```

### Repo Structure

  * **public/index.html**: the page template
  * **src/index.js**: the JavaScript entry point, React is rendered into DOM here, Redux store is configured, and Redux is connected to React
  * **src/actions**: Redux actions, related actions should be in a shared file, e.g. `weatherActions.js`.
  * **src/components**: All React components are defined here. `App.js` is the top-level component.
  * **src/reducers**: Redux reducers are defined here. Reducers take initial state and actions called by components and return new state to the application.
  * **src/styles**: Global styles

### Making your Contribution

See [CONTRIBUTING.md](./CONTRIBUTING.md)
