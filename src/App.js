import React, { Component } from 'react';
import './App.css';
import someImg from "./images/logo.png";
import square1 from "./images/domain-search.png"
import square2 from "./images/shared-hosting.png"
import square3 from "./images/reseller-hosting.png"
import square4 from "./images/dedicated-server.png"
import square5 from "./images/vps-hosting.png"
import square6 from "./images/ssl-certificate.png"
import square7 from "./images/domain-transfer.png"
import square8 from "./images/email-hosting.png"
import user_comment from "./images/testi.png"

class App extends Component {
	render() {
		return (
			<div className="App">

				<div className="section1">
					<div className="wrapper_main_section1">
						<div className="header">
							<div className="header_wrapper">
								<ul className="contacts">
									<li className="mail">info@yourdemo.com</li>
									<li className="tel">+91 123-000-1234</li>
								</ul>
								<div className="authorization">
									<button className="login">
										<div className="icon"></div>
										<b>Login</b>
									</button>
									<button className="register">
										<div className="icon"></div>
										<b>Register</b>
									</button>
								</div>
							</div>
						</div>
						<div className="section1_wrapper">
							<div className="navigation">
								<div className="navigation_container">
									<div className="logo">
										<img src={someImg} alt="" />
									</div>
									<ul className="menu">
										<li className="item">DOMAIN
											{/* <div className="hereis">HERE IS JOHNY</div> */}
										</li>
										<li className="item">PRODUCTS</li>
										<li className="item">SSL CERTIFICATE</li>
										<li className="item">AFFILIATES</li>
										<li className="item">EMAIL</li>
										<li className="item">ABOUT US</li>
									</ul>
								</div>
							</div>
							<div className="main">
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

				<div className="domains">
					<div className="domains_wrapper">
						<div className="left">
							<form action="">
								<input name="domain_name" type="text" className="domain_input" placeholder="Enter Your Domain Name" />
								<select name="domain_select" className="domain_select">
									<option value="com">.com</option>
									<option value="net">.net</option>
									<option value="biz">.biz</option>
									<option value="mobi">.mobi</option>
									<option value="in">.in</option>
								</select>
								<button className="go">GO</button>
							</form>
						</div>
						<div className="right">
							<span className="title">Top Domains</span>
							<div className="blocks">
								<div className="domain">
									<span className="name">.com</span>
									<span className="price">$8.99</span>
								</div>
								<div className="domain">
									<span className="name">.in</span>
									<span className="price">$10.99</span>
								</div>
								<div className="domain">
									<span className="name">.ogr</span>
									<span className="price">$12.99</span>
								</div>
								<div className="domain">
									<span className="name">.biz</span>
									<span className="price">$13.99</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section2">
					<div className="section2_wrapper">
						<div className="title_wrapper">
							<div className="title">POWERFUL <b>HOSTING SOLUTIONS</b> THAT GROW WITH YOU.</div>
							<span className="undertitle">More recently with desktop publishing software like Aldus PageMaker including versions.</span>
						</div>
						<div className="square_wrapper">
							<div className="square">
								<img src={square1} alt="" />
								<h6 className="square_name">Domain Search</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
							<div className="square">
								<img src={square2} alt="" />
								<h6 className="square_name">Shared Hosting</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
							<div className="square">
								<img src={square3} alt="" />
								<h6 className="square_name">Reseller Hosting</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
							<div className="square">
								<img src={square4} alt="" />
								<h6 className="square_name">Dedicated Server</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
							<div className="square">
								<img src={square5} alt="" />
								<h6 className="square_name">VPS Hosting</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
							<div className="square" >
								<img src={square6} alt="" />
								<h6 className="square_name">SSL Certificate</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
							<div className="square">
								<img src={square7} alt="" />
								<h6 className="square_name">Domain Transfer</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
							<div className="square">
								<img src={square8} alt="" />
								<h6 className="square_name">Email Hosting</h6>
								<p className="square_text">More recently with desktop publishing software like Aldus PageMaker including versions.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="section3">
					<div className="section3_wrapper">
						<h3 className="title">READY TO GET STARTED?</h3>
						<span className="undertitle">Take your first step and call us at <b>1-888-545-3942</b>, chat with us, or
						<a href="http://google.com"> Search Your Perfect Domain </a>
							today. We're available 24×7!</span>
					</div>
				</div>

				<div className="section4">
					<div className="section4_wrapper">
						<div className="title">SIGNING UP IS <b>EASY</b>!</div>
						<div className="block_grid">
							<div className="block">
								<div className="circle">☘</div>
								<div className="block_title">CHOOSE A PLAN</div>
								<div className="text">Lorem Ipsum as their model and search will uncover many versions over the years.Lorem Ipsum as their model and search many versions over the years.</div>
							</div>
							<div className="block">
								<div className="circle">🟔</div>
								<div className="block_title">CHOOSE LOCATION</div>
								<div className="text">Lorem Ipsum as their model and search will uncover many versions over the years.Lorem Ipsum as their model and search many versions over the years.</div>
							</div>
							<div className="block">
								<div className="circle">❀</div>
								<div className="block_title">RECEIVE LOGIN DETAILS</div>
								<div className="text">Lorem Ipsum as their model and search will uncover many versions over the years.Lorem Ipsum as their model and search many versions over the years.</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section5">
					<div className="section5_wrapper">
						<div className="price">
							<h2 className="title">SHARED</h2>
							<div className="in_month">
								<sup>$</sup>
								<span>18.00</span>
								<span className="per_month">Per month</span>
							</div>
							<ul className="instructions">
								<li className="text">Concurrent Domain</li>
								<li className="text">Theme Updates</li>
								<li className="text">500 GB Disk Space</li>
								<li className="text">100 Databases List</li>
								<li className="text">Free Domain Registration</li>
								<li className="text">1 Hosting Space</li>
							</ul>
							<button className="order">ORDER NOW</button>
						</div>
						<div className="price">
							<h2 className="title">RESELLER</h2>
							<div className="in_month">
								<sup>$</sup>
								<span>150.00</span>
								<span className="per_month">Per month</span>
							</div>
							<ul className="instructions">
								<li className="text">Concurrent Domain</li>
								<li className="text">Theme Updates</li>
								<li className="text">500 GB Disk Space</li>
								<li className="text">100 Databases List</li>
								<li className="text">Free Domain Registration</li>
								<li className="text">1 Hosting Space</li>
							</ul>
							<button className="order">ORDER NOW</button>
						</div>
						<div className="price">
							<h2 className="title">DEDICATED</h2>
							<div className="in_month">
								<sup>$</sup>
								<span>1200.00</span>
								<span className="per_month">Per month</span>
							</div>
							<ul className="instructions">
								<li className="text">Concurrent Domain</li>
								<li className="text">Theme Updates</li>
								<li className="text">500 GB Disk Space</li>
								<li className="text">100 Databases List</li>
								<li className="text">Free Domain Registration</li>
								<li className="text">1 Hosting Space</li>
							</ul>
							<button className="order">ORDER NOW</button>
						</div>
						<div className="price">
							<h2 className="title">VPS</h2>
							<div className="in_month">
								<sup>$</sup>
								<span>1200.00</span>
								<span className="per_month">Per month</span>
							</div>
							<ul className="instructions">
								<li className="text">Concurrent Domain</li>
								<li className="text">Theme Updates</li>
								<li className="text">500 GB Disk Space</li>
								<li className="text">100 Databases List</li>
								<li className="text">Free Domain Registration</li>
								<li className="text">1 Hosting Space</li>
							</ul>
							<button className="order">ORDER NOW</button>
						</div>
					</div>
				</div>

				<div className="section6">
					<div className="section6_wrapper">
						<div className="title">
							WHY CHOOSE <b>WEB HOSTING</b> FOR YOUR WEBSITE?
						</div>
						<div className="reasons">
							<div className="left">
								<div className="reason_left">
									<div className="circle">✐</div>
									<div className="info">
										<div className="name">Reliable Hardware</div>
										<div className="reson_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.</div>
									</div>
								</div>
								<div className="reason_left">
									<div className="circle">⛱</div>
									<div className="info">
										<div className="name">Unlimited Storage</div>
										<div className="reson_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.</div>
									</div>
								</div>
								<div className="reason_left">
									<div className="circle">🌦</div>
									<div className="info">
										<div className="name">Scalability Fit Your Needs</div>
										<div className="reson_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.</div>
									</div>
								</div>
							</div>
							<div className="right">
								<div className="reason_right">
									<div className="info">
										<div className="name">24/7 Secure Monitoring</div>
										<div className="reson_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.</div>
									</div>
									<div className="circle">🗺</div>
								</div>
								<div className="reason_right">
									<div className="info">
										<div className="name">Total Security</div>
										<div className="reson_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.</div>
									</div>
									<div className="circle">⯐</div>

								</div>
								<div className="reason_right">
									<div className="info">
										<div className="name">100% Uptime</div>
										<div className="reson_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy.</div>
									</div>
									<div className="circle">🖎</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section7">
					<div className="section7_wrapper">
						<div className="blocks">
							<div className="block_icon">👁</div>
							<div className="line"></div>
							<div className="block_numbers">4538</div>
							<div className="line"></div>
							<div className="block_text">Hostings Done</div>
						</div>
						<div className="blocks">
							<div className="block_icon">🖶</div>
							<div className="line"></div>
							<div className="block_numbers">3900</div>
							<div className="line"></div>
							<div className="block_text">Websites Created</div>
						</div>
						<div className="blocks">
							<div className="block_icon">🖻</div>
							<div className="line"></div>
							<div className="block_numbers">2000</div>
							<div className="line"></div>
							<div className="block_text">Unlimited Web</div>
						</div>
						<div className="blocks">
							<div className="block_icon">🏷</div>
							<div className="line"></div>
							<div className="block_numbers">95200</div>
							<div className="line"></div>
							<div className="block_text">Global Connections</div>
						</div>
					</div>
				</div>

				<div className="section8">
					<div className="section8_wrapper">
						<div className="title">WHAT OUR CLIENTS <b>SAY</b>!</div>
						<div className="feedback_container">
							<div className="feedback">
								<div className="user"><img src={user_comment} alt="" /></div>
								<div className="comment">
									<div className="comment_text">
										Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled specimen book.
										Lorem Ipsum has been the industry's.
								</div>
									<div className="under_text">Client Name | Company</div>
								</div>
							</div>
							<div className="feedback">
								<div className="user"><img src={user_comment} alt="" /></div>
								<div className="comment">
									<div className="comment_text">
										Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled specimen book.
										Lorem Ipsum has been the industry's.
									</div>
									<div className="under_text">Client Name | Company</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section9">
					<div className="section9_wrapper">
						<form className="form_wrapper" action="">
							<div className="title">SIGN UP TO OUR NEWSLETTER</div>
							<div className="input_container">
								<input className="input_email" type="email" placeholder="Enter Your Email Address" />
								<button className="submit">SEND</button>
							</div>
						</form>
					</div>
				</div>

				<div className="section10">
					<div className="section10_wrapper">
						<div className="list">
							<div className="title">Our Services</div>
							<ul>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
						<div className="list">
							<div className="title">Who We Are</div>
							<ul>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
						<div className="list">
							<div className="title">Other Services</div>
							<ul>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
						<div className="list">
							<div className="title">Contact Us</div>
							<ul>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer">
					<div className="footer_wrapper">
						<ul className="left">
							<li className="card">€</li>
							<li className="card">£</li>
							<li className="card">©</li>
							<li className="card">®</li>
							<li className="card">§</li>
						</ul>
						<ul className="right">
							<li className="card">❦</li>
							<li className="card">♔</li>
							<li className="card">♘</li>
							<li className="card">✡</li>
							<li className="card">☭</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
