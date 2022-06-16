import mongoose from 'mongoose';
const { Schema } = mongoose;

const movieSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:  {
        type:String,
        required: [true, 'Movie Title is Required']
    }, 
    type:  {
        type:String,
        required: [true, 'Movie Type is Required']
    }, 
    titleimg:  {
        type:String,
        required: [true, 'Movie Title Img URL is Required']
    }, 
    subtitle:  {
        type:String,
        required: [true, 'Movie Subtitle is Required']
    }, 
    description:  {
        type:String,
        required: [true, 'Movie Description is Required']
    }, 
    backgroundimg:  {
        type:String,
        required: [true, 'Movie Background Img URL is Required']
    }, 
    cardimg:  {
        type:String,
        required: [true, 'Movie Card Img URL is Required']
    }, 
});

const movies = mongoose.model('Movielist', movieSchema);
export default movies;