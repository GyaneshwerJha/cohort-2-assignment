const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://gyaneshwer0001:gyaneshwer0001@cluster0.zpbmyjw.mongodb.net/course-selling?retryWrites=true&w=majority');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [String]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}