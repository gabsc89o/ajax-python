
/*function showHint(){
     //write_relay2();
     str = $('#testname').val();
     var param = {
     	'gestor' : str,
     	'gestor2' : str + "hola",	
     	//'gestor3' : exec("python ./test.py Mano lo 2>&1"),
     };

     $.ajax({
     	data: param,
     	url: "gethint.php?q="+str,
     	type: 'POST',
     	success: function(response){
     		$("#RelayRemoteControl2").html(response);
     	}
     });
}/*

/*function showHint() {
	str = $('#testname').val();
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("RelayRemoteControl2").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("RelayRemoteControl2").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "gethint.php?q="+str, true);
  //xhttp.open("GET", "script.py", true);
  xhttp.send();   
}*/
