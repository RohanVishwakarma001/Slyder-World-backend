const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler()).catch((error) => next(error));
  };
};
export { asyncHandler };
