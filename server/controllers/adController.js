const Ad = require("../models/Ad");

// 📌 گرفتن همه آگهی‌ها
const getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 گرفتن یک آگهی با ID
const getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: "آگهی پیدا نشد" });
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 ساخت آگهی جدید
const createAd = async (req, res) => {
  try {
    const ad = new Ad({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      city: req.body.city,
      images: req.body.images,
      user: req.body.user,
    });

    const newAd = await ad.save();
    res.status(201).json(newAd);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 📌 حذف آگهی
const deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndDelete(req.params.id);
    if (!ad) return res.status(404).json({ message: "آگهی پیدا نشد" });
    res.json({ message: "آگهی حذف شد" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllAds, getAdById, createAd, deleteAd };
