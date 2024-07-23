document.addEventListener('DOMContentLoaded', function() {
    // Product details
    const products = [
        price1: 39999.00},
        price2: 29999.00},
        price3: 27980.00},
        price4: 42999.00},
        price5: 22999.00},
        price6: 18990.00},
        price7: 80999.00},

    ];

    const qtyInputs = products.map(product => document.getElementById(`qty${product.id}`));
    const cartsTextArea = document.getElementById('carts');
    const totalInput = document.getElementById('total');
    const cashInput = document.getElementById('cash');
    const changeInput = document.getElementById('change');

    qtyInputs.forEach(input => input.addEventListener('input', updateCart));

    cashInput.addEventListener('input', calculateChange);

    function updateCart() {
        let cartItems = '';
        let total = 0;

        products.forEach(product => {
            const qty = parseInt(document.getElementById(`qty${product.id}`).value) || 0;
            if (qty > 0) {
                const itemTotal = qty * product.price;
                total += itemTotal;
                cartItems += `${qty} x ${product.name} @ ${product.price.toFixed(2)} = ${itemTotal.toFixed(2)}\n`;
            }
        });

        cartsTextArea.value = cartItems;
        totalInput.value = total.toFixed(2);
        calculateChange();
    }

    function calculateChange() {
        const total = parseFloat(totalInput.value) || 0;
        const cash = parseFloat(cashInput.value) || 0;
        if (cash >= total) {
            const change = cash - total;
            changeInput.value = change.toFixed(2);
        } else {
            changeInput.value = '';
        }
    }
});
