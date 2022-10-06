const {model, Schema}  = require('mongoose');

const CoinSchema = new Schema({
  name: String,
  abbr:String,
  price:{
    type:Number,
    min:0
  }
},{
  versionKey:false,
})

module.exports=model('Coin',CoinSchema)