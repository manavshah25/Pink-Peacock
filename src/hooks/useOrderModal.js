import { useCallback } from 'react';
import { Modal, message } from 'antd';
import { InstagramOutlined } from '@ant-design/icons';

const INSTAGRAM_URL = 'https://www.instagram.com/pinkpeacockvadodara';

const buildDMMessage = (product, wishlistItems) => {
  let msg = `Hi! I'd like to order:\n\n`;
  msg += `• ${product.name} - ₹${product.price.toLocaleString()}\n`;

  const otherItems = wishlistItems.filter((item) => item.id !== product.id);
  if (otherItems.length > 0) {
    msg += `\nAlso interested in:\n`;
    otherItems.forEach((item) => {
      msg += `• ${item.name} - ₹${item.price.toLocaleString()}\n`;
    });
  }

  msg += `\nPlease let me know the availability and payment details. Thank you!`;
  return msg;
};

const buildAllItemsMessage = (items) => {
  let msg = `Hi! I'd like to order the following items:\n\n`;
  items.forEach((item) => {
    msg += `• ${item.name} - ₹${item.price.toLocaleString()}\n`;
  });
  const total = items.reduce((sum, item) => sum + item.price, 0);
  msg += `\nTotal: ₹${total.toLocaleString()}`;
  msg += `\n\nPlease let me know the availability and payment details. Thank you!`;
  return msg;
};

const showModal = (dmMessage) => {
  Modal.info({
    title: '🛍️ Order via Instagram',
    content: (
      <div style={{ padding: '8px 0' }}>
        <p style={{ marginBottom: 16, color: '#555' }}>
          Online ordering is coming soon! Send us a DM on Instagram with the message below to place your order.
        </p>
        <div style={{
          background: '#f5f5f5',
          borderRadius: 8,
          padding: 12,
          marginBottom: 16,
          fontSize: 13,
          whiteSpace: 'pre-wrap',
          maxHeight: 150,
          overflowY: 'auto',
          border: '1px solid #eee',
        }}>
          {dmMessage}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#c2185b',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: 24,
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            <InstagramOutlined /> DM @pinkpeacockvadodara
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText(dmMessage);
              message.success('Message copied! Paste it in Instagram DM');
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: '#fff',
              color: '#333',
              padding: '10px 20px',
              borderRadius: 24,
              fontWeight: 500,
              fontSize: 14,
              border: '1px solid #ddd',
              cursor: 'pointer',
            }}
          >
            📋 Copy Message
          </button>
        </div>
      </div>
    ),
    okText: 'Close',
    centered: true,
    width: 500,
  });
};

const useOrderModal = (wishlistItems) => {
  const orderSingle = useCallback((product) => {
    const dmMessage = buildDMMessage(product, wishlistItems);
    showModal(dmMessage);
  }, [wishlistItems]);

  const orderAll = useCallback(() => {
    if (wishlistItems.length === 0) return;
    const dmMessage = buildAllItemsMessage(wishlistItems);
    showModal(dmMessage);
  }, [wishlistItems]);

  const orderSelected = useCallback((selectedItems) => {
    if (selectedItems.length === 0) return;
    const dmMessage = buildAllItemsMessage(selectedItems);
    showModal(dmMessage);
  }, []);

  return { orderSingle, orderAll, orderSelected };
};

export default useOrderModal;
