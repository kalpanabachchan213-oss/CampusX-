<?php
session_start();

if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CampusX - Dashboard</title>
</head>

<body>

    <h1>CampusX ✅</h1>

    <h2>Welcome to Student Dashboard 🎓</h2>

    <p>
        Welcome, <?php echo $_SESSION['user']; ?>!
    </p>

    <hr>

    <h3>Student Panel</h3>

    <ul>
        <li>📚 Study Resources</li>
        <li>📅 Campus Events</li>
        <li>💻 Student Projects</li>
        <li>📢 Announcements</li>
    </ul>

    <br>

    <a href="logout.php">Logout</a>

</body>
</html>
