import React, { useState } from 'react';
import { Row, Col, Card, Tag, Button, Typography, Space, Tooltip, Modal } from 'antd';
import { HeartOutlined, HeartFilled, EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './ProductSection.scss';

const { Title, Paragraph, Text } = Typography;

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isLiked }) => {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <Card
        className="product-card"
        hoverable
        cover={
          <div className="product-card__cover">
            <img src={product.image} alt={product.name} loading="lazy" />
            {product.badge && (
              <Tag
                color={product.badge.startsWith('-') ? 'green' : 'magenta'}
                className="product-card__badge"
              >
                {product.badge}
              </Tag>
            )}
            <div className="product-card__actions">
              <Tooltip title={isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}>
                <Button
                  shape="circle"
                  icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
                  className={`product-card__action-btn ${isLiked ? 'product-card__action-btn--active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product);
                  }}
                />
              </Tooltip>
              <Tooltip title="Quick View">
                <Button
                  shape="circle"
                  icon={<EyeOutlined />}
                  className="product-card__action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewOpen(true);
                  }}
                />
              </Tooltip>
            </div>
          </div>
        }
      >
        <Title level={5} className="product-card__name">{product.name}</Title>
        <Space align="baseline" style={{ marginBottom: 12 }}>
          <Text className="product-card__price">₹{product.price.toLocaleString()}</Text>
          {product.oldPrice && (
            <Text className="product-card__old-price">₹{product.oldPrice.toLocaleString()}</Text>
          )}
        </Space>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          block
          onClick={() => onAddToCart(product)}
        >
          Order Now
        </Button>
      </Card>

      <Modal
        open={previewOpen}
        onCancel={() => setPreviewOpen(false)}
        footer={null}
        width={600}
        centered
        className="product-card__modal"
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} sm={24} md={12}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', borderRadius: 12, objectFit: 'cover', maxHeight: 350 }}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Title level={3} style={{ marginBottom: 8 }}>{product.name}</Title>
            <Space align="baseline" style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 22, fontWeight: 600, color: '#c2185b' }}>
                ₹{product.price.toLocaleString()}
              </Text>
              {product.oldPrice && (
                <Text delete type="secondary">₹{product.oldPrice.toLocaleString()}</Text>
              )}
            </Space>
            <Paragraph type="secondary" style={{ marginBottom: 20 }}>
              Elegant and beautifully crafted piece from the Pink Peacock collection.
            </Paragraph>
            <Space wrap>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                size="large"
                onClick={() => {
                  onAddToCart(product);
                  setPreviewOpen(false);
                }}
              >
                Order Now
              </Button>
              <Button
                icon={isLiked ? <HeartFilled /> : <HeartOutlined />}
                size="large"
                danger={isLiked}
                onClick={() => onToggleWishlist(product)}
              >
                {isLiked ? 'In Wishlist' : 'Wishlist'}
              </Button>
            </Space>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

const ProductSection = ({ id, tag, title, subtitle, products, onAddToCart, onToggleWishlist, wishlistItems }) => (
  <section id={id} className="product-section">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div className="product-section__header">
        <Text className="product-section__tag">✦ {tag} ✦</Text>
        <Title level={2} className="product-section__title">{title}</Title>
        <Paragraph className="product-section__subtitle">{subtitle}</Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isLiked={wishlistItems.some((item) => item.id === product.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default ProductSection;
