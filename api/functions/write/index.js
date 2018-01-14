console.log('starting guestbook write function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

exports.handle = function(e, ctx, cb) {
  let params = {
    item: {
      date: Date.now(),
      message: "Hard-coded, yo"
    },
    TableName: 'guestbook'
  };

  docClient.put(params, function(err, data){
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  })
};