import React, { Component } from 'react';

class Domains extends Component {

	render() {
		const { domains } = this.props
		console.log(domains)
		return (
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
							{
								domains.map((item, id) => {
									return (
										<div key={id} className="domain">
											<span className="name">{item.name}</span>
											<span className="price">{item.price}</span>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Domains