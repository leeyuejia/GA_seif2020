//___________________
//Dependencies
//___________________
const mongoose          = require ( 'mongoose' );
const Schema            = mongoose.Schema;

//___________________
//Set up Schema
//___________________
const productSchema     = new Schema ({
  name        : {
      type    : String,
      required: [true, 'No one will buy it if it does not have a name']
  },
  description : String,
  img         : String,
  price       : {
          type: Number,
          min :[ 0, 'Price can\'t be less than 0. This ain\'t no charity!']
  },
  qty         : {
          type: Number,
          min : [0, 'Quantity can\'t be less than 0. No capatalist joyrides here!']
                  }
});

//___________________
//Set up Model
//___________________
const Product          = mongoose.model('Product', productSchema );

//___________________
////Module Exports - access Product in controllers/product.js
//___________________
module.exports       = Product;
