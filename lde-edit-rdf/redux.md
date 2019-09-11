<img alt="Redux Log" src="../img/redux.svg" height="40" style="float:left"></img>

## Redux
Thinking about the transformation of the Profiles with Resource Templates being
transformed into a client-side editor but we still need a way associate any
changes made by the cataloger in the Linked Data Editor made with the values in
[React][REACT] components so that we can do such things as generation of RDF
validations, and updating the backend Sinopia Server.

To capture the current data of the application's [React][REACT] components and to
build a RDF representation based on the values of the components, the Javascript
[Redux][REDUX] project was used for managing the current state of the Sinopia editor
application running in the client web browser of the user.&hellip;

[REACT]: https://reactjs.org/
[REDUX]: https://redux.js.org/
