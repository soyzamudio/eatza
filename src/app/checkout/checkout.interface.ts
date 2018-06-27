export interface Checkout {
  orderId: string;
  deliveryInformation: CheckoutDeliveryInformation;
}

interface CheckoutDeliveryInformation {
  storeInfo: CheckoutRetailerAddress;
  clientInfo: CheckoutClientAddress;
  ETA: string;
}

interface CheckoutRetailerAddress {
  address: Address;
  retailer: Retailer;
}

interface CheckoutClientAddress {
  address: Address;
  client: Client;
}

interface Address {
  street: string;
  city: string;
  zipcode: string;
  county?: string;
  reference?: string;
}

interface Retailer {
  name: string;
  phoneNumber: string;
  storeId: string;
  hours?: string;
}

interface Client {
  fullName: string;
  phoneNumber: string;
}
