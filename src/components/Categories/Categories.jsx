import React from 'react';
import { Row, Col, Typography } from 'antd';
import {
  GiftOutlined,
  CrownOutlined,
  SketchOutlined,
  ShoppingOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import './Categories.scss';

const { Text } = Typography;

const CATEGORIES = [
  { key: 'rings', icon: <GiftOutlined />, label: 'Rings' },
  { key: 'necklaces', icon: <CrownOutlined />, label: 'Necklaces' },
  { key: 'bracelets', icon: <SketchOutlined />, label: 'Bracelets' },
  { key: 'handbags', icon: <ShoppingOutlined />, label: 'Handbags' },
  { key: 'clutches', icon: <SkinOutlined />, label: 'Clutches' },
];

const Categories = () => (
  <section className="categories">
    <Row
      justify="center"
      gutter={[16, 24]}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      {CATEGORIES.map(({ key, icon, label }) => (
        <Col xs={12} sm={8} md={4} lg={4} key={key}>
          <div className="categories__item">
            <div className="categories__icon">{icon}</div>
            <Text strong className="categories__label">{label}</Text>
          </div>
        </Col>
      ))}
    </Row>
  </section>
);

export default Categories;
