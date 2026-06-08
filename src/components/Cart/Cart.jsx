import React from 'react';
import { Drawer, Button, Empty, Typography, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './Cart.scss';

const { Text, Title } = Typography;

const Cart = ({ open, items, onRemove, onClose }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Drawer
      title="Your Cart"
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
      footer={
        items.length > 0 && (
          <div className="cart__footer">
            <div className="cart__total">
              <Text strong>Total:</Text>
              <Text strong>₹{total.toLocaleString()}</Text>
            </div>
            <Button type="primary" size="large" block>
              Checkout
            </Button>
          </div>
        )
      }
    >
      {items.length === 0 ? (
        <Empty description="Your cart is empty" style={{ marginTop: 60 }} />
      ) : (
        <div className="cart__items">
          {items.map((item) => (
            <div className="cart__item" key={item.id}>
              <Row align="middle" gutter={12} style={{ flex: 1 }}>
                <Col>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart__item-image"
                  />
                </Col>
                <Col flex="auto">
                  <Title level={5} className="cart__item-name">{item.name}</Title>
                  <Text className="cart__item-price">
                    ₹{item.price.toLocaleString()} × {item.qty}
                  </Text>
                </Col>
              </Row>
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name}`}
              />
            </div>
          ))}
        </div>
      )}
    </Drawer>
  );
};

export default Cart;
