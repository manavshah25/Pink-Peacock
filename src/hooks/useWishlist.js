import { useState, useCallback } from 'react';
import { message } from 'antd';

const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = useCallback((product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        message.info(`${product.name} removed from wishlist`);
        return prev.filter((item) => item.id !== product.id);
      }
      message.success(`${product.name} added to wishlist`);
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return { wishlistItems, toggleWishlist, removeFromWishlist };
};

export default useWishlist;
