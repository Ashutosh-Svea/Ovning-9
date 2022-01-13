function findBishBosh(bish, bosh, limit) {
    let result = "";
    for (let i = 1; i <= limit; i++) {
        if (i % bish === 0 && i % bosh === 0)
            result = result + 'Bish-Bosh,';
        else if (i % bish === 0)
        result = result + 'Bish,';
        else if ( i % bosh === 0)
        result = result + 'Bosh,';
        else
            result = result + i + ',';
    }

    return result;

}

function generateBishBosh() {
     let bishNumber = document.getElementById("bishNumberId").value;
     let boshNumber = document.getElementById("boshNumberId").value;
     let limitNumber = document.getElementById("limitNumberId").value;
 
     if (bishNumber < 0)
     {
        document.getElementById("bishBoshValue").textContent = 
        "Bish Number cannot be less than 0.";

     }
     else if (isNaN(bishNumber))
     {
        document.getElementById("bishBoshValue").textContent = 
        "Bish Number is not a valid number";

     }
     else if (boshNumber < 0)
     {
        document.getElementById("bishBoshValue").textContent = 
        "Bosh Number cannot be less than 0.";

     }
     else if (isNaN(boshNumber))
     {
        document.getElementById("bishBoshValue").textContent = 
        "Bosh Number is not a valid number";

     }
     else if (limitNumber < 0)
     {
        document.getElementById("bishBoshValue").textContent = 
        "Limit Number cannot be less than 0.";

     }
     else if (isNaN(limitNumber))
     {
        document.getElementById("bishBoshValue").textContent = 
        "Limit Number is not a valid number";

     }
     else
     {
        let result = findBishBosh(bishNumber, boshNumber, limitNumber);
        document.getElementById("bishBoshValue").textContent = result ;
     }
 }
 