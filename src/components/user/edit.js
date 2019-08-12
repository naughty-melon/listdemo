import React,{ Component } from 'react';
import { Modal,Form,Input } from 'antd';
import { DatePicker } from 'antd';
import DouRadio from './radio';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

const { RangePicker } = DatePicker;

class EditModal extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            due:this.props.record.due
        };
    }

    
    render(){
        const { children,form:{ validateFields,getFieldDecorator },index,current,record,ok }=this.props;

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

                val.due=this.state.due;
                // console.log(val);
                const id = (current-1)*this.props.pageSize+index;
                // console.log(id)
                ok(id,val);
                hideModal();
            });
        };

        return (
            <div>
                <span onClick={ showModal }>
                    { children }
                </span>
                <Modal
                    title="编辑公告"
                    visible={ this.state.visible }
                    onCancel={ hideModal }
                    onOk={ save }>
                    <Form>
                        <Form.Item label="公告标题">
                            {
                                getFieldDecorator('title',{
                                    initialValue:record.title
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label="公告内容">
                            {
                                getFieldDecorator('content',{
                                    initialValue:record.content
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label="创建人">
                            {
                                getFieldDecorator('name', {
                                    initialValue: record.name
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item label="有效期限">
                            {
                                getFieldDecorator('time', {
                                    initialValue:
                                    [moment(record.time1, dateFormat), moment(record.time2, dateFormat)] 
                                })(<RangePicker
                                    // defaultValue={}
                                    format={dateFormat}
                                    
                                  />)
                                  
                            }
                            {/* {console.log(record.time1)} */}
                        </Form.Item>
                        <Form.Item label="是否过期">
                            {
                                getFieldDecorator('due',{
                                    initialValue:record.due
                                })(<DouRadio onValue={onValue} data={record.due}/>)
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    };
}


export default Form.create()(EditModal);