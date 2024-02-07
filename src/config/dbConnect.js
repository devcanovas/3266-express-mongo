import mongoose from "mongoose";

export async function connectDatabase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.94hbpn5.mongodb.net/?retryWrites=true&w=majority");

    return mongoose.connection;
}

