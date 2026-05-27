const { z } = require("zod");

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = { authSchema };