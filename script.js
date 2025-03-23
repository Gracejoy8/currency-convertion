document.getElementById("convert").addEventListener("click", function () {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    
    // Exchange rates (static for now, can be updated dynamically)
    const rates = { USD: 1, EUR: 0.92, GBP: 0.78, INR: 82.5 };

    if (amount === "" || amount <= 0) {  // Issue: amount is a string, needs conversion
        document.getElementById("result").textContent = "Please enter a valid amount.";
        return;
    }

    const convertedAmount = (amount * rates[currency]).toFixed(2);
    document.getElementById("result").textContent = `Converted Amount: ${convertedAmount} ${currency}`;
});
