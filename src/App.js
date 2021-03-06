
import { ChatEngine } from 'react-chat-engine';



import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {
    require(`dotenv`).config();
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height = "100vh"
            projectID={process.env.PROJECT_ID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed= { (chatAppProps) => <ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;