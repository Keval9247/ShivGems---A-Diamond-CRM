import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    order: { type: Number, required: true },
    status: { type: String, enum: ["Active", "inActive"], required: true }
}, { timestamps: true, }
);

export default mongoose.models.Table || mongoose.model("Table", tableSchema);