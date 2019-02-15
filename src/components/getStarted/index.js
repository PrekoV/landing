import React, { Component } from 'react';

class GetStarted extends Component {
    render() {
        const { getStarted } = this.props
        return (
            <div className="GetStarted" style={{ backgroundImage: `url(${getStarted.wallpaper})` }}>
                <div className="section3_wrapper">
                    <h3 className="title">READY TO GET STARTED?</h3>
                    <span className="undertitle">Take your first step and call us at <b>1-888-545-3942</b>, chat with us, or
						<a href={getStarted.url}> Search Your Perfect Domain </a>
                        today. We're available 24×7!</span>
                </div>
            </div>
        )
    }
}

export default GetStarted