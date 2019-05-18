import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';
import { ChatRoutes, CreateNewUserRoute } from './modules/index';

const app = express();

/*
    Database
*/
dbConfig();

/* 
    Middlewares
*/
middlewaresConfig(app);

app.use('/api', [ChatRoutes]);
app.use('/api', [CreateNewUserRoute]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`App listen to port: ${PORT}`);
    }
});