const { verifyAccessToken } = require("../utils/jwt");

const protect = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header)
      return res.status(401).json({ message: "No token" });

    const token = header.split(" ")[1];

    const decoded = verifyAccessToken(token);

    req.user = decoded;

    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = protect;