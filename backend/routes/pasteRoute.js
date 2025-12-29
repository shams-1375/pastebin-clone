const express = require("express");
const router = express.Router();
const Paste = require("../models/Paste");

// CREATE PASTE
router.post("/", async (req, res) => {
  try {
    const { content, expireMinutes, maxViews } = req.body;

    let expiresAt = null;
    if (expireMinutes) {
      expiresAt = new Date(Date.now() + expireMinutes * 60000);
    }

    const paste = await Paste.create({
      content,
      expiresAt,
      maxViews
    });

    res.json({ id: paste._id });
  } catch (err) {
    res.status(500).json({ error: "Failed to create paste" });
  }
});

// GET PASTE
router.get("/:id", async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id);

    if (!paste) return res.status(404).json({ error: "Not found" });

    // Expiry check
    if (paste.expiresAt && paste.expiresAt < new Date()) {
      return res.status(404).json({ error: "Paste expired" });
    }

    // View limit check
    if (paste.maxViews && paste.views >= paste.maxViews) {
      return res.status(404).json({ error: "View limit exceeded" });
    }

    paste.views += 1;
    await paste.save();

    res.json({ content: paste.content });
  } catch (err) {
    res.status(404).json({ error: "Error fetching paste" });
  }
});


module.exports = router;
