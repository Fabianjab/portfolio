<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["growable-input"];

    $to = "fabian-jablonka@web.de";
    $subject = "Neue Kontaktanfrage von $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Vielen Dank für Ihre Nachricht!";
    } else {
        echo "Beim Versenden der Nachricht ist ein Fehler aufgetreten.";
    }
}
?>