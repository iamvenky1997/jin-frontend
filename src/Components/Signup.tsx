const Signup = () =>{
    return(
        <div>
            <div className="signup-container">
            <h1 className="form-heading">Registration Form</h1>  
            <form className='form-container'>
               <div>
                    <label htmlFor='signup-name' className="form-label">Name : </label>
                    <input type='email' id='signup-name' className="input-elements"></input>
                </div>
                <div>
                    <label htmlFor='signup-email' className="form-label">Email : </label>
                    <input type='email' id='signup-email' className="input-elements"></input>
                </div>
                <div>
                    <label htmlFor='signup-password' className="form-label">Password : </label>
                    <input type='password' id='signup-password' className="input-elements"></input>
                </div>
                <div>
                    <label htmlFor='signup-phone' className="form-label">Phone Number : </label>
                    <input type='number' id='signup-phone' className="input-elements"></input>
                </div>
                <div className='button-container'>
                    <button type="submit">Register</button>
                </div>
                
            </form>
        </div>
        </div>
    )
}

export default Signup