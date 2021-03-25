// import mongoose from 'mongoose';
// import 'dotenv/config';

// mongoose.Promise = global.Promise;

// const URL = process.env.DATABASE_TEST;
// const config = {
//   uri: URL,
//   options: {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   }
// }

// mongoose.connection.on('open', () => {
//   console.log('Successfully connected to database test.');
// })

// mongoose.connection.on('error', () => {
//   throw new Error('Could not connect to database test.');
// })

// const databaseTest = { 
//   connect: () => mongoose.connect(config.uri, config.options) 
// } 

// export default databaseTest;