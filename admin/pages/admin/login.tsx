import React, { useEffect, useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux';
import { AppState, wrapper } from '../../store';
import { AuthLogin } from '../../store/actions/AuthAction';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user } = useSelector((state:AppState)=> state.AuthReducer);

    type State = {
        email: string,
        password: string,
        remember_me: boolean
    }
    const [state, setState] = useState<State>({
        email: '',
        password: '',
        remember_me: false
    });
    const handleInputs = (e:any) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleCheck = (e:any) =>{
        setState({
            ...state,
            [e.target.name]: e.target.checked,
        })
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        dispatch(AuthLogin(state));
    }
    useEffect(()=>{
        if(Object.keys(user).length !== 0){
            router.push("/admin/dashboard");
        }
    });
  return (
    <div className="login-box">
        <div className="login-logo">
            {/* <a href="../../index2.html"><b>Admin Panel</b></a> */}
        </div>
        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg"><h5>Sign In</h5></p>
            
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                <input type="email" name="email" value={state.email} className="form-control"  onChange={handleInputs} placeholder="Email"/>
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                    </div>
                </div>
                </div>
                <div className="input-group mb-3">
                <input type="password" name="password" value={state.password} className="form-control"  onChange={handleInputs} placeholder="Password"/>
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-8">
                    <div className="icheck-primary">
                    <input type="checkbox"  name="remember_me" onChange={handleCheck} id="remember"/>
                    <label htmlFor="remember">
                        Remember Me
                    </label>
                    </div>
                </div>
                {/* <!-- /.col --> */}
                <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
                {/* <!-- /.col --> */}

                </div>
                
            </form>

            <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                {/* <FacebookLogin
                    appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
                    autoLoad={false}
                    callback={responseFacebook}
                    render={renderProps => (
                        <button className="btn btn-block btn-success" onClick={renderProps.onClick}><i className="fab fa-facebook mr-2"></i>  Facebook</button>
                    )}
                    />
                    <GoogleLogin
                    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                    render={renderProps => (
                    <button className="btn btn-block btn-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fab fa-google mr-2"></i>  Google</button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> */}
            </div>
            {/* <!-- /.social-auth-links --> */}

            <p className="mb-1">
                {/* <NavLink to="/admin/forgot-password">I forgot my password</NavLink> */}
            </p>
            </div>
            {/* <!-- /.login-card-body --> */}
        </div>
    </div>
  );
}
export default Login;

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async (context)=>{
//     await context.store.dispatch(AuthLogin(context.req));
// }); 
// export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(
//     async (context) => {
//        context.store.dispatch(AuthLogin());
//    }
// )