function calculateTotal() {
    const adultPrice = 10;
    const childPrice = 5;
    let adultCount = parseInt(document.getElementById("adultTickets").value) || 0;
    let childCount = parseInt(document.getElementById("childTickets").value) || 0;
    let totalCost = (adultCount * adultPrice) + (childCount * childPrice);
    document.getElementById("totalAmount").value = "₹" + totalCost;
}
