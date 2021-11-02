// 404 handler
const pathNotFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error handler
const errorHandler = (error, req, res) => {
  // Checks if statusCode is still 200
  // If statusCode === 200, means some shit route made an error
  const statusCode = res.sendStatus === 200 ? 500 : res.statusCode;
  res.send(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "💩" : error.stack,
  });
};

module.exports = {
  pathNotFound,
  errorHandler,
};
