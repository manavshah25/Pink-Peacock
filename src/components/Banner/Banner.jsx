import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import './Banner.scss';

const { Title, Text, Paragraph } = Typography;

const Banner = () => (
  <section className="banner">
    <Row justify="center">
      <Col xs={22} sm={20} md={16} lg={12} style={{ textAlign: 'center' }}>
        <Text className="banner__tag">Limited Time Offer</Text>
        <Title level={2} className="banner__title">Flat 25% Off on All Bags</Title>
        <Paragraph className="banner__code">
          Use code: <strong>PEACOCK25</strong>
        </Paragraph>
        <Button type="primary" size="large" href="#bags">
          Shop Now
        </Button>
      </Col>
    </Row>
  </section>
);

export default Banner;
