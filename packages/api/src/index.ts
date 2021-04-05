import express from 'express';
import cors from 'cors';

import routes from './routes';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use('/hello', routes.hello);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
