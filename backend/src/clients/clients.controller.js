const asyncHandler = require("../utils/async");
const service = require("../clients/clients.service");

exports.create = asyncHandler(async (req, res) => {
  const data = await service.create(req.user.userId, req.body);

  res.json(data);
});

exports.getAll = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;

  const  limit = Number(req.query.limit)|| 10;

  const data = await service.getAll(
    req.user.userId,
    Number(page),
    Number(limit)
  );

  res.json(data);
});

exports.update = asyncHandler(async (req, res) => {
  const data = await service.update(
    req.user.userId,
    req.params.id,
    req.body
  );

  res.json(data);
});

exports.remove = asyncHandler(async (req, res) => {
  await service.remove(req.user.userId, req.params.id);

  res.json({ message: "deleted" });
});