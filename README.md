
# Github Member Card Display for Pavilion by SJRUK

This is a React Web App that displays a directory of GitHub members using information from the GitHub API. It has been created using React, Vite and Styled Components.

## Getting Started
Feel free to watch this [Loom Video](https://www.loom.com/share/cfe6b0c0cc4348fa8749fb1c71d56c9d) to get a basic understanding of the application. 
Then watch this [Loom Video](https://www.loom.com/share/ea822f75f0b94eefbdffb92dfa1313c9) for the latest update involving ther neccisary enviroment variables.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You need to have the following installed on your local machine and/or basic knowledge of:

- Node.js
- NPM
- Vite
## Installation

Install this project with npm
```bash
git clone https://github.com/SJRUK2000/github_member_card.git
cd github_member_card
```

### Front-End
```bash
  cd .\client\
  npm install
  npm run dev
```
### Back-End (In a Seperate Terminal)
```bash
  cd .\server\
  npm install
  npm start
```

## Enviroment Variables
Due to how GitHub handles its own API Keys and in the interest of best preactices
To run this project, you will need to add the following environment variables to your .env file

`GITHUB_API_KEY`

## Tools and Technologies Used

- React for building the UI components
- Vite for creating a fast and efficient development environment
- styled-components for styling the components
- GitHub API for fetching the data about members
- dotenv to host the enviroment variables
- Node.JS and Express.js for the backend server that hosts the enviroment variables
    
## Design Choices

- Vite was used as the development environment because it is faster and more efficient compared to other traditional setups like Create React App.
- The styled components library was used for styling the components because it provides a way to write actual CSS code within the component file, making it easier to manage the styles and component together.
- The GitHub API was used to fetch information about the members because it is a reliable and easy to use API that provides the data needed for this project. NOTE: The GitHub API does in-fact require the use of an Auth Key in-order to see users emails and to allow for slightly more requests per hour to The API. This key only allows the viewing of emails which are publicly available on all GitHub Profiles that allow it. However, Any github API Keys that are uploaded to public repositires are automatically nullified which created the neccesity for a backend which uses the dotenv package to hide the API Key in the enviroment variables.   
