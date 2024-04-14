import React from 'react';
import './ExecutorPage.css';
import PhotoBlock from '../components/PhotoBlock';

const ExecutorPage = () => {
  return (
    <div className="executor-page">
      <div className="header">
        <h1>Контролируем цены вместе</h1>
        <h2>Статус: Исполнитель</h2>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <PhotoBlock />
      <PhotoBlock />
    </div>
  );
};

export default ExecutorPage;
