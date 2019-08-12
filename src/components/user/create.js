import React,{ Component } from 'react';
import { Modal,Form,Input } from 'antd';
import { DatePicker } from 'antd';
import { connect } from 'dva';
import DouRadio from './radio';

const { RangePicker } = DatePicker;

// function onChange(date, dateString) {
//     return dateString;
// }

class UserModal extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            due:this.props.record.due,
            // id:11,
        };
    }
    
    render(){
        const { children,form:{ validateFields,getFieldDecorator },record,ok,list }=this.props;

        const showModal=()=>{

            this.setState({
                visible:true
            });
        };
        const hideModal=()=>{

            this.setState({
                visible:false
            });
        };

        const onValue = (value) =>{
            this.setState({
                due:value
            })
        }

        const save=()=>{

            validateFields((err,val)=>{
                //val ==> record
                
                // this.setState({
                //     id:this.state.id+1
                // })
                // val.id=this.state.id;
                val.due=this.state.due;
                console.log(val);
                ok(val);
                hideModal();
            });
        };

        // const formItemLayout = {
        //     labelCol: { span: 6 },
        //     wrapperCol: { span: 9 }
        // };

        return (
            <div>
                <span onClick={ showModal }>
                    { children }
                </span>
                <Modal
                    title="创建公告"
                    visible={ this.state.visible }
                    onCancel={ hideModal }
                    onOk={ save }>
                    <Form style={{padding:0,margin:0}}>
                        {/* <Form.Item label="公告标题"  {...formItemLayout}> */}
                        <Form.Item label="公告标题"> 
                            {
                                getFieldDecorator('title',{
                                    // initialValue:record.title
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label="公告内容">
                            {
                                getFieldDecorator('content',{
                                    // initialValue:record.content
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label="创建人">
                            {
                                getFieldDecorator('name', {
                                    // initialValue: record.name
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label="有效期限">
                            {
                                getFieldDecorator('time', {
                                    // initialValue: record.time
                                })(<RangePicker />)
                                // value={[moment(),moment()]}
                            }
                        </Form.Item>
                        <Form.Item label="是否过期">
                            {
                                getFieldDecorator('due',{
                                    // initialValue:record.due
                                })(<DouRadio onValue={onValue}/>)
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    };
}


export default connect(({user})=>{
    return{
        list:user.list
    }       
})(Form.create()(UserModal));