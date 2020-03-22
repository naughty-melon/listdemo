import React,{ Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class InputSearch extends Component{  

    onSearch = (value) => {
        const result = this.props.list.filter(item => item.title.indexOf(value) >= 0)
        // console.log(result)
        this.props.inSearch(result)
    }


    render () {

        return (
            <div>
                <div>
                    <Search
                        placeholder="输入标题搜索"
                        onSearch={value => this.onSearch(value)}
                        style={{ width: 200 }}
                        autoFocus
                    />
                </div>               
            </div>           
        )
    }
}

export default InputSearch;