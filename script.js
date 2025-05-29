let cartCount = 0;

document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    // Opcional: mostrar alerta de añadido
    alert('Producto agregado al carrito. Total en carrito: ' + cartCount);
  });
});
