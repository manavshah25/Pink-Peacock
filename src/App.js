import React, { useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import Banner from './components/Banner';
import NewArrivals from './components/NewArrivals';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import useWishlist from './hooks/useWishlist';
import useOrderModal from './hooks/useOrderModal';
import THEME_CONFIG from './utils/theme';
import { JEWELLERY_PRODUCTS, BAGS_PRODUCTS } from './data/products';

const { Header, Content, Footer: AntFooter } = Layout;

const App = () => {
  const [wishlistVisible, setWishlistVisible] = useState(false);
  const { wishlistItems, toggleWishlist, removeFromWishlist } = useWishlist();
  const { orderSingle, orderSelected } = useOrderModal(wishlistItems);

  return (
    <ConfigProvider theme={THEME_CONFIG}>
      <Layout>
        <Header>
          <Navbar
            wishlistCount={wishlistItems.length}
            onWishlistClick={() => setWishlistVisible(true)}
          />
        </Header>

        <Content>
          <Hero />
          <Categories />
          <ProductSection
            id="jewellery"
            tag="Our Collection"
            title="Intimate Jewellery"
            subtitle="Delicate pieces that speak elegance"
            products={JEWELLERY_PRODUCTS}
            onAddToCart={orderSingle}
            onToggleWishlist={toggleWishlist}
            wishlistItems={wishlistItems}
          />
          <Banner />
          <ProductSection
            id="bags"
            tag="Trending Now"
            title="Designer Bags"
            subtitle="Carry your style with confidence"
            products={BAGS_PRODUCTS}
            onAddToCart={orderSingle}
            onToggleWishlist={toggleWishlist}
            wishlistItems={wishlistItems}
          />
          <NewArrivals />
          <Features />
          <Newsletter />
        </Content>

        <AntFooter>
          <Footer />
        </AntFooter>
      </Layout>

      <Wishlist
        open={wishlistVisible}
        items={wishlistItems}
        onRemove={removeFromWishlist}
        onOrderSelected={orderSelected}
        onClose={() => setWishlistVisible(false)}
      />
    </ConfigProvider>
  );
};

export default App;
