import React from 'react';
import { Row, Col, Typography, Space, Button } from 'antd';
import {
  InstagramOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import './Footer.scss';

const { Title, Paragraph } = Typography;

const QUICK_LINKS = ['New Arrivals', 'Bestsellers', 'Sale', 'Gift Cards'];
const SUPPORT_LINKS = ['Track Order', 'Returns & Exchange', 'Shipping Info', 'FAQs'];

const Footer = () => (
  <footer id="about" className="footer">
    <Row
      gutter={[32, 40]}
      style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
    >
      <Col xs={24} sm={24} md={8} lg={8}>
        <Title level={3} className="footer__brand-name">
          <span style={{ color: '#c2185b' }}>Pink</span>
          <span style={{ color: '#6b7f5e' }}>Peacock</span>
        </Title>
        <Paragraph className="footer__brand-desc">
          Where Fashion Meets Shine. Curating the finest intimate jewellery and designer bags for the modern woman.
        </Paragraph>
        <Space size="small">
          <Button
            type="text"
            shape="circle"
            icon={<InstagramOutlined />}
            className="footer__social-link"
            href="https://www.instagram.com/pinkpeacockvadodara"
            target="_blank"
          />
          <Button
            type="text"
            shape="circle"
            icon={<FacebookOutlined />}
            className="footer__social-link"
          />
        </Space>
      </Col>

      <Col xs={12} sm={12} md={5} lg={5}>
        <Title level={5} className="footer__col-title">Quick Links</Title>
        {QUICK_LINKS.map((link) => (
          <a href="#jewellery" className="footer__link" key={link}>{link}</a>
        ))}
      </Col>

      <Col xs={12} sm={12} md={5} lg={5}>
        <Title level={5} className="footer__col-title">Customer Care</Title>
        {SUPPORT_LINKS.map((link) => (
          <a href="#about" className="footer__link" key={link}>{link}</a>
        ))}
      </Col>

      <Col xs={24} sm={24} md={6} lg={6}>
        <Title level={5} className="footer__col-title">Contact Us</Title>
        <div className="footer__contact-item">
          <InstagramOutlined className="footer__contact-icon" />
          <a
            href="https://www.instagram.com/pinkpeacockvadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link--inline"
          >
            @pinkpeacockvadodara
          </a>
        </div>
        <div className="footer__contact-item">
          <MailOutlined className="footer__contact-icon" />
          <span>hello@pinkpeacock.in</span>
        </div>
        <div className="footer__contact-item">
          <PhoneOutlined className="footer__contact-icon" />
          <span>+91 95587 89007 / +91 98988 66756</span>
        </div>
        <div className="footer__contact-item">
          <EnvironmentOutlined className="footer__contact-icon" />
          <span>
            GF-2, Shreemad Flat, Nr Shankar Baug Society,
            Manjalpur Gam, Vadodara, 390011
          </span>
        </div>
      </Col>
    </Row>

    <div className="footer__bottom">
      <p>&copy; 2026 Pink Peacock. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
