let result = document.getElementById('bmi-result');
let calculateButton = document.getElementById('calc');


calculateButton.addEventListener('click', function(){
    let height = document.getElementById('input-height').value;
    let weight  = document.getElementById('input-weight').value;

    let h = parseFloat(height) * parseFloat(height);
    let total = parseFloat(weight) / h;
    result.innerHTML = total.toFixed(2);
})