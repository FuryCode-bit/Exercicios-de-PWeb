<?php

    echo 'Esta merda já morreu';

    $xml = file_get_contents('students.xml');

    $xml_parse = simplexml_load_string($xml);
    echo "<pre>"; print_r($xml_parse);echo "<pre>";
?>