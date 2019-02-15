import React, { Component } from 'react';
import API from '../../api/api';


class HostingSolutions extends Component {

    state = {
        file: '',
        hostingSolutions: []
    }

    setUpData = (e) => {
        switch (e.target.name) {
            case 'file': this.setState({ [e.target.name]: e.target.files[0] })
                break
            default: this.setState({ [e.target.name]: e.target.value })
        }
    }

    sendFile = e => {
        e.preventDefault()
        console.log("hhhh")
        let formData = new FormData();
        formData.append('file', this.state.file);
        API('POST', 'download', formData, true).then(result => {
            console.log('RESULT', result)
            let a = [...this.state.hostingSolutions]
            a.concat(result)
            this.setState({ hostingSolutions: a })
        })
    }

    componentDidMount = () => {
        API('GET', 'data').then(data => {
            console.log(data)
            this.setState({
                hostingSolutions: data.hostingSolutions
            })
        }
        )
    }

    render() {
        console.log(this.state.array)
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

                    <div>
                        {
                            this.state.hostingSolutions.map((item, id) => {
                                //console.log(item[0].icon)
                                return (
                                    <div key={id}>
                                        <img src={item.icon} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <form enctype="multipart/form-data" onSubmit={this.sendFile}>
                        <input type="file" name="file" onChange={this.setUpData} />
                        <button >SEND FILE</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default HostingSolutions