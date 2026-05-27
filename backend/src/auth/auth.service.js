const prisma = require("../db/index");
const bcrypt = require("bcrypt");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/jwt");

const register = async (email, password, name) => {
  const exists = await prisma.user.findUnique({
    where: { email },
  });

  if (exists) throw new Error("User exists");

  const hashed = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: { email, password: hashed },
  });
};

const login = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw new Error("Invalid credentials");

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  return {
    user: { id: user.id, email: user.email },
    accessToken,
    refreshToken,
  };
};

module.exports = { register, login };