import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateCreated: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    role: { type: String, enum: ["admin", "user"], required: true, default: "user" },
})

export default mongoose.models.User || mongoose.model("User", userSchema);