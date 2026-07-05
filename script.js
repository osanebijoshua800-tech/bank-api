// Pointing directly to your production Render API instance
const BACKEND_URL = 'https://stripe-payment-backend-2jm8.onrender.com';

const buyBtn = document.getElementById('buy-btn');
const errorBox = document.getElementById('error-box');

// 1. EVALUATE URL PARAMETERS FOR COMPLETED TRANSFERS
const urlParams = new URLSearchParams(window.location.search);
const statusFlag = urlParams.get('status');

if (statusFlag === 'success') {
    // Hide the default checkout card completely
    document.getElementById('checkout-view').classList.add('hidden');
    // Reveal the premium dashboard workspace
    document.getElementById('dashboard-view').classList.remove('hidden');
} else if (statusFlag === 'cancel') {
    document.getElementById('checkout-view').classList.add('hidden');
    document.getElementById('cancel-view').classList.remove('hidden');
}

// 2. TRIGGER STRIPE REDIRECT SEQUENCE
if (buyBtn) {
    buyBtn.addEventListener('click', async () => {
        try {
            // Update UI state to loading
            buyBtn.disabled = true;
            buyBtn.innerText = 'Connecting...';
            errorBox.style.display = 'none';

            // Direct connection payload matching your backend expectations
            const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 'user_dev_01' 
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to initialize session.');
            }

            // Redirect user directly to the public Stripe checkout screen
            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error('Stripe verification payload missing target url property.');
            }

        } catch (err) {
            // Reset state on failure
            buyBtn.disabled = false;
            buyBtn.innerText = 'Buy Now';
            errorBox.innerText = `Error: ${err.message}`;
            errorBox.style.display = 'block';
        }
    });
}