import React, { Component } from 'react';

class SigningUp extends Component {
    render() {
        const { signingUp } = this.props
        return (
            <div className="SigningUp">
                <div className="section4_wrapper">
                    <div className="title">SIGNING UP IS <b>EASY</b>!</div>
                    <div className="block_grid">
                        {
                            signingUp.map((item, id) => {
                                return (
                                    <div key={id} className="block">
                                        <div className="circle">{item.icon}</div>
                                        <div className="block_title">{item.title}</div>
                                        <div className="text">{item.discription}</div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="block">
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
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SigningUp