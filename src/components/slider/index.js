import React, { Component } from 'react';

class Slider extends Component {
	state = {
		isScroll: false
	}

	isScroll = () => {
		if (window.scrollY <= 100) {
			this.setState({ isScroll: false })
		} else if (window.scrollY > 100 && !this.state.isScroll) {
			this.setState({ isScroll: true })
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.isScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.isScroll);
	}

	render() {
		const { slider } = this.props
		console.log("render")
		return (
			<div className="slider" style={{ backgroundImage: `url(${slider.wallpaper})` }}>
				<div className="wrapper_main_section1">
					<div className="header">
						<div className="header_wrapper">
							<ul className="contacts">
								<li className="mail">{slider.contacts.email}</li>
								<li className="tel">{slider.contacts.tel}</li>
							</ul>
							<div className="authorization">
								<button className="login">
									<b>Login</b>
								</button>
								<button className="register">
									<b>Register</b>
								</button>
							</div>
						</div>
					</div>
					<div className="section1_wrapper">
						<div className={`navigation ${this.state.isScroll ? 'scroll' : ''}`}>
							<div className="navigation_container">
								<div className="logo">
									<img src={`${slider.logo}`} alt="" />
								</div>
								<ul className="menu">
									{
										slider.menu && slider.menu.map(item => {
											return (
												<li key={item} className={`item ${this.state.isScroll ? 'item_scroll' : ''}`}>{item}</li>
											)
										})
									}
								</ul>
							</div>
						</div>
						<div className={`main ${this.state.isScroll ? ' main_scroll' : ''}`}>
							<div className="main_container">
								<span className="title">VPS SERVERS</span>
								<span className="info">
									VPS Servers With Our Cloud Servers you have full root/administrator control of your cloud server and can run any operating system you like.
									</span>
								<button className="order">ORDER NOW</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Slider