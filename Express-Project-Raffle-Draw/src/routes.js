const router = require("express").Router();

// router.get("/t/:id");
// router.put("/t/:id");
// router.delete("/t/:id");

router.route("/t/:id").get().put().delete();

router.route("/u/:username").get().put().delete();

// router.get("/u/:username");
// router.put("/u/:username");
// router.delete("/u/:username");

router.post("/bulk");
router.get("/draw");

router.route("/").get().post();

// router.post("/");
// router.get("/");

module.exports = router;
