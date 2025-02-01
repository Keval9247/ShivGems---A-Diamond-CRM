import mongoose from "mongoose";

const cutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    order: { type: Number, required: true },
    status: { type: String, enum: ["Active", "inActive"], required: true, default: "Active" }
}, { timestamps: true, }
);

export default mongoose.models.Cut || mongoose.model("Cut", cutSchema);