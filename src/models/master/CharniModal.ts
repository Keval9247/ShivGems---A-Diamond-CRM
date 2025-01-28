import mongoose from "mongoose";

const charniSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    from: { type: Number, required: true },
    to: { type: Number, required: true },
    order: { type: Number, required: true },
    status: { type: String, enum: ["Active", "inActive"], required: true }
}, { timestamps: true, }
);

export default mongoose.models.Charni || mongoose.model("Charni", charniSchema);