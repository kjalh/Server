import express from "express"
import { isAuth } from "../middleware/auth.mjs"
import * as postController from "../controller/posts.mjs"

const router = express.Router()

// 전체 POST 가져오기
// http://127.0.0.1:8080/post (GET)
// http://127.0.0.1:8080/post?userid=apple  <- 해당 userid의 글만 가져옴
router.get("/", isAuth, postController.getPosts)

// 글번호에 대한 POST 가져오기
// http://127.0.0.1:8080/post (GET)
// http://127.0.0.1:8080/post/글번호(id)
// 만들어보기
router.get("/:id", isAuth, postController.getPost)

// POST 쓰기
// http://127.0.0.1:8080/post
router.post("/", isAuth, postController.createPost)

// POST 수정하기
// http://127.0.0.1:8080/post/:id  (PUT)
router.put("/:id", isAuth, postController.updatePost)



// POST 삭제하기
// http://127.0.0.1:8080/post (DELLETE)
// http://127.0.0.1:8080/post/글번호
// router.delete("/:id", isAuth, postController.getPostDel) // 내가 함

// http://127.0.0.1:8080/post/:id   (DELETE)
router.delete("/:id", isAuth, postController.deletePost)



export default router