import { Input, Space, Typography } from 'antd'
import "antd/dist/reset.css";
import './App.css';
import './override.scss'

const App = () => {
  return (
    <div className='App'>
      <header>
        <Typography.Text className="header">
          Code With Hasso
        </Typography.Text>
        <span className='welcomeMessage'>
          asdaasda
          <Typography.Text>
            Welcome Back!
          </Typography.Text>
        </span>
        <Input placeholder='aquamarine'></Input>

      </header>

    </div>
  )
}

export default App