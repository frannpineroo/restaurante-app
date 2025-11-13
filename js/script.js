const menu = {
    hamburguesa: 2.50,
    cerveza: 4.00,
    gaseosa: 3.00,
    ensalada: 1.50,
    salchichas: 2.00,
    refresco: 1.00,
    sopa: 1.50,
    postre: 1.50
};

const nombres = {
    hamburguesa: "Hamburguesa",
    cerveza: "Cerveza",
    gaseosa: "Gaseosa",
    ensalada: "Ensalada",
    salchichas: "Salchichas",
    refresco: "Refresco",
    sopa: "Sopa",
    postre: "Postre"
};

function calcular() {
    let ventaTotal = 0;
    let resumenHTML = '';

    for (let item in menu) {
        const cantidad = parseInt(document.getElementById(item).value)
        if (cantidad > 0) {
            const subtotal = cantidad * menu[item];
            ventaTotal += subtotal;
            resumenHTML += `
                <tr>
                    <td>${nombres[item]}</td>
                    <td style="text-align: center;">${cantidad}</td>
                    <td style="text-align: right;">${subtotal.toFixed(2)}</td>
                </tr>
            `;
        }
    }

    if (resumenHTML === '') {
        resumenHTML = '<tr><td>No hay productos seleccionados</td></tr>';
    }

    const impuesto = ventaTotal * 0.18;
    const totalConImpuesto = ventaTotal + impuesto;

    document.getElementById('resumenTable').innerHTML = resumenHTML;
    document.getElementById('subtotal').innerHTML = `$ ${ventaTotal.toFixed(2)}`;
    document.getElementById('impuesto').innerHTML = `$ ${impuesto.toFixed(2)}`;
    document.getElementById('total').innerHTML = `$ ${totalConImpuesto.toFixed(2)}`;
}

function limpiar() {
    for (let item in menu) {
        document.getElementById(item).value = 0;
    }
    document.getElementById('resumenTable').innerHTML = '<tr><td>Ingrese cantidades y presione Calcular</td></tr>';
    document.getElementById('subtotal').textContent = '$ 0.00';
    document.getElementById('impuesto').textContent = '$ 0.00';
    document.getElementById('total').textContent = '$ 0.00';
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calcular();
        }
    });
})