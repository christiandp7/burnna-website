import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Styles
import 'react-lazy-load-image-component/src/effects/blur.css'
// swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)
