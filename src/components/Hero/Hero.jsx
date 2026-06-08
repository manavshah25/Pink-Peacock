import React from 'react';
import { Row, Col, Button, Typography, Space } from 'antd';
import logo from '../../assets/logo.png';
import './Hero.scss';

const { Title, Paragraph } = Typography;

const Hero = () => (
  <section id="home" className="hero">
    <Row
      align="middle"
      justify="center"
      gutter={[48, 48]}
      style={{ maxWidth: 1600, margin: '0 auto', padding: '0 24px', width: '100%' }}
    >
      <Col xs={24} sm={24} md={12} lg={12}>
        <span className="hero__tag">New Collection {new Date().getFullYear()}</span>
        <Title level={1} className="hero__title">
          Where Fashion<br />
          Meets <span className="hero__highlight">Shine</span>
        </Title>
        <Paragraph className="hero__subtitle">
          Discover exquisite intimate jewellery & designer bags crafted for the modern woman
        </Paragraph>
        <Space size="middle">
          <Button type="primary" size="large" href="#jewellery">
            Shop Jewellery
          </Button>
          <Button size="large" href="#bags">
            Shop Bags
          </Button>
        </Space>
      </Col>

      <Col xs={24} sm={24} md={12} lg={12}>
        <div className="hero__visual">
          <div className="hero__circle" />
          <img src={logo} alt="Pink Peacock" className="hero__logo-img" />
        </div>
      </Col>
    </Row>
  </section>
);

export default Hero;
