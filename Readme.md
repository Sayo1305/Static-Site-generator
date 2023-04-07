# Task 2 (Site Generator)
## Tech Stack
<ul>
      <li>HTML</li>
      <li>CSS ( Tailwind CSS + Vanilla )</li>
      <li>JavaScript</li>
      <li>Express Js</li>
      <li>HandleBar (Npm Package)</li>
</ul>

## Instruction to run the code
<ul>
      <li>Install the packages</li>
      <ul>
            <li>Open the terminal</li>
             <li>Make sure in the right path.</li>
            <li>Enter command "npm install"</li>
      </ul>
      <li>In the terminal just write</li>
      <ul>
            <li>"npm start"</li>
      </ul>
</ul>

## How the code works
<ul>
      <li>From the site user details are sent to the backend or API (express Js). </li>
      <li>In the backend the Handlebar Package will process the data.
      </li>
      <li>there are certain Template already build are compiled by the handlebar and generated a HTML code</li>
      <li>This is code is send back to the template.html file where it is injected to the document then, we can see your custom site.
      </li>
</ul>

## Approch to solve
<ul>
      <li>Firstly, getting knowledge about template and template language.</li>
      <li>Them know, about the handlebar package which available for both CDN and npm package.
      </li>
      <li>I have required to get the detail store and send to another file so, I thought that backend server will be ideal choice.</li>
      <li>I firstly thought to go with react but, as mention in the PDF that user can download or able to deploy that template, that's why choose basic HTML , CSS and also for good DOM manipulation as in react it is difficult to insert or manipulate the DOM.</li>
      <li>There are many ways to make template using .hbs or .handlebar files we can easily create a site.</li>
      <li>But html seems more convinient. Also, used custom handlebar helper in order to fulfil the condition like (enable/ disable).
      </li>
</ul>