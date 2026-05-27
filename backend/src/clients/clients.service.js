const prisma = require("../db/index");

const create = (userId, data) => {
  return prisma.client.create({
    data: { ...data, userId },
  });
};

const getAll = async (userId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  return prisma.client.findMany({
    where: { userId },
    skip,
    take: limit,
    orderBy: { createdAt: "desc" },
  });
};

const update = (userId, id, data) => {
  return prisma.client.updateMany({
    where: { id: { equals: id,}, userId: userId },
    data,
  });
};

const remove = (userId, id) => {
  return prisma.client.deleteMany({
    where: { id, userId },
  });
};

module.exports = { create, getAll, update, remove };