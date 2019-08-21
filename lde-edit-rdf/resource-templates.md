## Profiles and Resource Templates
Sinopia generates HTML forms for creating and editing linked data based on
extending of the Library of Congresses Profiles used in the [BIBFRAME Editor][BFE]
and [Profile Editor][PE] projects. Profiles, as implemented in the
BIBFRAME Editor, are JSON files that contain one or more resource templates.

### Resource Templates
Each resource template includes an identifier, information on who created the
resource template, when it was created, a description, a URI used to create a triple
of the RDF type, and a list of property templates.

```javascript
"resourceTemplates": [
      {
        "propertyTemplates": [
          {
            "mandatory": "false",
            "repeatable": "true",
            "type": "literal",
            "propertyURI": "http://id.loc.gov/ontologies/bflc/catalogerId",
            "propertyLabel": "Your cataloger ID (Windows ID)",
            "resourceTemplates": [],
            "valueConstraint": {
              "valueTemplateRefs": [],
              "useValuesFrom": [],
              "defaults": []
            }
          }
        ]
    }
}
```

[BFE]: http://bibframe.org/bfe/index.html
[PE]: http://bibframe.org/profile-edit/#/profile/list
