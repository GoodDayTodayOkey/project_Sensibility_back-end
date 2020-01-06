import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { schema } from '../schema';
import { connect, connection } from 'mongoose';

connect('mongodb://localhost:27017/sensibility', { useNewUrlParser: true })
connection.on(`error`, err => console.log(`Connection error: ${err}`));
connection.on(`open`, () => console.log(`Connection to DB!`));

const app = express();
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Example app listening on port 3000!');
  }
});
