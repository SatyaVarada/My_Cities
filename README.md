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

#API DOCUMENTAION:
To design this application, the following information from the backend has to be fetched.
1. Fetch the list of cities along with the country it belongs to.
2. Fetch the list of cities matching the search criteria.
3. Fetch the details of a particular city.

This requires designing two APIs namely, getSearchResults and getCityDetails.

The #1 and #2 can be achieved through a single API(getSearchResults) which filters the records with the matching criteria when there is some search string inputted, otherwise it returns all the data available. This API only provides the city and its country information in each record.

#3 can be addressed by getCityDetails which takes the city name as input and returns its details. As we only need a city name, this information can be sent to the backend app as a parameter in the URL rather than sending it in request body.

Note: 
1. As we don't have IDs for each city to identify it uniquely, the city name itself is considered as primary key and is specific to this example. In the real world case, it is recommended to have a unique ID for each record of the data.
2. The information has to queried from the database and should be exposed through APIs in the backend application. But, it is currently being extracted from cities.json file.

```
#getSearchResults:
 
Request Method: GET
Parameters: searchString (Optional)
Request URI: /cities/:searchString?
Request Header: "Accept: application/json"

Response: 
Status Code: 200
Description: OK
Content-Type: application/json;
Example Response : 
[
    {
        "name":"Sydney",
        "country":"Australia"
    },
    {
        "name":"New York City",
        "country":"USA"
    }
]

```

```
#getCityDetails:

Request Method: GET
Parameters: name (Mandatory)
Request URI: /city/:name
Request Header: "Accept: application/json"

Response: 
Status Code: 200
Description: OK
Content-Type: application/json;
Example Response :
{
    "name":"Munich",
    "name_native":"München",
    "country":"Germany",
    "continent":"Europe",
    "latitude":"48.137154",
    "longitude":"11.576124",
    "population":"1472000",
    "founded":"1158",
    "landmarks":["Bavaria statue","Marienplatz","ottonova office"]
}

```

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