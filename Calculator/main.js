document.getElementById("equal").addEventListener("click" ,function(){
    var inputValue=document.getElementById("display").value;
    try{
        var result=eval(inputValue);
        if(!isNaN(result)){
          document.getElementById("display").value=result;
        }
        else{
               alert("invalid Input");
        }
    }
    catch(error){
        alert("calculation Is Not Possible")
    }
});