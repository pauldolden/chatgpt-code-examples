// Example of a class that violates the OCP
class PaymentProcessor {
  processPayment(payment: Payment) {
    if (payment.type === "credit-card") {
      // Process credit card payment
    } else if (payment.type === "paypal") {
      // Process PayPal payment
    } else if (payment.type === "bitcoin") {
      // Process Bitcoin payment
    }
  }
}

// Example of a refactored class that follows the OCP
interface PaymentProcessor {
  processPayment(payment: Payment): void;
}

class CreditCardPaymentProcessor implements PaymentProcessor {
  processPayment(payment: Payment) {
    // Process credit card payment
  }
}

class PayPalPaymentProcessor implements PaymentProcessor {
  processPayment(payment: Payment) {
    // Process PayPal payment
  }
}

class BitcoinPaymentProcessor implements PaymentProcessor {
  processPayment(payment: Payment) {
    // Process Bitcoin payment
  }
}
