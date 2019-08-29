
<img alt="AWS MQ" src="../img/aws-mq.png" style="float:left; margin-right: .5em">

## Amazon Web Services
# Apache ActiveMQ
Trellis publishes events like creating, updating, or deleting resource as they
occur to a AWS [Messenging Queue][MQ] that is monitored by a process called
`sinopia-indexing` pipeline that then updates the Elasticsearch search index.


```javascript
message = {
  payload: '2345'
}
```

[Top](#)

[ES]: https://aws.amazon.com/elasticsearch-service/
[MQ]: https://aws.amazon.com/amazon-mq/
[TRELLIS]: https://www.trellisldp.org/
