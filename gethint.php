<?php
// get the q parameter from URL
$q = $_REQUEST["q"];
$resultado = $_POST['gestor'];
//$hint = "python ./test.py ".$q;
$hint = "./test.py ".$q;
//$gestor = exec($hint);
//echo $gestor;

$descriptorspec = array(
   0 => array("pipe", "r"),
   1 => array("pipe", "w"),
   2 => array("file", "error-output.txt", "a")
);

$process = proc_open($hint, $descriptorspec, $pipes);

$input = 10;
$exp = 3;
if (is_resource($process)) {
    print fgets($pipes[1]);
    fwrite($pipes[0], $input . "\n");

    print fgets($pipes[1]);
    fwrite($pipes[0], $exp . "\n");

    print fgets($pipes[1]);

    fclose($pipes[1]);
    fclose($pipes[0]);
    $return_value = proc_close($process);

    echo "command returned $resultado\n";
} else {
    echo "No resource availeble";
}
?>