const router = require("express").Router();
const gradesRoutes = require("./grades");
// Grade routes
router.use("/grades", gradesRoutes);

module.exports = router;
