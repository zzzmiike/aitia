
        function MascaraTelefone(){

          var campo_tel = document.getElementById("ftelefone");
          var ftelefone = campo_tel.value;

          if (ftelefone.length == 1 ){
          ftelefone = "(" + ftelefone
            campo_tel.value = ftelefone;
            return true;
          }

          if (ftelefone.length == 3 ){
          ftelefone = ftelefone + ")"
            campo_tel.value = ftelefone;
            return true;
          }

          if (ftelefone.length == 9 ){
          ftelefone = ftelefone + "-"
            campo_tel.value = ftelefone;
            return true;
          }

}
          src="https://code.jquery.com/jquery-1.12.4.js"
          integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU="
          crossorigin="anonymous">


          function somente_numero(campo){
  var digits="0123456789"
  var campo_temp
  for (var i=0;i<campo.value.length; {
            campo_temp = campo.value.substring(i, i + 1)
    if (digits.indexOf(campo_temp)==-1){
            campo.value = campo.value.substring(0, i);
        break;
     }
  }
}

        function somente_letra(campo){
  var digits="QWERTYUIOPASDFGHJKLÇÃÉÀZXCVBNMqwertyuiopasdfghjklçãéàzxcvbnm "
  var campo_temp
  for (var j=0;j<campo.value.length; {
            campo_temp = campo.value.substring(j, j + 1)
    if (digitsiindexOf(campo_temp) ==-1){
            campo.value = campo.value.substring(0, j);
      break;
    }
  }
}


function somente_letraminnum(campo){
  var digits="qwertyuiopasdfghjklzxcvbnm0123456789@."
  var campo_temp
  for (var j=0;j<campo.value.length; {
            campo_temp = campo.value.substring(j, j + 1)
    if (digits.indexOf(campo_temp) ==-1){
            campo.value = campo.value.substring(0, j);
      break;
    }
  }

