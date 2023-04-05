import { getShoppingCart } from "./utilities/fakedb";

const customLoader = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
  );
  const data = await res.json();
    // if the data in db then have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart){
        const dbProduct = data.find(product => product.id === id)
        if (dbProduct) {
            const quantity = storedCart[id]
            dbProduct.quantity = quantity;
            savedCart.push(dbProduct)
        }
    }


  return savedCart;
};

export default customLoader;
