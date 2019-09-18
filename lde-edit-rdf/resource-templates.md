# Profiles and Resource Templates
Sinopia generates HTML forms for creating and editing linked data that
extends the Library of Congress Profiles used in the [BIBFRAME Editor][BFE]
and [Profile Editor][PE] projects. Profiles, as implemented in the
BIBFRAME Editor, are JSON files that contain one or more resource templates.

Profiles also contain metadata that is not persisted within the [Trellis][TRELLIS]
but is still validated using [JSON Schema][JSCHEMA] when a Profile is uploaded in
Sinopia's linked data editor. Defining and testing these Profiles across the
different Sinopia cohort institutions and organizations is a community-lead
collaborative effort with the cohorts requirements and suggestions driving the development
priorities of the Sinopia Development team.

Here is a snippet of a Profile with metadata like **id**, **title**, **description**, and a 
Sinopia specific **schema** field:

<pre class="prettyprint lang-js" style="font-size: 1.1em;">
{
    "Profile": {
        "resourceTemplates": [
           .
           .
           .
        ],
        "id": "ld4p:profile:bf2:Item",
        "title": "LD4P BIBFRAME 2.0 Item",
        "description": "Item for all formats (testing), based on LC profile as of Aug-07-2019",
        "date": "2019-08-19",
        "author": "LD4P",
        "schema": "https://ld4p.github.io/sinopia/schemas/0.2.0/profile.json"
}

</pre>

## Resource Templates
Each Profile contains one or more resource templates with the resource template including 
an identifier, information on who created the resource template, when it was created, a 
description, a URI used to create a triple for a RDF type predicate, the 
[JSON schema](https://json-schema.org/) to use for validating, and a list of property templates.

<pre class="prettyprint lang-js" style="font-size: 1.1em;">
{
  "propertyTemplates": [
   .
   .
   .
  ],
  "id": "ld4p:RT:bf2:Item:Use",
  "resourceLabel": "Use or Reproduction Policy",
  "resourceURI": "http://id.loc.gov/ontologies/bibframe/UsePolicy",
  "author": "LD4P",
  "date": "2019-06-11",
  "schema": "https://ld4p.github.io/sinopia/schemas/0.2.0/resource-template.json"
}
</pre>

## Property templates
Each resource template must have at least one property template. A property template contains 
fields that determine if the property in the UI is **mandatory** or **repeatable**, with the 
**propertyURI** field used to determine the predicate for one or more triples. The property 
template can have default literal or URI values as well. The property template
also contains a **type** property for determining what eventual [React][REACT] component uses to
construct the editor UI. 

### Literal Type Property
The most basic type of component is the Literal, that allows the cataloger to add a literal value 
in the object position for the RDF triple. The subject is either a URI or a blank node and is 
determined by the context in which the resource template is used. 

Example **Literal** type property template:

<pre class="prettyprint lang-js" style="font-size: 1.25em;">
    {
      "propertyTemplates": [
        {
          "mandatory": "false",
          "repeatable": "true",
          "type": "literal",
          "propertyURI": "http://id.loc.gov/ontologies/bflc/catalogerId",
          "propertyLabel": "Your cataloger ID",
          "resourceTemplates": [],
          "valueConstraint": {
            "valueTemplateRefs": [],
            "useValuesFrom": [],
            "defaults": []
          }
        }
      ]
  }
</pre>

### Lookup Type Property
Sinopia has a three different types of lookup components depending on the source for the lookup. 

#### Library of Congress Lookup
<pre class="prettyprint lang-js" style="font-size: 1.25em;">
{
    "mandatory": "false",
    "repeatable": "true",
    "type": "lookup",
    "valueConstraint": {
        "useValuesFrom": [
            "http://id.loc.gov/vocabulary/mstatus"
        ],
        "valueDataType": {
            "dataTypeURI": "http://id.loc.gov/ontologies/bibframe/Status"
        }
    },
    "propertyURI": "http://id.loc.gov/ontologies/bibframe/status",
    "propertyLabel": "Incorrect, Invalid or Canceled?"
}
</pre>

#### Questioning Authority Lookup
[Questioning Authority](https://lookup.ld4l.org/) is a service from Cornell University and
the University of Iowa LIS program that provides an API service that Sinopia queries and
either JSON or RDF is returned payload. QA caches all of the RDF from ShareVDE along with
other sources like Discogs and some [id.loc.gov](http://id.loc.gov) linked data service 
like LCSH. 

<pre class="prettyprint lang-js" style="font-size: 1.25em;">
{
  "propertyLabel": "Related Discogs Entity",
  "propertyURI": "http://exampleontology.com/relatedDiscogs",
  "mandatory": "true",
  "repeatable": "true",
  "type": "lookup",
  "subtype": "context",
  "resourceTemplates": [],
  "valueConstraint": {
    "valueTemplateRefs": [],
    "useValuesFrom": [
      "urn:discogs"
    ],
    "valueDataType": {
      "dataTypeURI": "http://id.loc.gov/ontologies/bibframe/Work"
    },
    "defaults": []
  },
  "remark": "http://id.loc.gov/authorities/names.html"
}
</pre>

### Resource Type Property
The last property template type is the **resource** type that allows resource templates
to be embedded within another resource template.

<pre class="prettyprint lang-js" style="font-size: 1.25em;">
{
    "mandatory": "false",
    "repeatable": "true",
    "type": "resource",
    "valueConstraint": {
        "valueTemplateRefs": [
            "lc:RT:bf2:Identifiers:Barcode"
        ]
    },
    "propertyURI": "http://id.loc.gov/ontologies/bibframe/Barcode",
    "propertyLabel": "Barcode"
}
</pre>

[BFE]: http://bibframe.org/bfe/index.html
[JSCHEMA]: https://json-schema.org/
[PE]: http://bibframe.org/profile-edit/#/profile/list
[TRELLIS]: https://www.trellisldp.org/
