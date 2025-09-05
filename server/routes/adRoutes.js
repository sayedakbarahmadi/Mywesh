// server/routes/adRoutes.js
const express = require("express");
const router = express.Router();

// مدل آگهی
const Ad = require("../models/Ad");

// 📌 گرفتن همه آگهی‌ها
router.get("/", async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 گرفتن یک آگهی بر اساس ID
router.get("/:id", async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: "آگهی پیدا نشد" });
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 ساختن آگهی جدید
router.post("/", async (req, res) => {
  const ad = new Ad({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    image: req.body.image,
    category: req.body.category,
  });

  try {
    const newAd = await ad.save();
    res.status(201).json(newAd);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
