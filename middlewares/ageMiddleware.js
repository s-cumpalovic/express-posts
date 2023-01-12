const ageMiddleware = (req, res, next) => {
  const age = req.query.age;
  if (!age || age < 18) {
    return res
      .status(401)
      .json({ message: "Unauthorized, age parameter is missing or under 18" });
  }
  next();
};

module.exports = ageMiddleware;
