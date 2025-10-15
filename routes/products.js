import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductStats,
} from "../controllers/productsController.js";
import validateProduct from "../middleware/validateProduct.js";

const router = express.Router();

// RESTful routes
router.get("/", getAllProducts);
router.get("/stats", getProductStats);
router.get("/search/:name", searchProducts);
router.get("/:id", getProductById);
router.post("/", validateProduct, createProduct);
router.put("/:id", validateProduct, updateProduct);
router.delete("/:id", deleteProduct);

export default router;
