// import express from 'express' ;
// import cors from 'cors';
// import 'dotenv/config';

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get('/' , (req,res)=>res.send('Server is running.'))
// const PORT = process.env.PORT || 4000;

// app.listen(PORT, ()=> console.log(` Server is running on port . ${PORT}`))


// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import { inngest, functions } from './INNGEST/index.js';
import { serve } from 'inngest/express'; // <-- You forgot to import this


dotenv.config();

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Server is running.'));
app.use('/api/inngest', serve({ client: inngest, functions }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
