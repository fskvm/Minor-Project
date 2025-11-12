// Function for form validation.
(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false,
        );
    });
})();

// JavaScript for Tax Switch Toggle with Price Calculation
let taxSwitchToggle = document.getElementById("flexSwitchCheckDefault");

// Function to calculate and update prices
function updatePrices(showBasePrice) {
    const priceElements = document.querySelectorAll('.card-text');
    const GST_RATE = 0.18; // 18% GST

    priceElements.forEach(element => {
        const priceText = element.querySelector('.price-display');
        const taxInfo = element.querySelector('.tax-info');
        const basePrice = parseFloat(element.dataset.basePrice);

        if (!isNaN(basePrice)) {
            if (showBasePrice) {
                // Show base price (without tax)
                const basePriceFormatted = Math.round(basePrice).toLocaleString("en-IN");
                priceText.textContent = `₹${basePriceFormatted}`;
                if (taxInfo) {
                    taxInfo.textContent = ` +18% GST (₹${Math.round(basePrice * GST_RATE).toLocaleString("en-IN")})`;
                    taxInfo.style.display = "inline";
                }
            } else {
                // Show total price (with tax included)
                const totalPrice = Math.round(basePrice * (1 + GST_RATE));
                const totalPriceFormatted = totalPrice.toLocaleString("en-IN");
                priceText.textContent = `₹${totalPriceFormatted}`;
                if (taxInfo) {
                    taxInfo.style.display = "none";
                }
            }
        }
    });
}

// Initialize tax toggle functionality
function initTaxToggle() {
    let taxSwitchToggle = document.getElementById("flexSwitchCheckDefault");

    if (taxSwitchToggle) {
        // Set initial state
        updatePrices(taxSwitchToggle.checked);

        // Add event listener for toggle changes
        taxSwitchToggle.addEventListener('change', function() {
            updatePrices(this.checked);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTaxToggle();
});

// Legacy function for backward compatibility (if needed)
function texSwitchToggle() {
    let taxSwitchToggle = document.getElementById("flexSwitchCheckDefault");
    if (taxSwitchToggle) {
        updatePrices(taxSwitchToggle.checked);
    }
}
