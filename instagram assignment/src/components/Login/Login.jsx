import './Login.css';
import {Link} from 'react-router-dom'

const Login=({src,alt,height,width})=>{

    return(
<div className='container'>
    <div>
    <img className='logo' src={src} alt={alt} height={height} width={width} />
    </div>
        
        <div className='inputs'>
            <input className='input userName' type='text' placeholder='Phone number, Username or Email' />
            <input className='input password' type='password' placeholder='Password' />

            <button className=' input button'>Sign in</button>
            <p className='text'>Dont have an account? <Link to="/signup" className='clickable' >Sign up</Link></p>

        </div>
    </div>
    )
}

export default Login;