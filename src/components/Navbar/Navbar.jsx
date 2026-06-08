import React, { useState } from 'react';
import { Row, Col, Menu, Badge, Button, Space, Drawer } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import './Navbar.scss';

const NAV_ITEMS = [
  { key: 'home', label: <a href="#home">Home</a> },
  { key: 'jewellery', label: <a href="#jewellery">Jewellery</a> },
  { key: 'bags', label: <a href="#bags">Bags</a> },
  { key: 'new-arrivals', label: <a href="#new-arrivals">New Arrivals</a> },
  { key: 'about', label: <a href="#about">About</a> },
];

const Navbar = ({ wishlistCount, onWishlistClick }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__top-bar">
        ✦ Free Shipping on Orders Above ₹999 ✦ Use Code PINK10 for 10% Off ✦
      </div>

      <div className="navbar__header">
        <Row
          align="middle"
          justify="space-between"
          style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 24px' }}
        >
          <Col xs={6} sm={6} md={4} lg={4}>
            <a href="#home" className="navbar__brand">
              <span className="navbar__brand-pink">Pink</span>
              <span className="navbar__brand-peacock">Peacock</span>
            </a>
          </Col>

          <Col xs={0} sm={0} md={14} lg={14} className="navbar__desktop-menu">
            <Menu
              mode="horizontal"
              items={NAV_ITEMS}
              className="navbar__menu"
              selectedKeys={[]}
            />
          </Col>

          <Col xs={14} sm={14} md={6} lg={6}>
            <Row justify="end" align="middle">
              <Space size="middle">
                <Button
                  type="text"
                  icon={<SearchOutlined />}
                  className="navbar__icon-btn"
                />
                <Button
                  type="text"
                  icon={<UserOutlined />}
                  className="navbar__icon-btn"
                />
                <Badge count={wishlistCount} size="small" color="#c2185b">
                  <Button
                    type="text"
                    icon={<HeartOutlined />}
                    className="navbar__icon-btn"
                    onClick={onWishlistClick}
                  />
                </Badge>
              </Space>
            </Row>
          </Col>

          <Col xs={4} sm={4} md={0} lg={0} className="navbar__mobile-menu">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
            />
          </Col>
        </Row>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu
          mode="vertical"
          items={NAV_ITEMS}
          onClick={() => setDrawerOpen(false)}
          selectedKeys={[]}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;
