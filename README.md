# artists-eve

Find details on artists and their upcoming events.

# Getting Started

Clone the repository to your local machine, open its directory in a terminal and run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. Use this to run the tests suites available.\

## Architecture and Design choices

This project has only 2 layers in its architecture, which is a view layer and a data layer.
This is so because it is a small app.

### `Data Layer`

The data layer is housed in the "data" directory inside the project. The only data we have for this project is
concerned with an API called "Bands in Town". Its implementation exists in the bandsInTownApi.js file.

### `View Layer`

For the view layer, we have some static assets and multiple components, all being presented in page components.

### `File Structure`

Most files and folders are boilerplate and come with "create-react-app".

The .vscode folder consists of a settings.json file, to apply any settings to VS Code for this specific project.

The .prettierrc.json file contains formatting settings for the VS Code "Prettier" extension. That is the default formatter
for this project.

All main project files are in the "src" directory:

"assets" - There's a separate assets directory for all static assets such as images and gifs so all static assets can be in one directory and easily found.

"components" - directory contains all of the top level components of the project.
Having this directory makes sense to include all of the components that can be global to a project and can be used
in any other component, like a button or a header can be used anywhere.
And inside the component directory, we have separate directories for every component so its easier to locate files related
to each specific component, such as its test files, stylesheet, the main component javascript file and any other file relevant to that specific component.

"contexts" directory contains all contexts created for the app. It contains all context instantiations.
It makes sense to do this in case we need to tell what are the different contexts being used in the app, we can just visit
this directory and see all the different contexts created for this app.

"data" directory, as mentioned above, is the data layer and contains all files concerned with serving data to the app.
It is so that it makes it easier to separate data layer from the view layer, and also that we can have all data in one place.
We can just come here whenever we're looking into data concerning the app.

"pages" directory contains page components, so to speak.
All pages have their own directories, so we are able to separate all files related to a page component, such as its index.js
file, styles files if any, test files, and the main component file as well. Also, if there are any components specific to a page and not to be globally used, those components can be created inside of its own page directory.

"utils" directory has all of the utilities for this app such as the datetime regex utility. It has a **tests** directory that contains all tests for utilities. The intention is to not use separate directories for each utility, but only their core files. And to be able to separate tests and only look at them when we need to, we can refer to the **tests** directory.

### `Other Info`

There are index.js files in components and pages folders so while importing those components elsewhere, we don't have to write
the directory name plus the core file name. We can only write the directory name.
