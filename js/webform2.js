
$(function(){
    $('form').on('submit', fun);
    function fun(event){
        event.preventDefault();
        const str = `Product Num ${$('#productNumber').val()} <br>` 
        + `Name ${$('#name').val()} <br>`
        + `Unit Price ${$('#unitPrice').val()} <br>`
        + `Quantity ${$('#qty').val()} <br>`
        + `Supplier ${$('#supplier').val()} <br>`
        + `Date ${$('#date').val()} <br>`;
        console.log(str);
        
        $('div.container').append($('<div>', {html: str}));
    }
});