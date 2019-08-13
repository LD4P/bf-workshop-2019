### Amazon Web Services
## Cognito
To handle authentication and authorization for create, update, and delete
operations on the Linked Data RDF and JSON resource templates in Sinopia, we
are using the AWS [Cognito][COGNITO] secure user sign-up and access control
service. ![AWS Cognito](cognito.png)


After a user successfully signs-up via the [Amplify](https://aws-amplify.github.io/)
SDK, a [JSON Web Token](https://jwt.io/).

[COGNITO]: https://aws.amazon.com/cognito/
