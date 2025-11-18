const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected"))
  .catch((err) => console.log("❌ Database Error:", err));

// Import Model
const UserData = require("./models/UserData");

// CREATE (POST) — Add New User + Send Email
app.post("/api/users", async (req, res) => {
  const { name, last_name, email, phone, message } = req.body;

  try {
    // 1️⃣ Save to DB First
    const newUser = await UserData.create({
      name,
      last_name,
      email,
      phone,
      message,
    });

    // 2️⃣ Setup SMTP Transporter (Your company email)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === "true", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    // 3️⃣ Email Template
   const mailOptions = {
  from: `"Paylinkly Contact Form" <${process.env.EMAIL_USER}>`,
  to: "zaurmurtaza63@gmail.com", // <-- your Gmail inbox
  subject: "⚡ New Form Submission Received",
  html: `
    <h2>New Contact Form Submission</h2>
    <p><b>First Name:</b> ${name}</p>
    <p><b>Last Name:</b> ${last_name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
  `,
};


    // 4️⃣ Send Email — But don't fail if email sending fails
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("❌ Email Error:", err.message);
        return res.status(201).json({
          success: true,
          emailSent: false,
          message: "Form saved successfully, but email sending failed.",
          data: newUser,
        });
      }

      console.log("📩 Email Sent:", info.response);
      return res.status(201).json({
        success: true,
        emailSent: true,
        message: "Form saved & email sent successfully!",
        data: newUser,
      });
    });

  } catch (error) {
    console.error("❌ Submission Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

// READ (GET) — Fetch All Users
app.get("/api/users", async (req, res) => {
  try {
    const users = await UserData.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// DELETE — Remove User by ID
app.delete("/api/users/:id", async (req, res) => {
  try {
    await UserData.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "API is live 🚀" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
