var firstInput = document.getElementById("firstInput");
var secontInput = document.getElementById("secondInput");
var Answer = document.getElementById("Answer");
var theForm = document.getElementById("theForm");

theForm.addEventListener("submit", function(event){
    
    if (!firstInput.value || !secontInput.value){
        alert("please enter a value")
    } else {
        
        var x = parseFloat(firstInput.value);
        var y = parseFloat(secontInput.value);
        
         var result = x / y;
        var percent = result * 100;
        
      Answer.innerHTML = "Answer: " + percent + "%";
      event.preventDefault();
   
    
    
    }
    
  
    
})