import '../Styles/Signin.css'
const Signin =()=>{
    return(
        <div className="signin-container">
            <h1 className="form-heading">Login Form</h1> 
            
            <form className='form-container'>
                <div>
                    <label htmlFor='login-email' className="form-label">Email : </label>
                    <input type='email' id='login-email' className="input-elements"></input>
                </div>
                <div>
                    <label htmlFor='login-password' className="form-label">Password : </label>
                    <input type='email' id='login-password' className="input-elements"></input>
                </div>
                <div className='button-container'>
                    <button type="submit">Login</button>
                </div>
                
            </form>
        </div>
    )
}

export default Signin