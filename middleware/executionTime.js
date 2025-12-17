module.exports = (req, res, next) => {
  const start = Date.now(); // waktu mulai

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[EXECUTION TIME] ${req.method} ${req.url} - ${duration} ms`);
  });

  next();
};
