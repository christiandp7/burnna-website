import React, { createContext, useState } from 'react'

const DrawerContext = createContext(null)

export const DrawerContextProvider = ({ children }) => {
	const [cartOpen, setCartOpen] = useState(false)
	const [sizeGuideOpen, setSizeGuideOpen] = useState(false)
	return (
		<DrawerContext.Provider
			value={{
				cartOpen,
				setCartOpen,
				sizeGuideOpen,
				setSizeGuideOpen,
			}}>
			{children}
		</DrawerContext.Provider>
	)
}

export default DrawerContext
