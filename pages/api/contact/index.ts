import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !email.includes("@") ||
      !email ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid Input" });
    }
    const formData = { name, email, message };

    let client: MongoClient;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://ghosty02:${process.env.MONGO_URI}@cluster0.t7ovn.mongodb.net/blog?retryWrites=true&w=majority`
      );
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Error Connecting to db", error: err });
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(formData);

      return res
        .status(200)
        .json({ message: "Message added successfully", result });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong", error: err });
    }
  }
}

export default handler;
