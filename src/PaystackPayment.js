import PaystackPop from '@paystack/inline-js'

export const handlePayment = (email, amount) => {
    const handler = PaystackPop.setup({
        key: 'pk_test_1ac7c4c33490ba71ff053cdf8349fa13291e0483',
        email,
        amount: amount * 100,
        label: "Optional string that replaces customer email",
        onClose: () => {
          alert('Window closed.');
        },
        callback: (response) => {
          const message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
        }
      });
    
      handler.openIframe();
}