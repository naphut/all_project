let code, name, qty, price, total, dis, pay;
code = prompt("Enter the code:");
name = prompt("Enter the name:");
qty = parseInt(prompt("Enter the quantity:"));
price = parseFloat(prompt("Enter the price:"));
total = qty * price;

if (total <= 10) {
    dis = 5;
} else if (total < 20) {
    dis = 10;
} else if (total < 30) {
    dis = 15;
} else if (total < 40) {
    dis = 20;
} else {
    dis = 25;
}

    pay=total-(total*dis)/100;
    
document.write(`
    <div class="container">
        <table class="table bordered">
            <tr>
                <th>CODE</th>
                <th>NAME</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>DISCOUNT</th>
                <th>PAYMENT</th>
            </tr>
            <tr>
                <td>${code}</td>
                <td>${name}</td>
                <td>${qty}</td>
                <td>${price.toFixed(2)}</td>
                <td>${dis}%</td>
                <td>${pay.toFixed(2)}</td>
            </tr>
        </table>
    </div>
`);