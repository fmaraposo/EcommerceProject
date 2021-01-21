import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.styles.scss';

export const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          //Appear just 4 items for each Collection
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
