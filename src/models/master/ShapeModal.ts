import mongoose from "mongoose";

const shapeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    advisoryShape: { type: String, required: false },
    group: { type: String, required: true },
    order: { type: Number, required: true },
    status: { type: String, enum: ["Active", "inActive"], required: true }
}, { timestamps: true, }
);

export default mongoose.models.Shape || mongoose.model("Shape", shapeSchema);