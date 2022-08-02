const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_JWT);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "No token.",
        errors: err,
      });
    }

    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "No token.",
      errors: err,
    });
  }
};
