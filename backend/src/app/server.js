import http from 'http';
import app from './app';

import 'dotenv/config';

const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server running to port: ${port}`));