const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// TODO: Use try catch
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.json({ message: 'User created successfully' })

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourse = await Course.find();
    res.json(allCourse);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });

    const cId = req.params.courseId;

    const course = await Course.findOne({ _id: cId });
    user.purchasedCourses.push(cId.toString());
    await user.save();

    if (course) {
        res.json({
            message: "Course purchased successfully"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });

    const purchasedCourses = user.purchasedCourses;
    res.json({ purchasedCourses });
});

module.exports = router;