const mongoose = require('mongoose');

const dbConnection = async () => {

  try {
    
    mongoose.connect(process.env.DB_CNN,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('DB online');

  } catch (error) {
    console.log("error: ", error);
    throw new Error('Error a la hora de iniciar la BD ver logs');
  }

}

module.exports = {
  dbConnection
}