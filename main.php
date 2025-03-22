<?php
function fonction($nom) {
    printf("Bienvenue %s dans le projet GitHub!\n", $nom);
}

if (__FILE__ == realpath($_SERVER["SCRIPT_FILENAME"])) {
    fonction("equipe");
}
?>
