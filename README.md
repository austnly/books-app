# Google Books UI

A single-page UI for the Google Books API using React.

## Implementation

### Plan

-   Create components (book cards, search bar, header)
-   Create containers (home, form, book list)
-   Plan layout and styling
-   Create fetch logic
    -   Input field value acts as a state hook on button click
    -   useEffect hook to send value as fetch query to Google Books API
    -   useEffect hooks to changes in results object?
    -   Results object passed to BookGrid container
    -   Results iterated through to pass image, title, authors, description to book components
    -   Booklist re-rendered with book cards

### MVP

1. Create a page that allows users to search for books
1. Page should include the following:
    - Header section introducing the page
    - Form containing a text input and a submit / search button
    - A grid of books

Instructions:

-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

Styling (required):

-   This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
-   Styling must use BEM, and each block should have its own SCSS file
-   Your palette should use variables

Application Design (required):

-   You should separate DOM functions and non-DOM functions in different modules Example: https://github.com/nology-tech/kiribati-resources/tree/main/js/modules
-   Write as many non-DOM functions as you can
-   Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

Bonus (optional, but highly recommended):

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

### Issues to Address

-   [ ] Handle missing data

### Nice To Haves

-   [ ] Advanced search options (title, author, year)
-   [ ] Pagination, max results
-   [ ] Details appear on hover over book image
