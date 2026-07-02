import MongoDB from "mongodb"
import { config } from "../config.mjs"

let db

export async function connectDB() {
    return MongoDB.MongoClient.connect(config.db.host).then((client) => {
        db = client.db("Xdb")
    })
}

// user  컬렉션 객체
export function getUsers(){
    return db.collection("users")   // user가 있으면 그대로 반환 없으면 새로 만들어서 반환
}

export function getPosts(){
    return db.collection("posts")
}