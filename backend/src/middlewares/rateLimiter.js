import rateLimit from "../configs/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const key = req.ip;

    const { success } = await rateLimit.limit(key);

    if (!success) {
      return res.status(429).json({
        success: false,
        message: "Too many requests, please try again later",
      });
    }

    next();
  } catch (error) {
    console.error("Error in RateLimiter middleware ", error);
    next(error);
  }
};

export default rateLimiter;
