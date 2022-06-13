<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("mysql", "db_user", "db_user_pass", "app_db");

/* get the name of the current default database */
$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database is %s.\n", $row[0]);

$result2 = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database is %s.\n", $row[0]);

?>