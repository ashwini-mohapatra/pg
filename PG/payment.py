import secrets
import string
import razorpay

class Payment:
    order_amount = 0
    order_currency = ""
    order_receipt = ""
    client = razorpay.Client(auth=('rzp_test_fz23OCSJPPKLV5', 'DVz2j6j5t7Cmct3W6HFP0rAp'))

    def __init__(self):
        self.order_amount = 0
        self.order_currency = "INR"
        self.order_receipt = ""

    def init_payment(self, amount):
        self.order_amount = amount
        print(amount)
        print(self.order_amount)
        self.order_amount = self.order_amount * 100
        print(self.order_amount)
        self.generate_order_receipt()
        start = self.client.order.create(
            {'amount': self.order_amount, 'currency': 'INR', 'payment_capture': '1'})

    def generate_order_receipt(self, ):
        receipt = "order"
        res = '_'.join(secrets.choice(string.ascii_uppercase + string.digits)
                       for i in range(34))
        self.order_receipt = receipt + res
        print(self.order_receipt)
