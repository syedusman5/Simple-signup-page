import useForm from '../Hooks/useForm';
import "./Form.css";
import { ToastContainer, toast } from 'react-toastify';

const FormSignUp = () => {
    const { handleChange, values, handleSubmit, } = useForm();

    return (
        <div className='form-container-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Ignite Your Journey: Create Your Account</h1>

                {/*user*/}
                <div className='form-input' >
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input type="text"
                        name='username'
                        id='username'
                        value={values.username}
                        className='forminput'
                        onChange={handleChange}
                        placeholder='Enter your username' />
                </div>

                {/*email*/}
                <div className='form-input'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type="text"
                        name='email'
                        id='email'
                        value={values.email}
                        className='forminput'
                        onChange={handleChange}
                        placeholder='Enter your email' />
                </div>

                {/*password*/}
                <div className='form-input'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type="password"
                        name='password'
                        id='password'
                        value={values.password}
                        className='forminput'
                        onChange={handleChange}
                        placeholder='Enter your password' />
                </div>


                {/*confirm password*/}
                <div className='form-input'>
                    <label htmlFor='password2' className='form-label'>Confirm Password</label>
                    <input type="password"
                        name='password2'
                        id='password2'
                        value={values.password2}
                        className='forminput'
                        onChange={handleChange}
                        placeholder='Re-enter your password' />
                </div>

                {/* Recaptcha part */}
                <div className="captcha">
                   
                </div>

            {/*footer*/ }
            <button className='form-input-btn' type='submit'>Sign up</button>
            <span className='form-input-login'>
                Already have an account ? Login <a href="#">here</a>
            </span>
            <ToastContainer/>
        </form >
    </div >
  )
}

export default FormSignUp
