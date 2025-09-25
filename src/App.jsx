import { Button, Input, Space, Typography, DatePicker } from 'antd'
import "antd/dist/reset.css";
import './App.css';
import './override.scss'

function CustomInput1 () {
  return (
    <div className='customInput1'>
      <Input placeholder='Type Here'></Input>;
    </div>
  )
}

function CustomInput2 () {
  return (
    <div className='customInput2'>
      <Input placeholder='Type Here'></Input>;
    </div>
  )
}


const App = () => {
  return (
   
    <div className='App'>
      <header className='App-header'>
       <Space size={12} direction='vertical'>
        <Typography.Text className="header">
          Code With Hasso
        </Typography.Text>
        <span className='welcomeMessage'>
          <Typography.Text>
            Welcome Back!
          </Typography.Text>
        </span>
        <CustomInput1/>
        <CustomInput2/>
        <Button>Button</Button>
    <DatePicker style ={{width: "100%"}} open= {true}  classNames={{
    popup: {
      root: "datePickerCell"
    }
  }}/>
</Space>
      </header>

    </div>
    
  )
}

export default App