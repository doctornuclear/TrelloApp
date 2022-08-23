# TrelloApp
Trello clone in Django and Angularjs

## Features
- Has fixed 3 columns/lists to add cards
- Cards can be edited/deleted
- Django is used to host the project

## To run
`python manage.py runserver`

And then log on to `localhost:8000/`

## Design Choices
#### Bootstrap: 
Majorly, all elements are built using Bootstrap. Especially, the modal (or form) that is used to create/edit a card. The modal is built in such a way, that user cannot skip saving/closing the modal by clicking on the empty area when the modal is open. 


#### Angular: 
Angular is used to manage all the functions like add, edit, delete and managing the data of three columns. An object is created to keep track of three lists (first, second, third) and each of these keys have a list associated to it containg card data.
The object is created in a such a way as it would let easy access of data from object using value of dropdown

Cookies: Cookies are used to save data. On page load, cookies are checked if any data exists, and saved to current scope. 

Validation: An error is shown to the user when validation fails. Checks on title for 'all alphabets', description for 'lenght is minimum 25' and on selected list, which fails if no list is selected.

Reusing the code:  The `save()` is used for all the features(add, edit, delete) so that the code can be reused and everytime `save()` function is called, cookies are refreshed so that there is no data loss.

#### Django
Django is used to serve the static webpage.
