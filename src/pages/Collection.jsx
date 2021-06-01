import React from 'react'
// components
import FiltersToolbar from '../components/FiltersToolbar/FiltersToolbar'
import CollectionGrid from '../components/CollectionGrid/CollectionGrid'
// assets
import { collectionItems } from '../data/collection'

const Collection = () => {
	return (
		<>
			<FiltersToolbar />
			<CollectionGrid products={collectionItems} />
		</>
	)
}

export default Collection
