import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGODB } from './config.js';

import postRoutes from './routes/posts.js';

const PORT = 5000 || process.env.PORT;
const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message)
    });

mongoose.set('useFindAndModify', false);