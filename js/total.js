function getInnerText(elementId) {
    const getElement = document.getElementById(elementId);
    const getElementText = getElement.innerText;
    return getElementText;
}
let totalPrice = 0;

function getProductDetail(target) {

    // purchase button enable
    const getBtnPurchase = document.getElementById('btn-purchase');
    getBtnPurchase.disabled = false;

    // product name set
    const getProductName = target.childNodes[3].childNodes[3].innerText;
    const getProductInputField = document.getElementById('input-product-name');
    const li = document.createElement("li");
    li.innerText = getProductName;
    getProductInputField.appendChild(li);

    // product cost
    const getProductCost = parseFloat(target.childNodes[3].childNodes[5].childNodes[0].innerText);

    totalPrice = totalPrice + getProductCost;

    const previousTotalPrice = document.getElementById('total-price-field');
    const previousTotal = document.getElementById('total-field');
    previousTotalPrice.innerText = totalPrice;
    previousTotal.innerText = totalPrice;

    if (totalPrice >= 200) {
        const getBtnApply = document.getElementById('btn-apply');
        getBtnApply.disabled = false;

        getBtnApply.addEventListener('click', function(){
            const inputField = document.getElementById('input-field');
            if(inputField.value === 'SELL200'){

                const discount =((20/100)*totalPrice);
                const newTotalPrice = totalPrice - discount;
                previousTotal.innerText = newTotalPrice.toFixed(2);
                const discountField = document.getElementById('discount-field');
                discountField.innerText = discount.toFixed(2);
                
            }
        });
        
    }
}