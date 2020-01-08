import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { schema } from '../schema';
import { connect, connection, Schema, model } from 'mongoose';

connect('mongodb://localhost/sensibility', { useUnifiedTopology: true, useNewUrlParser: true })
connection.on(`open`, () => console.log(`Connection to DB!`));

const app = express();
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(3000, () => { console.log('Server listening on port 3000!'); });
