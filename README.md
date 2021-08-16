# noteTaker
## Description
The main motivation for creating this project was to create the backend to provide support to the frontend of starter code for a Note Taker application. This application uses express.js for the back end and retrieves note data from a JSON file. The functioning application allows the user to enter a note title and description, store multiple notes and recall past notes that have been stores in the app's left column.

The main problems this app solves include:
* Writing and saving notes so that tasks can be kept track of.
* Creating various routes that return certain html files using a GET request, returns all saved notes as JSON using a GET request and finally recieve a new note to save on request body using a POST request.
* Clicking an email address link and already creating an email form addressed to said email using the users default mail platform
* Giving each created note Unique ID when its saved.
* Creating a live webpage using Heroku that utilizes the server file created but without using the local termninal.

Overall this project taught me specifically how to various routes using both GET/POST requests, how to assign unique IDs to objects, how to use various fs methods and finally how to create a live webapp using heroku to host said app.

## Installation
Node was required to be installed. Node_modules were needed to be installed for express as well as package-lock.json which correspond with the supplied package.json
``npm i``

## Usage
``node server``


## License 
MIT License

            Copyright (c) 2021 Hamza Khalid
            
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
            
## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Demo Gif

