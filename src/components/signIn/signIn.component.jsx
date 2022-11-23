import React from 'react';
import './signIn.styles.scss'

import FormInput from '../formInput/formInput.component';
import CustomButton from '../custom-button/customButton.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange = event =>{
        const{value,name} = event.target;

        this.setState({[name]:value}); 
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name='email' 
                     type='email' 
                     handleChange={this.handleChange}
                     value={this.state.email} 
                     required
                     label='email' 
                     />

                    <FormInput
                     type='password' 
                     name='password' 
                     handleChange={this.handleChange} 
                     value={this.state.password} 
                     required 
                     label='password'
                     />
                     <div className="buttons">
                        <CustomButton type='submit'>
                            Sign in
                        </CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            SIGN in with google
                        </CustomButton>
                     </div>
                    
                </form>
            </div>
        )
    }


}

export default SignIn;