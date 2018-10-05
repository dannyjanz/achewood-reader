# Achewood Reader

Getting into the Ionic Framework for multi-platform mobile-first app-development.
In this example project I'm trying to create a reader for one of my favourite webcomics,
making it more convenient to read on mobile devices, and providing some other cool features
like tags, just because we can.

## Let's get started

- Ionic can be seen as a wrapper for popular frameworks lile Angular, ReactJs or VueJs, or can be used 'standalone'. We will be using Ionic on Angular, which seems to be the default. This will give us the full range of Ionic features as well as Angular features.

- create the blank app skeleton with the ionic CLI with `ionic start achewood-reader blank`. This very handy command creates a project folder `achewood-reader` with evertyhing you need to get started, source and resource folders, configurations and dependency declarations, a gitignore file and so on.

- The newly created app is ready to be started, it will contain a mostly blank homepage with a link to the docs. You can start the app locally with the `ionic serve` command from within the project folder. Open the browser on `localhost:8100` to see your very empty page.

- exploreing the homepage
- what do the components do

## Browsing the Archives

First thing we want to do with our app is browsing the Archives of `http://www.achewood.com/list.php`. For that we're going to add a new page to the app, a button to get to that page, a dataprovider to load the archive and logic to parse it and display it in a nice list, with sorting and search functionality

### The Archive List Page

- use the `ionic g page Archive` command in the project folder to create a skeleton for a new page

- add button

- add function
- use the NavController to go to Archive Page, or in Ionic terms push the Archive view

### The Archive Data Provider

- Angular `HttpClient`, RxJS `Observable`, `DOMParser`

- add archive provider `ionic g provider Archive`
- create function to load archive page
    - use Angular `HttpClient` 

- the response is an `Observable` a RxJS object
that we can subscribe to to receive the result once it's finished. This whole approach is reactive

- transform the result to list of Comic class