# Trellis - Linked Data Platform
<img src="../img/trellis-ldp.png" alt="Trellis Logo" style="float: left" />

In Sinopia's early analysis, we determined that having a RDF triplestore was
not necessary for meeting the requirements of a create-update-read-delete (CRUD)
editor for RDF. Looking at the available options, we realized the 
[linked-data platform](https://www.w3.org/TR/ldp/) [Trellis][TRELLIS] was a 
good match to our requirements.

An open-source project started by Aaron Coburn, [Trellis][TRELLIS] offers multiple
storage backends, including a relational database, that stores entity or named graphs. Trellis
also provides a message queue that we could leverage for indexing these named graphs
into an AWS Elasticsearch.


[ES]: https://aws.amazon.com/elasticsearch-service/
[MQ]: https://aws.amazon.com/amazon-mq/
[TRELLIS]: https://www.trellisldp.org/
