# Assignment 1 - ReactJS app.

Name: Dennis Petcu
Id: 20063591

## Overview.
The concept of this web app is for users to save their travel/holiday memories online and be able to retrieve past entries.
The web app uses a Form to take in the data entered and displays it in a table list. From here, the user can choose to edit, cancel, or delete the desired journal entry.
The users current date and time (based on system date and time) is displayed in the header.

Users are also able to fill out a Contact form that basically saves the users inputs and displays it in a list. This form uses validation for each input.
 
 + Create Journal Entry (currently only uses the title of the entry).
 + Display Journal Entries in a list.
 + Edit Journal Entry.
 + Delete Journal Entry.
 + Retrieve Current Date and Time using Reactjs Moment.
 + Contact Form that uses validation to display error inputs to user. This form generates a list of the users inputs.
 + Navigation drawer linking to other pages within the web app.
 + Footer with buttons that link to social sites such as Facebook, Twitter, Gmail and Email.

## Installation requirements.

+ ReactJS v15.4.2
+ Bootstrap 4
+ create-react-app tool
+ npm install --save react-router
+ npm install --save reactstrap react-addons-transition-group react-addons-css-transition-group react react-dom
+ npm install react-virtualized --save
+ npm install --save availity-reactstrap-validation
+ npm install --save material-ui
+ npm install --save react-materialize
+ npm install --save moment moment-timezone react-moment
+ npm install --save react-fontawesome
+ etc 

## Cloning/Starting App
 git clone https://github.com/DenoRS/Wanderlust-react.git
 npm install 
 npm start
 
 NOTE: This runs off http://localhost:3000/

## Data Model Design.

Diagram of app's data model (see example below) AND a sample of the test data used (JSON).

{
		journal: 'Journey to Cliffs of Moher'
	},
	{
		journal: 'Trip to Italy'
	},
  {
    journal: 'Giants Causeway'
  },
  {
    journal: 'Scuba diving'
  },
  {
    journal: 'Parachuting today, went great'
  }
  
![][datamodel]

Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][hierarchial]

## UI Design.

Homepage View.

![][homepage]

Top Navigation Bar.

![][navbar]

Jumbrotron Header with Background Image.

![][header]

Footer with Social button links.

![][footer]

List component with Journal Items + Data model.

![][journallist]

Journal Form with two Inputs (Title and Description)

![][journalform]

Journal Entry added to List component from input from Journal Form.

![][listadd]

Removed Journal Entry from List.

![][listdelete]

Editing Journal Entry.

![][listedit]

Saved the Edit to List.

![][listedited]

About Page view with just text.

![][about]

Contact Page view with Contact Form and output.

![][contact]

Contact Page with invalid validation.

![][contactinvalid]

Reference page with references of sites used in construction of this web app.

![][references]

## Routing.

+ / - displays the homepage (Journal Form and List)
+ /about - view with sample text.
+ /contact - View with Contact form and validation.
+ /repos - View with references of sites.

## Extra features

A Login/Authentication system is described in the web app, however it is not implemented correctly for use.
An Avatar of the users profile image using ReactJs Avatar is also described, but not fully implemented as Login did not work.
Date and Time is displayed to the user using ReactJS Moment.
## Independent learning.

+ Researched the methods to implement the newer version of ReactJS
+ Login
+ Date
+ Avatar
+ Reactstrap Components


[datamodel]: ./screenshots/datamodel.png
[hierarchial]: ./screenshots/hierarchicaldesign.jpg
[homepage]: ./screenshots/Homepage.PNG
[navbar]: ./screenshots/NavBar.PNG
[header]: ./screenshots/Header.PNG
[footer]: ./screenshots/SocialFooter.png
[journallist]: ./screenshots/JournalList.PNG
[journalform]: ./screenshots/JournalForm.PNG
[listadd]: ./screenshots/ListAdd.PNG
[listdelete]: ./screenshots/JournalListDelete.PNG
[listedit]: ./screenshots/Editing.PNG
[listedited]: ./screenshots/EditWorks.PNG

[about]: ./screenshots/AboutPage.PNG
[contact]: ./screenshots/ContactListWResult.PNG
[contactinvalid]: ./screenshots/ContactwInvalid.PNG
[references]: ./screenshots/References.PNG

