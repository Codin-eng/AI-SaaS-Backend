const asyncHandler = require("../utils/async");
const { registerSchema, loginSchema } = require("../validators/auth.validator");
const service = require("../auth/auth.service");

exports.register = asyncHandler(async (req, res) => {
 registerSchema.parse(req.body);

  const user = await service.register(
    req.body.email,
    req.body.password
  );

  res.json({ success: true, user });
});

exports.login = asyncHandler(async (req, res) => {
  loginSchema.parse(req.body);

  const result = await service.login(
    req.body.email,
    req.body.password
  );

  res.json({ success: true, ...result });
});