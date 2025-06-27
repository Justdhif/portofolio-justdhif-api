const db = require("../database/db");

exports.getFeedbacks = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM feedbacks");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.createFeedback = async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    await db.query("INSERT INTO feedbacks (message) VALUES ($1)", [message]);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
