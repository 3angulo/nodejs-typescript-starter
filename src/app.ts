import * as express from 'express';

const app = express();

const settings = {
    port: 3000
};

app.get('/', (req: any, res: any) => {
    res.send('Hello world');
});

app.listen(settings.port, () => {
    console.log(`app listening on port ${settings.port}...`);
});