undefined;

// Middleware for requiring authentication and getting user
const requireAuth = (fn) => async (event, context, callback) => {
  // Respond with error if no authorization header
  if (!event.headers.authorization) {
    return callback(null, {
      statusCode: 401,
      body: JSON.stringify({
        status: "error",
        message: "You must be signed in to call this endpoint",
      }),
    });
  }

  // Get access token from authorization header ("Bearer: xxxxxxx")
  const accessToken = event.headers.authorization.split(" ")[1];
};

module.exports = requireAuth;
