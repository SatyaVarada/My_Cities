"""Please refer my-server/README.md for complete documentation of the application"""

#Commands to run the app
```
cd my-server
npm ci #installs node modules
npm start
```
#Front end web application code can be found in my-cities-app folder. It is written using React Js, Typescript and tailwindcss.
#Server logic can be found in my-server folder. It is written using Express JS.

#APPLICATION INFO:
The front-end application displays the list of cities as tiles in the Home Page. The user is also provided with a Search box to search for the cities by inputting its name or any of its details in the text area. On entering the keys, the user will be presented with cities that match the criteria.
Clicking on any of the city/tile, takes the user to the page specific to that city, where a detailed information about it can be found.

MY-CITIES-APP DOCUMENTATION:

The application consists of 3 typescript react components, namely App, Home and City. They are designed as functional components and hooks are used within them to manage state, when required.
```
#APP
Nests all the front-end logic within it and contains Routes for all the pages in the application.
Props: No
State: No
```

```
#HOME
Displays the list of cities and a Search bar.
Props: No
State: cities (Type: <Array<any>>)
Hooks: useState, useEffect
```

```
#CITY
Displays the details about the selected city.
Props: No
State: details (Type: <any>)
Hooks: useState, useParams, useEffect
```