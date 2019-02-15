import React, { Component } from 'react';
import './App.css';
import Slider from './components/slider'
import Domain from "./components/domains"
import HostingSolutions from './components/hostingSolutions';
import GetStarted from './components/getStarted';
import SigningUp from './components/signingUp';
import Prices from './components/prices';
import ChooseWebHosting from './components/chooseWebHosting';
import HostingIcons from './components/hostingIcons';
import Feedback from './components/feedback';
import SubscribeOnNews from './components/subscribeOnNews';
import PreFooter from './components/preFooter';
import Footer from './components/footer';
import API from './api/api';

class App extends Component {
	state = {
		slider: { contacts: { tel: '', email: '' }, menu: [], wallpaper: '', logo: '' },
		domains: [],
		hostingSolutions: [],
		getStarted: { url: '', wallpaper: '' },
		signingUp: [],
		prices: [],
		chooseWebHosting: {},
		hostingIcons: {},
		feedback: {},
		subscribeOnNews: [],
		preFooter: {},
		footer: {}
	}

	componentDidMount = () => {
		API('GET', 'data').then(data => {
			console.log(data)
			this.setState({
				slider: data.slider,
				domains: data.domains,
				hostingSolutions: data.hostingSolutions,
				getStarted: data.getStarted,
				signingUp: data.signingUp,
				prices: data.prices,
				chooseWebHosting: data.chooseWebHosting,
				hostingIcons: data.hostingIcons,
				feedback: data.feedback,
				subscribeOnNews: data.subscribeOnNews,
				preFooter: data.preFooter,
				footer: data.footer
			})
		})
	}

	render() {
		const { slider, domains, hostingSolutions, getStarted, signingUp,
			prices, chooseWebHosting, hostingIcons, feedback, subscribeOnNews,
			preFooter, footer } = this.state
		console.log(this.state.slider.wallpaper)
		return (
			<div className="App">

				<Slider slider={slider} />
				<Domain domains={domains} />
				<HostingSolutions hostingSolutions={hostingSolutions} />
				<GetStarted getStarted={getStarted} />
				<SigningUp signingUp={signingUp} />
				<Prices prices={prices} />
				<ChooseWebHosting chooseWebHosting={chooseWebHosting} />
				<HostingIcons hostingIcons={hostingIcons} />
				<Feedback feedback={feedback} />
				<SubscribeOnNews subscribeOnNews={subscribeOnNews} />
				<PreFooter preFooter={preFooter} />
				<Footer footer={footer} />

			</div>
		);
	}
}

export default App;
