export const successMessage = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorMessage = (res, statusCode, message) => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};
