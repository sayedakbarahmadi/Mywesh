const Ad = require("../models/Ad");

// ایجاد آگهی جدید
exports.createAd = async (req, res) => {
  try {
    const ad = new Ad(req.body);
    await ad.save();
    res.status(201).json(ad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// دریافت همه آگهی‌ها
exports.getAds = async (req, res) => {
  try {
    const ads = await Ad.find().sort({ createdAt: -1 });
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// دریافت آگهی بر اساس ID
exports.getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: "آگهی پیدا نشد" });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// حذف آگهی
exports.deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndDelete(req.params.id);
    if (!ad) return res.status(404).json({ message: "آگهی پیدا نشد" });
    res.json({ message: "آگهی حذف شد" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
