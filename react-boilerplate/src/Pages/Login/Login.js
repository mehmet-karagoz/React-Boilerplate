import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase_config/firebase';
import { NavLink, useNavigate } from 'react-router-dom';

 
const Login = () => {
    const navigate = useNavigate();
  
    const initialValues = {
      email: '',
      password: ''
    };
  
    const validationSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required')
    });
  
    const onSubmit = (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/home');
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };
  
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
    });
  
    return (
      <>
        <main>
          <section>
            <div>
              <p>FocusApp</p>
  
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div>{formik.errors.email}</div>
                  )}
                </div>
  
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                  )}
                </div>
  
                <div>
                  <button type="submit">Login</button>
                </div>
              </form>
  
              <p className="text-sm text-white text-center">
                No account yet?{' '}
                <NavLink to="/signup">Sign up</NavLink>
              </p>
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default Login;
  