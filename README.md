# Project-Planner-WTRIII

# 05 Third-Party APIs: Work Day Scheduler

## Summary
- Live Link: https://wtriii.github.io/Project-Planner-WTRIII/
- Repo Link: https://github.com/WTRIII/Project-Planner-WTRIII
- collaborated with Mitchell Robbins for deliverable
- used this tutorial for local storage: https://youtu.be/rVyTjFofok0
- created user inputs for planner
- user input rows change color based on time of day
- save buttons save the information through page refresh using local storage

#User Story Follows

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
### use moment.js to display date and time in jumbotron - COMPLETE
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
### time range will be 8-6  - ten rows - COMPLETE
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
### while loop to change colors - need to compare date/time of block to running time
### while(tableClass > moment){ color = } else
WHEN I click into a timeblock
THEN I can enter an event
### user input for data associated with rows - COMPLETE
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
### button for each row. each row saved individually into local storage - remember preventDefault 
WHEN I refresh the page
THEN the saved events persist
### page populates data from local storage
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
