# State to RDF (and back again)
## Redux to RDF
Using the editor's application state stored in [Redux][REDUX] along with the resource templates cache, the
Sinopia editor builds a RDF graph upon demand. When cataloging, the user at anytime can see what RDF is 
being produced by clicking on the **Preview RDF** button: 

![Preview RDF](../img/preview-rdf.png")


### Quick `sinopia:hasTemplate` solution
In developing the [Sinopia][SINOPIA] version **1.0**, we first worked on representing
resource templates using [React][REACT] components followed by using [Redux][REDUX].
After we had working codebase, we started generating RDF using the [N3][N3]
RDF javascript module based on the application's [Redux][REDUX] state. Using a
[OpenAPI](https://www.openapis.org/) yaml API configuration definition of the
expected interactions with the [Trellis][TRELLIS] backend, we successfully created
the expected entity with a newly resolvable minted URI.   

### Future Possibility: Machine Learning
We have tentatively started exploring the use of Machine Learning for part of
these workflows, especially in trying to map incoming RDF with the existing
resource templates in the [Sinopia][SINOPIA].

[N3]: https://github.com/rdfjs/N3.js/
[REACT]: https://reactjs.org/
[REDUX]: https://redux.js.org/
[TRELLIS]: https://www.trellisldp.org/
[SINOPIA]: https://sinopia.io/
