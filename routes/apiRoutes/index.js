const express = require("express");
const { route } = require("./candidateRoutes");
const router = express.Router();

router.use(require("./candidateRoutes"));
router.use(require("./partyRoutes"));
router.use(require("./voterRoutes"));
router.use(require("./voteRoutes"));
module.exports = router;
