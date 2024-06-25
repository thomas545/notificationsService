const { Schema, default: mongoose } = require("mongoose");
const getEnv = require("../core/environments");

const notificationSchema = new Schema({
  userId: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const notificationModel = mongoose.model("notification", notificationSchema);

module.exports.notificationModel = notificationModel;
