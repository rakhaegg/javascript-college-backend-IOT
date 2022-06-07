
/* Replace <password> with your database password */

/* ------------------------------------------------------------------ */
// db.js

const mongoose = require('mongoose');
require('dotenv/config')


const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.DB_CONNECTION,
            {
                useNewUrlParser: true
            }
        );

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;