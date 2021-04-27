import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({collections}) => {
    
    return (
        <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionsOverview key={id} {...otherCollectionProps}/>
                        )
                    })
            }
        </div>
    )
}

export default ShopPage;