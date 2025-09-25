import { Space, Typography } from 'antd'
import "antd/dist/reset.css";
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header>
        <Typography.Text className="header">
          Code With Hasso
        </Typography.Text>
        <span className='welcomeMessage'>
          <Typography.Text>
            Welcome Back!
          </Typography.Text>
        </span>

      </header>

    </div>
  )
}

export default App