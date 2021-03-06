const express = require('express');
const router = express.Router();
const container = require("./container")

router.get("/", container.getAllJobs)
router.post("/add-new", container.createNewJob)
router.get("/:id", container.deleteSpecficJob)
router.get("/findCompanyJob/:id", container.findSpecficCompanyJob)
router.get("/delete-all-job-of-specific-company/:id", container.deleteAllJobsofSpecificCompany)
// router.post("/updateCandidateArray/:id", container.updateCompanyJobProfile)

module.exports = router;
