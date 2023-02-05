try {

    let status = document.getElementById("currentStatus");
    let issuedQuantity = document.getElementById("issuedQuantity");
    let completedQuantity = document.getElementById("completedQuantity");
    let quantity = document.getElementById("quantity");
    let saveButton = document.getElementById("saveButton");
    saveButton.style.visibility = "hidden";

    check();
    status.addEventListener('input', function (evt) {
        check();
    });
    issuedQuantity.addEventListener('input', function (evt) {
        check();
    });
    completedQuantity.addEventListener('input', function (evt) {
        check();
    });
    quantity.addEventListener('input', function (evt) {
        check();
    });

    function check() {
          if(checkStatus() && checkQuantity()){
            saveButton.style.visibility = "visible"
          }
          else {
            saveButton.style.visibility = "hidden"
          }
  
      }

    function checkStatus(){
        if(isNaN(status.value)) {
            return false;
        }
        if(status.value == "") {
            return false;
        }
        if(status.value % 1 != 0) {
            return false;
        }
        if(parseInt(status.value) <= 0) {
            return false;
        }
        if(parseInt(status.value) < 40) {
            return false;
        }
        if(parseInt(status.value) >= 96) {
            return false;
        }
        
        return true;
    }

    function checkQuantity(){

        if(isNaN(issuedQuantity.value)) {
            return false;
        }
        if(issuedQuantity.value == "") {
            return false;
        }
        if(issuedQuantity.value % 1 != 0) {
            return false;
        }
        if(parseInt(issuedQuantity.value) <= 0) {
            return false;
        }       
        
        if(isNaN(completedQuantity.value)) {
            return false;
        }
        if(completedQuantity.value % 1 != 0) {
            return false;
        }
        if(parseInt(completedQuantity.value) < 0) {
            return false;
        }     

        if(isNaN(quantity.value)) {
            return false;
        }
        if(quantity.value == "") {
            return false;
        }
        if(quantity.value % 1 != 0) {
            return false;
        }
        if(parseInt(quantity.value) <= 0) {
            return false;
        } 

        if(parseInt(quantity.value) > parseInt(issuedQuantity.value)) {
            return false;
        } 

        if (parseInt(quantity.value) > parseInt(issuedQuantity.value) - parseInt(completedQuantity.value)) {
            return false;
        } 

        return true;
    }
}
catch(e) {
    console.log(e);
}
    