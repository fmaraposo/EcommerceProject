import React from 'react'
import {connect} from 'react-redux';

import {PreviewCollection} from '../../components/preview-collection/preview-collection.component'
import {selectShopCollections} from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                        )
                    })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collections: selectShopCollections(state)
    }
    
}

export default connect(mapStateToProps)(CollectionsOverview);
