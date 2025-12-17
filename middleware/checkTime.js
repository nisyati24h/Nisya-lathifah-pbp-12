module.exports = (req, res, next) => {
  const hour = new Date().getHours();

  if (hour < 8 || hour >= 18) {
    return res.status(403).json({
      status: "failed",
      message: "API hanya bisa diakses pukul 08.00 - 18.00"
    });
  }

  next();
};
