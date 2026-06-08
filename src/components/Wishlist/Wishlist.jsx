import React, { useState } from 'react';
import { Drawer, Button, Empty, Typography, Checkbox } from 'antd';
import { DeleteOutlined, InstagramOutlined } from '@ant-design/icons';
import './Wishlist.scss';

const { Title, Text } = Typography;

const Wishlist = ({ open, items, onRemove, onOrderSelected, onClose }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectAll = (e) => {
    setSelectedIds(e.target.checked ? items.map((item) => item.id) : []);
  };

  const handleToggle = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedItems = items.filter((item) => selectedIds.includes(item.id));

  return (
    <Drawer
      title={`My Wishlist (${items.length})`}
      placement="right"
      onClose={onClose}
      open={open}
      width={400}
      footer={
        items.length > 0 && (
          <div className="wishlist__footer">
            <Button
              type="primary"
              size="large"
              icon={<InstagramOutlined />}
              block
              disabled={selectedItems.length === 0}
              onClick={() => onOrderSelected(selectedItems)}
            >
              Order Selected ({selectedItems.length}) via Instagram
            </Button>
          </div>
        )
      }
    >
      {items.length === 0 ? (
        <Empty description="Your wishlist is empty" style={{ marginTop: 60 }} />
      ) : (
        <div className="wishlist__items">
          <div className="wishlist__select-all">
            <Checkbox
              onChange={handleSelectAll}
              checked={selectedIds.length === items.length}
              indeterminate={selectedIds.length > 0 && selectedIds.length < items.length}
            >
              Select All
            </Checkbox>
          </div>

          {items.map((item) => (
            <div className="wishlist__item" key={item.id}>
              <Checkbox
                checked={selectedIds.includes(item.id)}
                onChange={() => handleToggle(item.id)}
              />
              <img
                src={item.image}
                alt={item.name}
                className="wishlist__item-image"
              />
              <div className="wishlist__item-info">
                <Title level={5} className="wishlist__item-name">{item.name}</Title>
                <Text className="wishlist__item-price">₹{item.price.toLocaleString()}</Text>
              </div>
              <Button
                type="text"
                danger
                size="small"
                icon={<DeleteOutlined />}
                onClick={() => {
                  onRemove(item.id);
                  setSelectedIds((prev) => prev.filter((i) => i !== item.id));
                }}
              />
            </div>
          ))}
        </div>
      )}
    </Drawer>
  );
};

export default Wishlist;
