# Profiles and Resource Templates
Sinopia generates HTML forms for creating and editing linked data based on
extending of the Library of Congresses Profiles used in the [BIBFRAME Editor][BFE]
and [Profile Editor][PE] projects. Profiles, as implemented in the
BIBFRAME Editor, are JSON files that contain one or more resource templates.

Profiles also contain metadata that is not persisted within the [Trellis][TRELLIS]
but is validated using [JSON Schema][JSCHEMA] when a Profile is uploaded in
Sinopia's linked data editor. Defining and testing these Profiles across the
different Sinopia cohort institutions and organizations is a community-lead
collaborative effort with their requirements and suggestions driving the development
priorities of the Sinopia Development team.

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
Each resource template includes an identifier, information on who created the
resource template, when it was created, a description, a URI used to create a triple
of the RDF type, the [JSON schema](https://json-schema.org/) to use for validating,
and a list of property templates.

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
Each resource template must have at least one property template.

### "mandatory", "repeatable", "propertyURI" Properties

### Literal Type Property

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
