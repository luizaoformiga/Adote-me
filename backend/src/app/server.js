import app from './app';
import 'dotenv/config';

//const port = process.env.PORT || 3000;
const port = 8997;
// http://localhost:8997
app.listen(port, () => console.log(`Server running to port: ${port}`));