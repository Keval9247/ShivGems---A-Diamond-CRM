import mongoose from "mongoose";

const mixCharniSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    order: { type: Number, required: true },
    status: { type: String, enum: ["Active", "inActive"], required: true }
}, { timestamps: true, }
);

export default mongoose.models.MixCharni || mongoose.model("MixCharni", mixCharniSchema);