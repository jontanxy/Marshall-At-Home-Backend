const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "This is an example route🃏",
  });
});

module.exports = router;