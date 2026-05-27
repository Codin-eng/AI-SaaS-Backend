const jwt = require("jsonwebtoken");

const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, ACCESS_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: "7d" });
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, ACCESS_SECRET);
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, REFRESH_SECRET);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};