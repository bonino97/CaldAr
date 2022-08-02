const jwt = require("jsonwebtoken");

exports.createToken = async (user) => {
  try {
    const expiresIn = "24H";
    const { id, email, firstName, lastName } = user;
    const token = jwt.sign(
      { id, email, firstName, lastName },
      process.env.SECRET_JWT,
      { expiresIn, algorithm: "HS256" }
    );
    return token;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

exports.getAuthenticatedUser = async (token) => {
  const user = jwt.verify(token, process.env.SECRET_JWT);
  if (!user) throw new Error("Invalid token.");
  return user;
};
