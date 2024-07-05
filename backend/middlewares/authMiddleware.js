const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Extract the JWT token from the Authorization header
    const token =
      req.headers["authorization"] &&
      req.headers["authorization"].split(" ")[1];
    console.log("Token:", token);

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    // Verify the token and decode its payload
    const decodedToken = JWT.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decodedToken);

    req.user = {
      id: decodedToken.id,
    };
    console.log("User:", req.user);

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Unauthorized Access" });
  }
};
