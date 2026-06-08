import React, { useState } from 'react';
import { Row, Col, Input, Button, Typography, Space, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './Newsletter.scss';

const { Title, Paragraph, Text } = Typography;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
      message.success('Welcome to the Pink Peacock family!');
    }
  };

  return (
    <section className="newsletter">
      <Row justify="center">
        <Col xs={22} sm={18} md={14} lg={10}>
          <Title level={2} className="newsletter__title">
            Join the Pink Peacock Family
          </Title>
          <Paragraph className="newsletter__subtitle">
            Subscribe for exclusive offers, new arrivals & styling tips
          </Paragraph>

          {subscribed ? (
            <Text className="newsletter__success">✦ Thank you for subscribing! ✦</Text>
          ) : (
            <Space.Compact style={{ width: '100%' }}>
              <Input
                size="large"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onPressEnter={handleSubscribe}
                style={{ borderRadius: '30px 0 0 30px' }}
              />
              <Button
                type="primary"
                size="large"
                icon={<SendOutlined />}
                onClick={handleSubscribe}
                style={{ borderRadius: '0 30px 30px 0' }}
              >
                Subscribe
              </Button>
            </Space.Compact>
          )}
        </Col>
      </Row>
    </section>
  );
};

export default Newsletter;
