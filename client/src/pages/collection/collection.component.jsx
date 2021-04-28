import React from 'react';
import {connect} from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

import './collection.styles.scss'

const CollectionPage = ({collections}) => {
    console.log(collections)
    const {title, items} = collections;
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

//ownProps, is an option second parameter for mapStateToProps that gets the props from the component we are connecting
const mapStateToProps = (state, ownProps) => ({
    collections: selectCollection(ownProps.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(CollectionPage);