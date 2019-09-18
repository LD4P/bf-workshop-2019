<img alt="Redux Logo" src="../img/redux.svg" height="40" style="float:left"></img>

## Redux
The transformation the Profiles with Resource Templates being
rendered with a client-side editor is accomplished with [React][REACT] but we still 
need a way associate all of changes made by the catalogers so that we can do such 
things as generation of RDF validations, and updating the backend Sinopia Server.

To capture the current data of the application's [React][REACT] components and to
build a RDF representation based on the values of the components, the Javascript
[Redux][REDUX] project was used for managing the current state of the Sinopia editor
application running in the client web browser of the user. The Redux state in Sinopia
is a Javascript object that includes a number of top-level properties that store different
aspects of the application. For example, loading the **resourceTemplate:bf2:Identifiers:Barcode**
resource template, creates an **editor** property that reflects general state of the application
like errors, validations, what fields have been expanded, what modals are displayed, and 
a checksum for alerting the user if data has changed but not saved back to the Sinopia server.

<pre class="prettyprint lang-js" style="font-size: 1.25em;">
   editor: {
      displayValidations: false,
      errors: [],
      rdfPreview: {
        show: false
      },
      resourceURIMessage: {
        show: false
      },
      groupChoice: {
        show: false
      },
      expanded: {
        resource: {
          'resourceTemplate:bf2:Identifiers:Barcode': {
            'http://www.w3.org/1999/02/22-rdf-syntax-ns#value': {
              expanded: true
            }
          }
        }
      },
      resourceValidationErrors: {},
      lastSaveChecksum: '54527c024d0021784f666c2794856938'
    }
</pre>

Each of component in Sinopia has a prop `reduxPath` that is an array made-up of URIs, 
resource template IDs, and random IDs, that is used to locate the values of the 
component in within a hierarchy representing the entire state of the application. 

Continuing the example above, the barcode resource template is loaded into a property panel 
with the following *reduxPath*:
`['resource', 'resourceTemplate:bf2:Identifiers:Barcode', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value']`
and the data is stored in in an `items` object along with a language code for literals. If the user
adds a value for the **bf:enumerationAndChronology** property, then an `items` object will be added to the
corresponding section in the Redux state. 

<pre class="prettyprint lang-js" style="font-size: 1.25em;">
    resource: {
      'resourceTemplate:bf2:Identifiers:Barcode': {
        'http://www.w3.org/1999/02/22-rdf-syntax-ns#value': {
          items: {
            LuG2ym_Td: {
              content: '12345',
              lang: 'en'
            }
          }
        },
        'http://id.loc.gov/ontologies/bibframe/enumerationAndChronology': {}
      }
    }
</pre>

Sinopia's [Redux][REDUX] state also caches copies of the resource templates that are active in the editor that 
is used for other functions in the editor like validation and RDF generation and is illustrated below: 

<pre class="prettyprint lang-js" style="font-size: 1.25em;">
 entities: {
      resourceTemplates: {
        'resourceTemplate:bf2:Identifiers:Barcode': {
          id: 'resourceTemplate:bf2:Identifiers:Barcode',
          resourceURI: 'http://id.loc.gov/ontologies/bibframe/Barcode',
          resourceLabel: 'Barcode',
          propertyTemplates: [
            {
              mandatory: 'true',
              repeatable: 'false',
              type: 'literal',
              resourceTemplates: [],
              valueConstraint: {
                valueTemplateRefs: [],
                useValuesFrom: [],
                valueDataType: {},
                defaults: [
                  {
                    defaultLiteral: '12345'
                  }
                ]
              },
              propertyURI: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#value',
              propertyLabel: 'Barcode',
              editable: 'true'
            },
            {
              mandatory: 'false',
              repeatable: 'true',
              type: 'literal',
              resourceTemplates: [],
              valueConstraint: {
                valueTemplateRefs: [],
                useValuesFrom: [],
                valueDataType: {}
              },
              propertyURI: 'http://id.loc.gov/ontologies/bibframe/enumerationAndChronology',
              propertyLabel: 'Enumeration and chronology',
              editable: 'true'
            }
          ]
        }
      }
  .
  .
  .
}
</pre> 

Finally, we use the Redux state to store user credentials and session information using the AWS Cognito service and built with
the Amazon [Amplify](https://aws.amazon.com/amplify/) SDK (software development kit). 

[REACT]: https://reactjs.org/
[REDUX]: https://redux.js.org/
