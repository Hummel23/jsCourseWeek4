const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)
mongoose.Promise = global.Promise

// mongoose.set('debug', true)

mongoose.connect('mongodb://localhost/webApp', {
    useMongoClient:true
})

// mongoose.connection.on('open', function() {
//     mongoose.connection.db.admin().serverStatus(function(error, info) {
//       console.log(info.version);
//     });
//   });