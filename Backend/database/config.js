const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.Db_Connection);

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar DB');
    }
};

module.exports = {
    dbConnection
}