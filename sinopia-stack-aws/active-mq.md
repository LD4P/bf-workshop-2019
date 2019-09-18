
<img alt="AWS MQ" src="../img/aws-mq.png" style="float:left; margin-right: .5em">

## Amazon Web Services
# Apache ActiveMQ
Trellis publishes events like creating, updating, or deleting resource as they
occur to a AWS [Messenging Queue][MQ] that is monitored by a Docker container process
`sinopia-indexing` pipeline that then updates the [Elasticsearch][ES] search index.

[Apache ActiveMQ](https://activemq.apache.org/) is Java-based open-source message 
broker that connects multiple servers and clients. For Sinopia, Trellis publishes messages  
for create, update, or delete actions for RDF to the queue and our indexing pipeline
[Docker][DOCK] container responds to these messages by updating our [Elasticsearch][ES] index 
based on the action in [Trellis][TRELLIS]. 

[Top](#)


[DOCK]: https://docker.io
[ES]: https://aws.amazon.com/elasticsearch-service/
[MQ]: https://aws.amazon.com/amazon-mq/
[TRELLIS]: https://www.trellisldp.org/
