import Product from "./Product.js";

class Electronics extends Product {
  constructor(id, name, price, quantity, brand, warranty) {
    super(id, name, price, quantity);
    this.brand = brand;
    this.warranty = warranty;
  }

  getProductDetails() {
    return {
      ...super.getProductDetails(),
      brand: this.brand,
      warranty: this.warranty,
    };
  }
}

export default Electronics;