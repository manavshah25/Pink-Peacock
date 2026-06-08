import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import './NewArrivals.scss';

const { Title, Text } = Typography;

const NewArrivals = () => (
  <section id="new-arrivals" className="new-arrivals">
    <div style={{ maxWidth: 1600, margin: '0 auto', padding: '0 24px' }}>
      <div className="new-arrivals__header">
        <Text className="new-arrivals__tag">✦ Just Dropped ✦</Text>
        <Title level={2} className="new-arrivals__title">New Arrivals</Title>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div className="new-arrivals__card new-arrivals__card--pink">
            <div className="new-arrivals__card-content">
              <Title level={3} className="new-arrivals__card-title">Statement Necklaces</Title>
              <Button type="primary" href="#jewellery">Explore</Button>
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <Row gutter={[0, 24]}>
            <Col span={24}>
              <div className="new-arrivals__card new-arrivals__card--green">
                <div className="new-arrivals__card-content">
                  <Title level={3} className="new-arrivals__card-title">Evening Clutches</Title>
                  <Button href="#bags">Explore</Button>
                </div>
              </div>
            </Col>
            <Col span={24}>
              <div className="new-arrivals__card new-arrivals__card--warm">
                <div className="new-arrivals__card-content">
                  <Title level={3} className="new-arrivals__card-title">Dainty Rings</Title>
                  <Button href="#jewellery">Explore</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </section>
);

export default NewArrivals;
