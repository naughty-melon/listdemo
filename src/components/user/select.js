import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function Due(){
    return (
        <Select defaultValue="yes" style={{ width: 120 }} onChange={handleChange}>
            <Option value="yes">是</Option>
            <Option value="no">否</Option>
        </Select>
    )
}

export default Due;