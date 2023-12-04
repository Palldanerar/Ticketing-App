import mongoose, { Schema } from "mongoose";

// @ts-ignore
mongoose.connect(process.env.DB_URL)
mongoose.Promise = global.Promise

const ticketSchema = new Schema({
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean
},{
    timestamps: true,
})

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)

export default Ticket