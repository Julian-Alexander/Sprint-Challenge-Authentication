<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
        -Middleware: code that adds functionality between the request and response of objects/events. Following a request in a web server, a middleware can be used to fire before an action is made.

        -Sessions: Is a way to manage a state over an HTTP connection in order to create an unique request to the server. To do this, the client's PC is used to store data that then  is applied to generate an unique request (cookies or tokens)

        -Bcrypt: It is used to hash a plaintext password by using math principles to generate a key.

        -JWT(Json Web Token): It is used to create token sessions by accepting a javascript object as a 'payload' and encriptyng it with a secret key/phrase which is then provided in the HTTP header for the server to decide which authorizations to give based on the data found in it.

2.  What does bcrypt do in order to prevent attacks?
        -It has the capability to hash multiple rounds in order to make the brute-force cracking near to impossible to achieve.

3.  What are the three parts of the JSON Web Token?
        -Header: It contains the token and encryption.
        -Payload: It contains the data decided to be included in the token.
        -Sugnature: It merges the header with the payload and sings them with the encryption algorithm.
 