# Weekend Challenge 11 - React-Redux Feedback Form

## Instructions

Reviewing code is an important role developers play. We're going to practice reviewing code from others.

- Get the repo url from your partner
- Get your partner's project running on your computer
- Review the code from your partner and give relevant feedback
- Complete the Markdown section and submit that in the notes section on the assignment app. (Make sure you include who's code you reviewed.)

Practicing compassionate code reviews is important (you can learn more from this video on the topic: https://www.youtube.com/watch?v=Ea8EiIPZvh0 )

## Review Checklist

## Base Required Features 

- Multi-Part Form:  
  - [yes] Able to add feedback
    - [yes] Data collected on individual pages & components
    - [yes] Click on next takes you to the next page in sequence
    - [yes] Data saves in DB after *all* the parts are completed (not piecemeal)
    - [yes] Thank you page takes you back to the first view

- Client code:
  - [yes]  Individual components for each form part
  - [yes]  Redux setup complete
    - [yes] Store linked to react with `<Provider>`
    - [yes] Store setup with reducer(s) and logger middleware 
  - [yes] Reducers & Actions Working
    - [yes] Actions are in SCREAMING_SNAKE_CASE and semantically named
    - [yes] Actions have a `type` key, and `payload` if sending data
    - [yes] Reducers are returning a new state, or the old state (not mutating)
    - [yes] Reducers are using spread correctly (to keep old data, while adding new)
  - [yes] React-Redux Working
    - [yes] `useDispatch` in components correctly & dispatching Actions onClick
    - [yes] `useSelector` when data is needed from Redux for submission
  - [yes] Axios POST request to add feedback

- Server code:   
  - [yes] Router, with a `POST` endpoint to submit feedback


## General Items
Feedback should be provided for these items, but they do not impact scoring.

- Git 
  - [y] Multiple git commits showing incremental progress
  - [y] Commits are descriptive of the changes made or feature added 
  - [y] Has .gitignore with node_modules
  - [N] Readme file updated (assuming this is previously discussed)
- Code Style 
  - [Y] Appropriate amount of code comments
  - [Y] Code is consistently formatted
- Client
  - [Y] Appropriate use of HTML tags
  - [Y] Basic CSS styling with margins/padding


## Stretch Goals

- Previous Steps
  - [Y] allows a user to go to a previous step, either directly or by cycling backward thru the steps
  - [Y] user can update their score for a step
    - [Y] new score is validated to not be empty
    - [Y] redux is updated with new score
  - [Y] user can continue on to review page and submit as in Base Mode


- Admin View
  - [Y] All entries are visible with correct data from inputs
    - [Y] Most recent is at the top
  - [Y] Can Delete an entry
    - [Y] User is prompted before deleting
  - [Y] Axios GET request to get all feedback for `/admin` view in componentDidMount

- [Y] Styling with Material UI
- [Y] Ability to flag a feedback item on `/admin` for further review
- [N] Deployed to Heroku


## Markdown

```
Hey Peder, very clean code! You nailed this proj 110%. Make sure to add README.md to your project! Otherwise this is great

General Feedback.

---
| Functional Requirements | Complete? |
| --- | :---: |
| Multi page form with client side routing and navigation (next button) | no |
| Data stored in Redux when navigating from page to page | no |
| User is notified when trying to leave a blank score | no |
| Review Component displays scores and comments from current redux state | no |
| Submit button sends data to the server via Axios | no |
| Confirmation Page displays after data is POSTed to the server | no |
| Button on Confirmation Page starts a new survey | no |
| Views are broken down into components | no |

---
### Notes:

Notes on the above Functional Requirements.

---
| General Items | Complete? |
| --- | :---: |
| More than 15 git commits | YES | 45
| Commits are descriptive of the changes made or feature added | YES |
| Readme file updated | no |
| Appropriate amount of code comments | YES |
| Code is consistently formatted | YES |
| Server code organized with router & module files | YES |
| Dispatch action to clear redux state on new survey | YES |

---
### Notes:

Notes on General Items

```