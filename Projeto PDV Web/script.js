// Variável para armazenar o total global do pedido
let grandTotal = 0;

// Função para atualizar o total global na tela e armazená-lo no localStorage
function updateGrandTotal() {
  const grandTotalDisplay = document.getElementById('grandTotal');
  grandTotalDisplay.textContent = grandTotal.toFixed(2).replace('.', ',');
  
  // Armazena o valor total no localStorage
  localStorage.setItem('totalPedido', grandTotal.toFixed(2));
}

// Seleciona todos os produtos e os inicializa com eventos
document.querySelectorAll('.product').forEach((productElement) => {
  const unitPrice = parseFloat(productElement.getAttribute('data-price'));  // Preço unitário do produto
  let quantity = 0;  // Inicializa a quantidade do produto como 0
  const quantityDisplay = productElement.querySelector('.quantity');
  const totalPriceDisplay = productElement.querySelector('.totalPrice');
  const addButton = productElement.querySelector('.addButton');
  const removeButton = productElement.querySelector('.removeButton');

  // Função para atualizar o total do produto
  function updateTotal() {
    const total = quantity * unitPrice;
    totalPriceDisplay.textContent = total.toFixed(2).replace('.', ',');
  }

  // Evento para adicionar um produto
  addButton.addEventListener('click', () => {
    quantity++;  // Incrementa a quantidade
    quantityDisplay.textContent = quantity;  // Atualiza a quantidade na tela
    grandTotal += unitPrice;  // Atualiza o total global
    updateTotal();  // Atualiza o total do produto
    updateGrandTotal();  // Atualiza o total global na tela
  });

  // Evento para remover um produto
  removeButton.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;  // Decrementa a quantidade, mas não permite que fique negativo
      quantityDisplay.textContent = quantity;  // Atualiza a quantidade na tela
      grandTotal -= unitPrice;  // Atualiza o total global
      updateTotal();  // Atualiza o total do produto
      updateGrandTotal();  // Atualiza o total global na tela
    }
  });
});
