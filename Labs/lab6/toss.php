<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        $my_array = array("01","02","03","04","05","06","07","08","09","10");
        foreach($my_array as $value){
            echo "Class". $value."<br>";
        }

        function coinToss(){
            $toss = rand(0,1);
            if($toss == 0){
                return "Heads";
            }else{
                return "Tails";
            }
        }

        echo coinToss();
    ?>
</body>
</html>