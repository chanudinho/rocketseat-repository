import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const cart = await AsyncStorage.getItem('@GoMarketPlace:cart');

      if (cart) {
        setProducts(JSON.parse(cart));
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const productExist = products.findIndex(item => item.id === product.id);

      if (productExist >= 0) {
        const productWithQuantity = products;

        productWithQuantity[productExist].quantity += 1;

        setProducts([...productWithQuantity]);
        await AsyncStorage.setItem(
          '@GoMarketPlace:cart',
          JSON.stringify([...productWithQuantity]),
        );
      } else {
        const productWithQuantity = product;

        productWithQuantity.quantity = 1;

        setProducts([...products, productWithQuantity]);
        await AsyncStorage.setItem(
          '@GoMarketPlace:cart',
          JSON.stringify([...products, productWithQuantity]),
        );
      }
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const productExist = products.findIndex(product => product.id === id);

      if (productExist >= 0) {
        const product = products;

        product[productExist].quantity += 1;

        setProducts([...product]);
        await AsyncStorage.setItem(
          '@GoMarketPlace:cart',
          JSON.stringify([...product]),
        );
      }
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const productExist = products.findIndex(product => product.id === id);

      if (productExist >= 0) {
        if (products[productExist].quantity >= 1) {
          const product = products;

          product[productExist].quantity -= 1;

          setProducts([...product]);
          await AsyncStorage.setItem(
            '@GoMarketPlace:cart',
            JSON.stringify([...product]),
          );
        }
      }
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
