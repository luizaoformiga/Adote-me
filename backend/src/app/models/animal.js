import Mongoose from 'mongoose';

const animalSchema = new Mongoose.Schema({
    title: {
      type: String,
      required: true,
   },
    description: {
        type: String,
        required: true
    }, 
    category: {
        type: String,
        required: true
    },
    cep: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
},   {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { virtuals: true, getters: true,
        transform(document, returns) {
            returns.id = returns._id
            delete returns._id
        }
    },
    toObject: { virtuals: true, getters: true },
    versionKey: false 
})

const AnimalModel = Mongoose.model('Animal', animalSchema);

export default AnimalModel;