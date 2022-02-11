# Reddit clone frontend built using NextJS, Apollo-Graphql and styled-components. [WEBSITE](https://reddit-client-murex.vercel.app/)

This project is the frontend for a fullstack reddit clone. 
[Server Repository](https://github.com/prajotsurey/reddit-server)
## Overview
This is a replica of the reddit user interface. I built this using NextJS. It uses Grahql for commuinicating with the server and Styled-components for styling. It also has a dark-mode toggle which uses the styled-components' Theme Provider. It is deployed on vercel.

Building this project allowed me to learn Styled-components and it's theme provider along with practicing my CSS and React skills. I also got to use the React Context provider to implement to dark-mode toggling. 

## Contents

* [Installation](#user-content-installation)
* [Usage](#user-content-usage)
* [Styled Components Tips](#user-styled-component-tips)


## Installation

1. Clone project

```bash
git clone https://github.com/prajotsurey/reddit-client.git
```

2. Install dependencies for API server.

```bash
npm install
```

3. Create a .env file with the following data
```
NEXT_PUBLIC_SERVER_URL=<backend url>/graphql
NEXT_PUBLIC_TOKEN_REFRESH_LINK=<backend url>/refresh_token
```
## Usage

1. Run as dev

```bash
npm run dev
```

## Styled Component Tips

Styled Components required the "\_app.js", "\_document.js" and ".babelrc" files along with the "babel-plugin-styled-components" dependency.
This project has all these things and is properly configured so no additional steps are needed.

To start a new project with styled-components clone the styled-components example from the nexjs [examples section](https://nextjs.org/examples).
To add styled componenets to a preexisting project check the style-components examples from the above link and make sure all the boilerplate files and packages are present in your project. Make sure to check the project's package.json to view dependencies.
