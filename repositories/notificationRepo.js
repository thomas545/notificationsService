const { notificationModel } = require("../models/notificationModel");

class notificationRepository {
  async getAll(filters = {}) {
    return await notificationModel.find(filters);
  }
  async get(filters) {
    return await notificationModel.findOne(filters);
  }
  async getById(objId) {
    return await notificationModel.findById(objId);
  }
  async create(notificationData) {
    const obj = await notificationModel.create(notificationData).then(obj => {return obj});
    console.log("create notification ->> ", obj)

    return obj
  }
  async updateById(objId, updatedData) {
    return await notificationModel.updateOne(
      { _id: objId },
      { $set: updatedData }
    );
  }

  async updateByIds(objIds, updatedData) {
    return await notificationModel.updateMany(
      { _id: {"$in": objIds} },
      { $set: updatedData }
    );
  }
  async delete(objId) {
    return await notificationModel.deleteOne({ _id: objId });
  }
}

module.exports.notificationRepository = notificationRepository;
