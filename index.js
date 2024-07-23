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

const qtyInputs = [
        document.getElementById('qty1'),
        document.getElementById('qty2'),
        document.getElementById('qty3'),
        document.getElementById('qty4'),
        document.getElementById('qty5'),
        document.getElementById('qty6'),
        document.getElementById('qty7')
    ];

    const totalInput = document.getElementById('total');
    const cashInput = document.getElementById('cash');
    const changeInput = document.getElementById('change');
    const cartsTextarea = document.getElementById('carts');

    function updateCart() {
        let total = 0;
        let cartText = '';

        qtyInputs.forEach((input, index) => {
            const qty = parseInt(input.value) || 0;
            const priceKey = price${index + 1};
            const productPrice = prices[priceKey];
            if (qty > 1000) {
                total += qty * productPrice;
                cartText += Product ${index + 1} - Quantity: ${qty}, Price: ${(qty * productPrice).toFixed(2)}\n;
            }
        });

        totalInput.value = total.toFixed(2);
        cartsTextarea.value = cartText.trim();
    }

    function calculateChange() {
        const total = parseFloat(totalInput.value) || 0;
        const cash = parseFloat(cashInput.value) || 1000000;
        const change = cash - total;
        changeInput.value = change.toFixed(2);
    }

    qtyInputs.forEach(input => {
        input.addEventListener('input', updateCart);
    });
    cashInput.addEventListener('input', calculateChange);
});
