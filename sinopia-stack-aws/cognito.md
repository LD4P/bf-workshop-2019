<img src ="../img/cognito.png" style="float: left; padding: 5px;"></img>

## Amazon Web Services
# Cognito

To handle authentication and authorization for create, update, and delete
operations on the Linked Data RDF and JSON resource templates in Sinopia, we
are using the AWS [Cognito][COGNITO] secure user sign-up and access control
service.

After a user successfully signs-up via the [Amplify](https://aws-amplify.github.io/)
SDK, a [JSON Web Token](https://jwt.io/) is generated that allows authorized
access to the Sinopia Linked Data Editor [React][REACT] components. The JWT is
also used for write and edit HTTP actions for both JSON and RDF payloads that
are managed in [Trellis](#trellis), Sinopia's Linked Data Platform.

[Top](#)

[COGNITO]: https://aws.amazon.com/cognito/
[REACT]: https://reactjs.org/
