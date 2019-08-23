![RDS PostgresSQL](../img/rds-postgresql.png).
### Amazon Web Services
## Relational Database Service (RDS)


Sinopia server's foundation is a variant of [Trellis][TRELLIS] Linked Data Platform that
uses a [PostgreSQL][POSTGRES] relational database to manage the Sinopia Editor's
RDF and JSON payloads instead of a RDF Triplestore.

The AWS RDS services offers the following advantages:

*  Significantly cheaper than AWS Triplestore [Neptune](https://aws.amazon.com/neptune/)
*  Automatic backups
*  Administrative overhead reduced

[POSTGRES]: https://www.postgresql.org/
[TRELLIS]: https://www.trellisldp.org/
