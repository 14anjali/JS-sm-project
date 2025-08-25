const clientName = document.getElementById("clientName");
const clientAddress = document.getElementById("clientAddress");
const clientEmail = document.getElementById("clientEmail");
const previewName = document.getElementById("previewName");
const previewAddress = document.getElementById("previewAddress");
const previewEmail = document.getElementById("previewEmail");
const addItemBtn = document.getElementById("addItem");
const itemsContainer = document.getElementById("items");
const previewItems = document.getElementById("previewItems");
const grandTotal = document.getElementById("grandTotal");
const downloadBtn = document.getElementById("downloadBtn");

// Live update of client info
[clientName, clientAddress, clientEmail].forEach((input) => {
  input.addEventListener("input", () => {
    previewName.textContent = clientName.value;
    previewAddress.textContent = clientAddress.value;
    previewEmail.textContent = clientEmail.value;
  });
});

// Add item
addItemBtn.addEventListener("click", () => {
  const desc = itemsContainer.querySelector(".item-desc").value;
  const qty = parseInt(itemsContainer.querySelector(".item-qty").value);
  const price = parseFloat(itemsContainer.querySelector(".item-price").value);

  if (!desc || isNaN(qty) || isNaN(price)) {
    alert("Please fill all item fields");
    return;
  }

  const total = qty * price;
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="p-2 border">${desc}</td>
    <td class="p-2 border">${qty}</td>
    <td class="p-2 border">₹${price.toFixed(2)}</td>
    <td class="p-2 border">₹${total.toFixed(2)}</td>
  `;
  previewItems.appendChild(tr);

  updateGrandTotal();

  // Clear fields
  itemsContainer.querySelector(".item-desc").value = "";
  itemsContainer.querySelector(".item-qty").value = "";
  itemsContainer.querySelector(".item-price").value = "";
});

// Update grand total
function updateGrandTotal() {
  let total = 0;
  previewItems.querySelectorAll("tr").forEach((row) => {
    const priceText = row.children[3].textContent;
    const price = parseFloat(priceText.replace("₹", ""));
    total += price;
  });
  grandTotal.textContent = `₹${total.toFixed(2)}`;
}

// Download PDF
downloadBtn.addEventListener("click", () => {
  const element = document.getElementById("invoicePreview");

  const opt = {
    margin: 0.5,
    filename: 'invoice.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});
