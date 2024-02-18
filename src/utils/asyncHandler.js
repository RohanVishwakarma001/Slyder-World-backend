const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler()).catch((error) => next(error));
  };
};

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 404).json({
//       success: false,
//       message: error.message,
//     });
//     console.log("Connection fail to connect with database", error);
//   }
// };

export { asyncHandler };
