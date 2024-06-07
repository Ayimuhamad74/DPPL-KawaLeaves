<?php
require_once 'db.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KawaLeaves Cafe</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <header>
        <h1>KawaLeaves Cafe</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Tentang Kami</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#contact">Kontak Kami</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Home Section -->
        <section id="home">
            <h2>Welcome to KawaLeaves Cafe</h2>
            <p>Your cozy place to enjoy the finest coffee.</p>
        </section>

        <!-- About Us Section -->
        <section id="about">
            <h2>Tentang Kami</h2>
            <p>Selamat datang di KawaLeaves Cafe. Kami menyediakan kopi berkualitas tinggi dalam suasana yang nyaman dan santai.</p>
        </section>

        <!-- Menu Section -->
        <section id="menu">
            <h2>Menu Kami</h2>
            <?php
            $query = "SELECT * FROM menu";
            $result = mysqli_query($conn, $query);
            if (mysqli_num_rows($result) > 0) {
                echo '<div class="menu-items">';
                while($row = mysqli_fetch_assoc($result)) {
                    echo '<div class="menu-item">';
                    if ($row['image_url']) {
                        echo '<img src="' . $row['image_url'] . '" alt="' . $row['item'] . '">';
                    }
                    echo '<h3>' . $row['item'] . '</h3>';
                    echo '<p>' . $row['description'] . '</p>';
                    echo '<p>Price: Rp' . number_format($row['price'], 2) . '</p>';
                    echo '</div>';
                }
                echo '</div>';
            } else {
                echo '<p>No menu items available.</p>';
            }
            ?>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <h2>Kontak Kami</h2>
            <p>Alamat: Jalan Kopi No.1, Jakarta</p>
            <p>Telepon: 012-3456789</p>
            <p>Email: info@kawaleaves.com</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 KawaLeaves Cafe</p>
    </footer>
</body>
</html>
