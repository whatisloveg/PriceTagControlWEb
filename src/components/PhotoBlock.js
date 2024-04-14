import React from 'react';
import './PhotoBlock.css';

const PhotoBlock = () => {
  return (
    <div className="photo-block">
      <div className="photo">Фото</div>
      <div className="info">
        <input type="text" className="input-class" placeholder="Название магазина" />
        <input type="text" className="input-class" placeholder="Адрес магазина" />
        <input type="text" className="input-class" placeholder="Цена" />
        <input type="text"  className="input-class"placeholder="Название товара" />
      
      </div>
      <div className="buttons">
        <button>✓</button>
        <button>✗</button>
      </div>
    </div>
  );
};

export default PhotoBlock;
