// import jwt from "jsonwebtoken";

// //Middleware function to decode jwt token to get clerkid
// const authUser = async (req, res, next) => {
//   try {
//     const { token } = req.headers;
//     if (!token) {
//       return res.json({
//         success: false,
//         message: "Not Authorized Login Again",
//       });
//     }
//     const token_decode = jwt.decode(token);
//     req.body.clerkId = token_decode.clerkId;
//     next();
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default authUser;
import jwt from "jsonwebtoken";

// Middleware function to decode JWT token to get clerkId
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again.",
      });
    }

    const token_decode = jwt.decode(token);
    if (!token_decode || !token_decode.clerkId) {
      return res.json({
        success: false,
        message: "Invalid Token",
      });
    }

    req.body = req.body || {}; // ✅ ensure body is not undefined
    req.body.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
