import React, { Component } from 'react';
import API from '../../api/api';


class HostingSolutions extends Component {

    state = {
        file: '',
        hostingSolutions: [],
        discription: '',
        title: '',
        isFileUploaded: false
    }

    setUpData = (e) => {
        switch (e.target.name) {
            case 'file':
                this.setState({
                    [e.target.name]: e.target.files[0],
                    isFileUploaded: true
                })
                break
            default: this.setState({ [e.target.name]: e.target.value })
        }
    }

    sendFile = e => {
        e.preventDefault()
        if (this.state.file !== '' && this.state.discription !== '' && this.state.title !== '') {
            let formData = new FormData();
            formData.append('discription', this.state.discription);
            formData.append('title', this.state.title);
            formData.append('file', this.state.file);
            API('POST', 'download', formData, true).then(result => {
                let a = this.state.hostingSolutions
                a.concat(result)
                console.log(a.concat(result))
                this.setState({
                    hostingSolutions: a.concat(result),
                    isFileUploaded: false,
                    title: '',
                    discription: ''
                })
            })
            console.log(this.state.hostingSolutions)
        } else {
            this.setState({
                title: 'You have to input title!',
                discription: 'You have to input discription!'
            })
        }

    }

    componentDidMount = () => {
        API('GET', 'data').then(data => {
            this.setState({
                hostingSolutions: data.hostingSolutions
            })
        })
    }

    render() {
        return (
            <div className="HostingSolutions">
                <div className="section2_wrapper">
                    <div className="title_wrapper">
                        <div className="title">POWERFUL <b>HOSTING SOLUTIONS</b> THAT GROW WITH YOU.</div>
                        <span className="undertitle">More recently with desktop publishing software like Aldus PageMaker including versions.</span>
                    </div>
                    <div className="square_wrapper">
                        {
                            this.state.hostingSolutions.map((item, id) => {
                                return (
                                    <div key={id} className="square">
                                        <img src={item.icon} alt="" />
                                        <h6 className="square_name">{item.title}</h6>
                                        <p className="square_text">{item.discription}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <form encType="multipart/form-data" onSubmit={this.sendFile}>
                        Offer your oun Hosting Solution!
                        <input type="text" placeholder="input title" name="title" onChange={this.setUpData} value={this.state.title} />
                        <input type="text" placeholder="input discription" name="discription" onChange={this.setUpData} value={this.state.discription} />
                        <div className="file_label_wrapper">
                            <input type="file" id="file" name="file" onChange={this.setUpData} style={{ display: 'none' }} />
                            <label id="file_label" htmlFor="file" >
                                {this.state.isFileUploaded ?
                                    'Your file is ' + this.state.file.name
                                    : 'Click here to upload the file'}
                            </label>
                            <button >SEND FILE</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HostingSolutions