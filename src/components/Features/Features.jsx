import React from 'react';
import { Row, Col, Typography } from 'antd';
import {
  CarOutlined,
  UndoOutlined,
  SafetyOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import './Features.scss';

const { Title, Paragraph } = Typography;

const FEATURES = [
  { icon: <CarOutlined />, title: 'Free Shipping', desc: 'On orders above ₹999' },
  { icon: <UndoOutlined />, title: 'Easy Returns', desc: '7-day return policy' },
  { icon: <SafetyOutlined />, title: 'Secure Payment', desc: '100% secure checkout' },
  { icon: <CustomerServiceOutlined />, title: '24/7 Support', desc: 'Dedicated help center' },
];

const Features = () => (
  <section className="features">
    <Row
      gutter={[24, 24]}
      justify="center"
      style={{ maxWidth: 1600, margin: '0 auto', padding: '0 24px' }}
    >
      {FEATURES.map(({ icon, title, desc }) => (
        <Col xs={12} sm={12} md={6} lg={6} key={title}>
          <div className="features__item">
            <div className="features__icon">{icon}</div>
            <Title level={5} className="features__title">{title}</Title>
            <Paragraph className="features__desc">{desc}</Paragraph>
          </div>
        </Col>
      ))}
    </Row>
  </section>
);

export default Features;
