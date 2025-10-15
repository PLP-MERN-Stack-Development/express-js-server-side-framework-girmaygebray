import { v4 as uuidv4 } from "uuid";
import { NotFoundError } from "../utils/errors.js";

// In-memory product storage
let products = [];

// GET all products (with filtering & pagination)
export const getAllProducts = (req, res) => {
  let { category, page = 1, limit = 5 } = req.query;
  let filtered = [...products];

  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + Number(limit));

  res.json({
    total: filtered.length,
    page: Number(page),
    limit: Number(limit),
    data: paginated,
  });
};

// GET product by ID
export const getProductById = (req, res, next) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return next(new NotFoundError("Product not found"));
  res.json(product);
};

// POST new product
export const createProduct = (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

// PUT update product
export const updateProduct = (req, res, next) => {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError("Product not found"));

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

// DELETE product
export const deleteProduct = (req, res, next) => {
  const index = products.findIndex((p) => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError("Product not found"));

  products.splice(index, 1);
  res.json({ message: "Product deleted successfully" });
};

// SEARCH by name
export const searchProducts = (req, res) => {
  const term = req.params.name.toLowerCase();
  const results = products.filter((p) => p.name.toLowerCase().includes(term));
  res.json(results);
};

// STATS: count by category
export const getProductStats = (req, res) => {
  const stats = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  res.json(stats);
};
