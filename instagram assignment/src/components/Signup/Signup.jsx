import './Signup.css';
import {Link} from 'react-router-dom'
const Signup=({src,alt,height,width})=>{
    return(
<div className='container'>
    <div>
    <img className='logo' src={src} alt={alt} height={height} width={width} />
    </div>
        
        <div className='inputs'>
            <input className='input mobileEmail' type='text' placeholder='Mobile number or Email' />
            <input className='input fullName' type='text' placeholder='Full Name' />
            <input className='input UserName' type='password' placeholder='Username' />
            <input className='input password' type='password' placeholder='Password' />
            

            <button className=' input button'>Sign up</button>
            <p className='text'>Have an account? <Link to='/' className='clickable'>Sign in</Link></p>

        </div>
    </div>
    )
}

export default Signup;