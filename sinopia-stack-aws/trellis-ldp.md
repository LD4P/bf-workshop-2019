## Trellis - Linked Data Platform
In Sinopia's early analysis, we determined that having a RDF triplestore was
not necessary for meeting the requirements of a create-update-read-delete (CRUD)
editor for RDF. ![Trellis LDP](../img/trellis-ldp.png)

### Amazon Web Services
#### Apache ActiveMQ
Trellis publishes events like creating, updating, or deleting resource as they
occur to a AWS [Messenging Queue][MQ] that is monitored by a process called
`sinopia-indexing` pipeline that then updates the Elasticsearch search index.
![AWS MQ](../img/aws-mq.png)

#### Elasticsearch Service
For the initial `1.0.0` release, a simple search index is indexed and searched
through the AWS hosted [Elasticsearch Service][ES].<br>
![AWS Elasticsearch Service](../img/elasticsearch.png)

[ES]: https://aws.amazon.com/elasticsearch-service/
[MQ]: https://aws.amazon.com/amazon-mq/
[TRELLIS]: https://www.trellisldp.org/
