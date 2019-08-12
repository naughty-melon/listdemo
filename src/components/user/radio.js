import React,{ Component } from 'react';
import { Radio } from 'antd';

class DouRadio extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.data,
        };
        // console.log(this.props)
    }   

    onChange = e => {
        // console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        },()=>{
            this.props.onValue(this.state.value);
            // console.log(this.state.value);
        });        
    };

    render() {        
        return (
            <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={"是"}>是</Radio>
                <Radio value={"否"}>否</Radio>
            </Radio.Group>
        );
    }
}

export default DouRadio;