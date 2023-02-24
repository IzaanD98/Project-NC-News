const {
  fetchAllArticles,
  fetchArticleById,
  patchArticleById,
  postCommentByArticleId,
  fetchCommentsByArticleId,
  postArticle,
  getLimitedArticles,
} = require("../controllers/newsController");

const articlesRouter = require("express").Router();

articlesRouter.route("/").get(fetchAllArticles).post(postArticle);

articlesRouter
  .route("/:article_id")
  .get(fetchArticleById)
  .patch(patchArticleById);

articlesRouter
  .route("/:article_id/comments")
  .get(fetchCommentsByArticleId)
  .post(postCommentByArticleId);

module.exports = articlesRouter;
