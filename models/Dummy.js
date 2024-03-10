import mongoose from "mongoose";

const DummySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
}, { timestamp: true })

export const DummyEmp = mongoose.model("DummyEmp", DummySchema)