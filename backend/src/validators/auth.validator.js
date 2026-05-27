const { z } = require("zod");

const authSchema = z.object({
  name: z.string().min(2),

  email: z.string().email(),
  
  password: z.string().min(6),
});

module.exports = { authSchema };