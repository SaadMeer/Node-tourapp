const express = require("express");
const tourController = require('../controllers/tourController') 

const router = express.Router();

//param middleware for certain id or for some certain URL like here /:id
//this checkid call here will check the id of all the routes 
router.param('id', tourController.checkID);
//param middleware for certain id or for some certain URL like here /:id

router.route("/").get(tourController.getAllTours).post(tourController.checkBody, tourController.createTour);
router.route("/:id").get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour);

module.exports = router;
