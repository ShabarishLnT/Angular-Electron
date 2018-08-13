After cloning the project 

run npm install and npm start

Application will open in a window with all the UI pages. As of now I designed login page with success message so for logging in the application username: "a" and password: "a"

Process of creating the appliaction file i,e double click the file to run the appliaction as similar to standalone application

In Windows: 

npm run build:prod ; npx electron-builder build --windows

A folder app-build will be created inside dis folder after completion nof running this command. Open the folder and ope the application file.

For Linux:
npm run build:prod && npx electron-builder build --linux

For Mac:

npm run build:prod && npx electron-builder build --mac