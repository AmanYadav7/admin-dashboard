import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema (
    {
        userId: String,
        cost: String,
        products: {
            type: [mongoose.Types.ObjectId],
            of: Number
        }
    },
    { timestamps: true }
);

const Transaction = mongoose.model("Transaction", ProductSchema);
export default Transaction;