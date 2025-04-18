import React from 'react';
import { IData_SnippetNews } from '../types/interface';

const NewsComp: React.FC<IData_SnippetNews> = ({ 
     TI,, URL, DOM, KW, AU, CNTR
 }) => {
  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title">{TI}</div>

        <div className="card-sub">
          <div className="source">{DOM}</div>
          <div className="location">{CNTR}</div>
          <div className="author">{AU.join(', ')}</div>
        </div>
        <div className="tag-section">
          {KW.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>

        <div className="button-row">
          <button className="btn" onClick={() => window.open(URL, '_blank')}>Original Source</button>
          <button className="btn">View Duplicates</button>
        </div>
        <div className="duplicate">
          <div className="card-title">{TI}</div>
          <div className="card-sub">
            <div className="source">{DOM}</div>
            <div className="location">{CNTR}</div>
            <div className="author">{AU.join(', ')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsComp;
