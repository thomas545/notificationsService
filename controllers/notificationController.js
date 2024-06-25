const { notificationRepository } = require("../repositories/notificationRepo");

const sendNotification = async (req, res) => {
  const { userId, title, message, type } = req.body;
  const repo = new notificationRepository();
  const obj = await repo.create({
    userId: userId,
    title: title,
    message: message,
    type: type,
  });
  return res.status(200).json({ success: true, data: obj });
};

const getAllNotification = async (req, res) => {
  const repo = new notificationRepository();
  const objList = await repo.getAll();
  return res.status(200).json({ success: true, data: objList });
};

const markAsReadNotification = async (req, res) => {
  const { notificationIds } = req.body;
  const repo = new notificationRepository();
  const updatedObjs = await repo.updateByIds(notificationIds, { isRead: true });
  return res
    .status(200)
    .json({ success: true, message: "Notifications marked as read" });
};

module.exports = {
  sendNotification,
  getAllNotification,
  markAsReadNotification,
};
