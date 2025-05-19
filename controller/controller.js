import { User } from "../db/model.js";

async function login(req, res) { // req এবং res প্যারামিটার যোগ করুন
  try {
    const { name, pass } = req.body;
    console.log(req.body)
    await User.create({ name, pass });

    console.log("data saved");
    res.status(201).json({ message: "User created successfully" }); // রেসপন্স পাঠান
  } catch (error) {
    console.log("data saving error", error); // এরর লগ করুন
    res.status(500).json({ message: "Error creating user", error: error.message }); // এরর রেসপন্স পাঠান
  }
}

export default login;
