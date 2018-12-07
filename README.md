# Star Wars Character Search App

To access this application please visit [Star Wars Character Search](https://activeevil.github.io/)

It can also be run locally via the following terminal commands:

    $ git clone https://github.com/ActiveEvil/ActiveEvil.github.io
    $ cd ActiveEvil.github.io/
    $ yarn
    $ yarn run build && yarn run start

> Please refer to [package.json](package.json) for all test and build scripts.

## Notes on implementation

Swapi has a relatively small set of character data and the API structure is not ideal for partial match searching on user input. I therefore opted to preload the application with all character data. This allows much more efficient partial matching and a generally improved user search experience. The trade off is an initial overhead as the data loads in at the beginning of a session — this is somewhat mitigated by caching the data in session storage.

I have demonstrated simple test implementations for each core part of the application architecture. In a more fully realised solution I would also advocate state based snapshot tests and acceptance tests (with webdriver.io or similar).

I have structured the project with the reusability of components in mind. Tests (and styles) are held together with the source code so that components and other resources are self contained and can be easily shared. The Webpack build process can look after any code splitting and deduplication.

The UI is inspired by the GUIs that feature heavily in the Star Wars films. Here is a nice inspiration resource [Star Wars UI — HUDS+GUIS](https://www.hudsandguis.com/home/2016/3/14/star-wars)
