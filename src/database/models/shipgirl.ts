import { model, models, Schema } from "mongoose";

const shipgirlSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    faction: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    }
})

const Shipgirl = models.Shipgirl || model('Shipgirl', shipgirlSchema);

export default Shipgirl;
