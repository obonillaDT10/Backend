require('dotenv').config()
const envConfig = require('../env.config');
console.log(envConfig)


module.exports = {
  mongodb: {
    connectTo: (database) => `mongodb+srv://user1:${envConfig.DB_PASSWORD}@cluster0.akmtuzs.mongodb.net/${database}?retryWrites=true&w=majority`,
  }
}