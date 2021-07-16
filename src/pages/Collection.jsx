import React from 'react'
// Layout
import MainLayout from '../layouts/MainLayout'
// components
import FiltersToolbar from '../components/FiltersToolbar/FiltersToolbar'
import CollectionGrid from '../components/CollectionGrid/CollectionGrid'
// assets
import { collectionItems } from '../data/collection'

const Collection = () => {
	return (
		<MainLayout>
			{/* <FiltersToolbar /> */}
			<CollectionGrid products={collectionItems} />
		</MainLayout>
	)
}

export default Collection
