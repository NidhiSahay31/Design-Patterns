class PaymentProcessor {
    process(amount) {
        throw new Error("Method 'process()' must be implemented.");
    }
}
// Aadaptee
class StripePaymentGateway {
    makePayment(amountInCents) {
        console.log(`Processing payment of $${amountInCents / 100} through Stripe.`);
    }
}

class StripeAdapter extends PaymentProcessor {
    constructor(stripePaymentGateway) {
        super();
        this.stripePaymentGateway = stripePaymentGateway;
    }

    process(amount) {
        // Convert dollars to cents, as Stripe works with cents
        const amountInCents = amount * 100;
        this.stripePaymentGateway.makePayment(amountInCents);
    }
}

//main code
const stripeGateway = new StripePaymentGateway();
const paymentProcessor = new StripeAdapter(stripeGateway);

paymentProcessor.process(25); // Processing a payment of $25
