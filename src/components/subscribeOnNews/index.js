import React, { Component } from 'react';
// import API from '../../api/api';

class SubscribeOnNews extends Component {

    // state = {
    //     email: '',
    //     file: []
    // }

    // setUpData = (e) => {
    //     switch (e.target.name) {
    //         case 'file': this.setState({ [e.target.name]: e.target.files[0] })
    //             break
    //         default: this.setState({ [e.target.name]: e.target.value })
    //     }
    // }

    // submitInput = e => {
    //     e.preventDefault()
    //     console.log("button")
    //     this.setState({ email: '' })
    //     API('POST', 'data', { email: this.state.email }).then(res => {
    //         this.setState({ emailArray: res })
    //     })
    // }

    // sendFile = e => {
    //     e.preventDefault()
    //     let formData = new FormData();
    //     formData.append('file', this.state.file);
    //     //console.log(this.state.file)
    //     API('POST', 'download', formData, true).then(result => {
    //         console.log('RESULT', result)
    //         //this.setState({ file: file.concat(result) })
    //     })
    // }

    render() {
        //console.log(this.state.email)
        //const { subscribeOnNews } = this.props
        //console.log(this.state.emailArray)
        return (
            <div className="SubscribeOnNews">
                <div className="section9_wrapper">
                    <form className="form_wrapper" action="">
                        <div className="title">SIGN UP TO OUR NEWSLETTER</div>
                        <div className="input_container">
                            <input
                                className="input_email"
                                type="email"
                                name="email"
                                placeholder="Enter Your Email Address"
                            // onChange={this.setUpData}
                            // value={this.state.email}
                            />
                            <button className="submit"
                            // onClick={this.submitInput}
                            >SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default SubscribeOnNews