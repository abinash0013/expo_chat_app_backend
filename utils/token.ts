import { UserProps } from "../types";
import jwt from "jsonwebtoken";

export const generateToken = (user: UserProps) => {
  const payload = {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    }
  }

  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
   })
}

// "30d" for 30 days
// "1m" for 1 month
// "1y" for 1 years
// "24" for 24 hours
// "60s" for 60 seconds