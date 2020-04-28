
function popup(){
    const str = document.getElementById('productNumber').value 
        + document.getElementById('name').value
        + document.getElementById('unitPrice').value
        + document.getElementById('qty').value
        + document.getElementById('supplier').value
        + document.getElementById('date').value;
        alert(str);
};
document.getElementById('submit').onclick = popup;