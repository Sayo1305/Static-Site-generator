# Task 2 (Site Generator)
## Tech Stack
      - HTML
      - CSS ( Tailwind CSS + Vanilla )
      - JavaScript
      - Express Js
      - HandleBar (Npm Package)


## Instruction to run the code
      -Install the packages
            Open the terminal
            Make sure in the right path.
            Enter command "npm install"
      
      - In the terminal just write
            "npm start"
      


## How the code works

      - From the site user details are sent to the backend or API (express Js). 
      - In the backend the Handlebar Package will process the data.
      
      - there are certain Template already build are compiled by the handlebar and generated a HTML code
      - This is code is send back to the template.html file where it is injected to the document then, we can see your custom site.
      


## Approch to solve

      - Firstly, getting knowledge about template and template language.
      - Them know, about the handlebar package which available for both CDN and npm package.
      - I have required to get the detail store and send to another file so, I thought that backend server will be ideal choice.
      - I firstly thought to go with react but, as mention in the PDF that user can download or able to deploy that template, that's why choose basic HTML , CSS and also for good DOM manipulation as in react it is difficult to insert or manipulate the DOM.
      - There are many ways to make template using .hbs or .handlebar files we can easily create a site.
      - But html seems more convinient. Also, used custom handlebar helper in order to fulfil the condition like (enable/ disable).