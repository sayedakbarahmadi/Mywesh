const express = require("express");
const router = express.Router();
const { getAllAds, getAdById, createAd, deleteAd } = require("../controllers/adController");

// 📌 همه آگهی‌ها
router.get("/", getAllAds);

// 📌 آگهی با id
router.get("/:id", getAdById);

// 📌 ساخت آگهی جدید
router.post("/", createAd);

// 📌 حذف آگهی
router.delete("/:id", deleteAd);

module.exports = router;
