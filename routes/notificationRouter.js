const express = require("express");
const router = express.Router();
const { sendNotification, getAllNotification, markAsReadNotification } = require("../controllers/notificationController");

/* All Routers */
router.get("/list/", getAllNotification);
router.post("/send/", sendNotification);
router.post("/markAsRead/", markAsReadNotification);

module.exports = router;
