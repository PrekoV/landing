import React, { Component } from 'react';
import user_comment from "../../images/testi.png"

class Feedback extends Component {
    render() {
        return (
            <div className="Feedback">
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

        )
    }
}
export default Feedback