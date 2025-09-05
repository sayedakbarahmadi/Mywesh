const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// 📌 روت‌ها
const adRoutes = require("./routes/adRoutes");
app.use("/api/ads", adRoutes);

// 📌 اتصال به دیتابیس
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => console.log("🚀 Server running on port 5001"));
  })
  .catch((err) => console.error("❌ DB connection error:", err));
