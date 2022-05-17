<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $sum = $num1 + $num2;
        echo "The sum of $num1 and $num2 is $sum";
    ?>
</body>
</html>