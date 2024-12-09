let products = ["iphone", "oppo", "realmeC53", "samsung", "hauawi", "reno24", "lava"]
let price = [40000, 5000, 7000, 12000, 4000, 6000, 3000]

let tbody = document.getElementById('tbody')
let cartoona = '';
for (let i = 0; i < products.length; i++) {
    cartoona += `
        <tr>
            <td>${products[i]}</td>
            <td>${price[i]}</td>
        </tr>
    `
}
tbody.innerHTML = cartoona;
