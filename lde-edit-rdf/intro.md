## Background
The Sinopia's public facing linked data editor, available at
[https://sinopia.io/][SINOPIA], constructs forms for creating and editing 
RDF based on resource templates properties defined in the Library of Congress
derived Profiles. The editor's use of a more modern Javascript [React][REACT]
user interface library coupled with the [Redux][REDUX] library for application-state
management allows for the dynamic creation of valid RDF triples that are then
saved through an API call to the Linked Data Platform [Trellis][TRELLIS]. This
approach simplified the implementation of the editor by eliminating the need for
complex SPARQL statements for querying and updating a RDF triplestore.


[REACT]: https://reactjs.org/
[REDUX]: https://redux.js.org/
[SINOPIA]: https://sinopia.io/
[TRELLIS]: https://www.trellisldp.org/
