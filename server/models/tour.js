import mongoose from "mongoose";

const { Schema, model } = mongoose

let tourSchema = new Schema({
   title: {
      type: String,
      trim: true,
      minlength: [3, 'min length is 3'],
      maxlength: [20, 'max length is 20'],
      required: [true, 'title is required']
   },
   place: {
      type: String,
      required: true,
      validate: {
         validator: function (value){
            return validator.placevalidator(value)
         },
         message: 'The place is not valid'
      },
      required: [true, 'place is required']
   },
   date: {
      type: String,
      required: [true, 'date is required']
   },
   image: String,
   description: {
      type: String,
      required: [true, 'description is required'],
      minlength: [100, 'desc min length is 100']
   }
})
let Tour = model('user', tourSchema);
let p = { Tour, tourSchema }
export default p;