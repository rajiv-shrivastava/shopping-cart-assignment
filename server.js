const express = require("express");
const app = express();
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");
const port = process.env.PORT || 5000;
const products = require("./server/products/index.get.json");
const banners = require("./server/banners/index.get.json");
const categories = require("./server/categories/index.get.json");
const users = require("./server/users/users.json");
const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

app.use(cors({ credentials: true }));
app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send({ home: "welcome to home page for express" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body,users);

  console.log(users.find(req.body))

  if (username === "admin" && password === "admin") {
    return res.json({
      token: jsonwebtoken.sign({ user: "admin" }, JWT_SECRET),
    });
  }
  return res
    .status(401)
    .json({ message: "The username and password your provided are invalid" });
});

app.get("/products", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Not Authorized" });
  }
  // Bearer <token>>
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  try {
    // Verify the token is valid
    const { user } = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({
      products: products,
    });
  } catch (error) {
    return res.status(401).json({ error: "Not Authorized" });
  }
});

app.get("/banners", (req, res) => {
  res.send({ banners });
});

app.get("/categories", (req, res) => {
  res.send({ categories });
});
