const express = require("express");
const router = express.Router();
const {
  list,
  newest,
  recomended,
  detail,
  create,
  update,
  destroy,
} = require("../../controllers/api/moviesController");
// get traigo informacion
router.get("/api/movies", list);
router.get("/api/movies/new", newest);
router.get("/api/movies/recommended", recomended);
router.get("/api/movies/:id", detail);
//Rutas exigidas para la creación del CRUD
router.post("/api/movies", create); // post, envio informacion
router.put("/api/movies/:id", update); // enviando modificaciones
router.delete("/api/movies/:id", destroy); // eliminar

module.exports = router;
