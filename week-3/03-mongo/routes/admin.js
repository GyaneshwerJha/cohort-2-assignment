const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();

// TODO: Use try catch
// Admin Routesa
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({
        message: "Admin created successfully"
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic\


    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink
    })
    res.json({
        message: "Course created successfully"
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {

      // Implement fetching all courses logic
      const allCourse = await Course.find().lean();
      
      // Send the response
      res.json({allCourse});
  });
module.exports = router;