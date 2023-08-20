let total = 0;
function cardclicked (target){
    const getitem =target.childNodes[3].childNodes[3].innerText;
    
    
    const li = document.createElement('li');
    li.innerText = getitem
    const parent = document.getElementById('title-box')
    li.type = '1'
    parent.appendChild(li);

    let getPrice = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    let priceConvert = parseFloat(getPrice);
    

   const getTotalPrice =target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[3].childNodes[5].childNodes[1].childNodes[1];
   const totalString = getTotalPrice.innerText;
   const totalStringConvert =  parseFloat(totalString);
   


    total = priceConvert + totalStringConvert ;
    getTotalPrice.innerText = total.toFixed(2);


   const applyBtn =  document.getElementById('discount-btn')
    if(total < 200){
        applyBtn.disabled =true;  

    }
    else{
        applyBtn.disabled =false; 
    }

    const purchaseBtn = document.getElementById('PurchaseBtn')
    if(total <= 0){
        purchaseBtn.disabled =true;
    }
    else{
        purchaseBtn.disabled =false;
    }

    const getGrandTotal =target.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].childNodes[3].childNodes[5].childNodes[5].childNodes[1];

    const grandTotalString = getGrandTotal.innerText;
    const grandTotalConvert = parseFloat(grandTotalString);

     let finalGrandTotal = grandTotalConvert + priceConvert;
     getGrandTotal.innerText = finalGrandTotal.toFixed(2);

}





document.getElementById('discount-btn').addEventListener('click',function(){

    const inputValue = document.getElementById('discountInput')
    const inputDiscountValue = inputValue.value;
    

    const discountValue = document.getElementById('discount-value')
    const discountString = discountValue.innerText;
    const discountValueNumber = parseFloat(discountString);


    if(inputDiscountValue === 'SELL200'){
         let discount = (20/100)*total;
         discountValue.innerText = discount.toFixed(2);
         inputValue.value = '';

         const grandTotalAfterDis = document.getElementById('grandTotal');
         const grtdString = grandTotalAfterDis.innerText;
         const grtdConvert = parseFloat(grtdString);

         let finalGrandTotal = total - discount;

         grandTotalAfterDis.innerText = finalGrandTotal.toFixed(2);

    }

       

    
})

function cartClear (id){
    const getTotalPrice = document.getElementById(id)
    const getTotalPriceString = getTotalPrice.innerText;
    getTotalPrice.innerText = '00'

}

document.getElementById('homebtn').addEventListener('click', function(){
   
   
   cartClear('grandTotal');


   cartClear('discount-value')


   cartClear('Price')
    

    const parent = document.getElementById('title-box')
    const listClear = parent.innerText
    parent.innerText = '';

    const btn = document.getElementById('PurchaseBtn')
    btn.disabled = true;

    const applybtn =document.getElementById('discount-btn')
    applybtn.disabled =true;

            
})

