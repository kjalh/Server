import jwt from "jsonwebtoken"

const AUTH_ERROR = { message: "인증에러" }

export const isAuth = async(req, res, next) => {
    const authHeader = req.get("Authorization")
    console.log(authHeader)
    next()
}