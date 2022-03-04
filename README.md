<h1>Achievement 4 Project: Meet App</h1>
<br>
<h1>Objective</h1>
<p>
The objective of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
 
To view this application, please visit: https://artincf93.github.io/Meetupp-app/
</p>
<br>
<h1>Key Features</h1>
<p>
  <ul>
      <li>Filter events by city.</li>
      <li>Show/hide event details.</li>
      <li>Specify number of events.</li>
      <li>Use the app when offline.</li>
      <li>Add an app shortcut to the home screen.</li>
      <li>View a chart showing the number of upcoming events by city.</li>
</ul>
</p>
<h1>User Stories</h1>
<p>
1. As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
</p>

<h1>Scenarios</h1>
<h4>FEATURE 1: FILTER EVENTS BY CITY</h4>
<p>
As a user I should be able to “filter events by city” So that I can see the list of events that take place in that city
    
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.     
    Given user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
     Given the main page is open When user starts typing in the city textbox Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list. 
    Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing When the user selects a city (e.g., “Berlin, Germany”) from the list Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city
</p>
<br>
<h4>FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS</h4>
<p>
 As a user I should be able to show and hide an event's details So that I can view details of a single event one at a time and move on to another specific event conventiently

Scenario 1: User can expand an event to see its details 
    Given the main page displays a list of events 
    When the user clicks on a single event
    Then the user should see a view of event details

Scenario 2: User can collapse an event to hide its details 
    Given the screen displays a view of a single event's detials. 
    When the user clicks the x or back button Then the screen should return to a list of all events
</p>
<br>
<h4>FEATURE 3: SPECIFY NUMBER OF EVENTS</h4>
<p>
As a user I should be able to display a certain number of events page by page So I can see more or fewer events in the events list at once

Scenario 1: When user hasn’t specified a number, 32 is the default number 
    Given the user has not specified a number When the user is on the home page
    Then the screen will automatically return 32 events per page

Scenario 2: User can change the number of events they want to see 
    Given the user has specified a number
    When the user is on the home page
    Then the screenwill return the indicated number of events per page
</p>
<br>
<h4>FEATURE 4: USE THE APP WHEN OFFLINE</h4>
<p>
As a user I should be able to use the app offline So that I can see events I viewed the last time i was online
Scenario 1: Show cached data when there’s no internet connection 
    Given the user is offline
    When the information is stored on the computer or device
    Then the screenwill display the saved data

Scenario 2: Show error when user changes the settings (city, time range) 
    Given the user input a city and time range When the information does not match with any of the data 
    Then the screen will display an error
</p>
<br>
<h4>FEATURE 5: DATA VISUALIZATION</h4>
<p>
As a user I should be able see a chart of upcoming events in a respective city So that the events can be organized city by city for good user experience
Scenario 1: Show a chart with the number of upcoming events in each city 
    Given the user opens the main page 
    When the user scrolls to the bottom 
    Then they will see a chart with the number of upcoming events in each city
</p>
