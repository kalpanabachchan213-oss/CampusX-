<?php
session_start();

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    if ($password != $confirm_password) {
        $message = "Passwords do not match!";
    } else {
        $message = "Registration form submitted successfully!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CampusX - Register</title>
</head>

<body>

    <h1>CampusX ✅</h1>
    <h2>Create Student Account</h2>

    <?php
    if ($message != "") {
        echo "<p>$message</p>";
    }
    ?>

    <form method="POST" action="">

        <label>Full Name:</label><br>
        <input type="text" name="name" required>

        <br><br>

        <label>Email:</label><br>
        <input type="email" name="email" required>

        <br><br>

        <label>Password:</label><br>
        <input type="password" name="password" required>

        <br><br>

        <label>Confirm Password:</label><br>
        <input type="password" name="confirm_password" required>

        <br><br>

        <button type="submit">Register</button>

    </form>

    <p>
        Already have an account?
        <a href="login.php">Login here</a>
    </p>

</body>
</html>
