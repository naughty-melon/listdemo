import React,{ Component } from 'react';
import { Table,Button,Popconfirm } from 'antd';
import { connect } from 'dva';
import UserModal from './create';
import EditModal from './edit';
import InputSearch from './search';
import styles from './user.css';
import { Link } from 'dva/router';

class UserTable extends Component{

    constructor(props){
        super(props);
        this.state={
            searchlist:0,
            current:1,
            pageSize:5
        }
        // console.log(this.state)
    }

    render(){
        const timestampToTime=(timestamp)=>{
            var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            // var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':' ;
            // var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':' ;
            // var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
            // return Y+M+D+h+m+s;
            return Y+M+D;
        }
        const { searchlist } = this.state;
        const { list } = this.props;

        const createUser = (user) =>{
            // console.log(user.time[0]._d)
            // user.time1=user.time[0]._d;
            // console.log(timestampToTime(user.time[0]._d))
            user.time1 = timestampToTime(user.time[0]._d);
            user.time2 = timestampToTime(user.time[1]._d);
            delete user.time
            // console.log(user)
            this.props.dispatch({
                type:'user/create',
                payload:{
                    user
                }
            });
        };
    
        const handleEdit = (index,user) => {
            // console.log(index)
            user.time1 = timestampToTime(user.time[0]._d);
            user.time2 = timestampToTime(user.time[1]._d);
            // delete user.time
            this.props.dispatch({
              type: 'user/edit',
              payload: { index,user },
            });
        };
    
        const handleDel = (index) => {
            // console.log(index)
            this.props.dispatch({
                type:'user/delete',
                payload:{ index },                   
            });
        };

        // // const now = new Date();
        // const now = new SimpleDateFormat("yyyy-mm-dd").format(new Date());
        // // console.log(Date.parse(new Date().replace(/-/g,   "/")))
        // console.log(now)

        const pagination ={
            pageSize:this.state.pageSize,
            onChange:(page)=>{
                this.setState({
                    current:page
                })
            },
            current:this.state.current,
        }

        const columns=[
            {
                title:'公告标题',
                dataIndex:'title',
                key:'title',
            },
            {
                title:'创建人',
                dataIndex:'name',
                id:'name',
            },
            {
                title:'有效期限',
                render:(record) => (                                    
                    <div>
                        <span>{record.time1}</span>至
                        <span>{record.time2}</span>
                    </div>
                )
            },        
            {
                title:'是否过期',
                dataIndex:'due',
                id:'due',
                width:100,
            },
            {
                title:'操作',
                dataIndex:'action',
                id:'action',
                width:200,
                render: (text, record, index) => (
                    
                    <Button.Group type="ghost">
                        
                        <EditModal index={index} record={record} ok={ handleEdit } current={this.state.current} pageSize={this.state.pageSize}>
                            {/* {console.log(record)} */}
                            <Button size="small" className={styles.edit}>编辑</Button>
                        </EditModal>

                        <Popconfirm
                            className={styles.delete}
                            title="确定要删除吗?"
                            okText="确定"
                            cancelText="取消"
                            onConfirm={ () => handleDel((this.state.current-1)*this.state.pageSize+index) }>
                            <Button size="small">删除</Button>
                            {/* {console.log((this.state.current-1)*3+index)} */}
                        </Popconfirm>
                        <Button size="small" record={record}>
                            {/* <Link to={`./details/${index}`}>查看</Link> */}
                            <Link to={`./details/${JSON.stringify({index:index,current:this.state.current,pageSize:this.state.pageSize})}`}>查看</Link>
                            {/* <Link to={'./details/'+ index + '&' + record.time1}>查看</Link> */}
                            {/* <Link to={{ pathname: ' /details' , query : { id: 'index' }}}>查看</Link> */}
                            {/* {console.log(index)} */}
                        </Button>
                    </Button.Group>
                )
            }
        ];
        
        const inputSearch = (searchList) => {
            // console.log(searchList)
            this.setState({
                searchlist: searchList 
            });
            // console.log(this.state.searchlist)
            // console.log(searchlist)
        }

        
    
        return (
            <div className={styles.content}>
                <div className={styles.new} style={{position:'relative'}}>
                    <InputSearch list={list} inSearch={ inputSearch }/>
                    <UserModal record={ {} } ok={ createUser }>
                        <Button type="primary" className={styles.create}>创建</Button>
                    </UserModal>                
                </div>
                <Table 
                    // size="small"
                    bordered
                    columns={ columns }
                    dataSource={ searchlist ? searchlist : list }
                    // searchlist ? searchlist : 
                    // dataSource={ list }
                    rowKey={ t=>t.title }
                    pagination={ pagination }
                >
                </Table> 
                {/* <Pagination current={this.state.current} onChange={onChange} pageSize={3}/> */}
                {/* {console.log(typeof(searchlist))} */}
                {/* {console.log(list)} */}
            </div>
        );
    }
}

export default connect(({ user }) => {

    // console.log(user);
    return {
        list: user.list
    };
})(UserTable);