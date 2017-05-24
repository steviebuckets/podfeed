import React from 'react';

export function Podcast (props) {

        //
        // this.podcast = "";
        // this.newSubscription = "";
        // this.subscribe = this.subscribe.bind(this);

    // const {podcast, someClickFunction} = props;

    // someClickFunction(event) {
    //   event.preventDefault();
    //
    // // this.props.podcast.key
    //
    //
    // }
    // function for adding podcasts on Subscribe
    // subscribe(event) {
    //     event.preventDefault()
    //     //identify the id of the podcast being clicked
    //     //on button click the id of the podcast
    //     const key = {
    //         podcast: this.props.podcast.key
    //     }
    //     // const data = this.props.podcast.key;
    //     // alert("Hello World")
    //     // console.log(this)
    //     this.props.newSubscription(key);
    //
    // }

        return (
            <div className="podcast">
                <a href={props.podcast.url} className="link">
                    <br/>
                    <img src={props.podcast.pictures.large} alt="cover"/>
                </a><br/>
            </div>
        )
}
// onClick={this.handleClick}

// import React from 'react';
// import {Link} from 'react-router';
//
//
// export function Register(props) {
//     let email = "";
//     let password = "";
//
//     const {verifyUser} = props;
//
//     const handleSubmit = (event) => {
//
//         event.preventDefault();
//
//         verifyUser({email, password});
//
//         console.log(localStorage);
//
//     }
//
//     return (
//       <div className='container-signin'>
//         <form action="/" onSubmit={handleSubmit} className="form">
//           <i className="fa fa-headphones fa-4x" aria-hidden="true"></i>
//             <h1>Pod Feed</h1>
//               <p>Welcome to Pod Feed. Please sign up if you don't already have a Pod Feed Account.</p>
//
//               <div className='field'>
//                   <input name='email' placeholder="Email" className="email" type="text" value={props.email} onChange={e => email = e.target.value}/>
//               </div>
//
//               <div className='field'>
//                   <input name='password' placeholder="Password" className="password" type="password" value={props.password} onChange={e => password = e.target.value}/>
//               </div>
//
//               <div><button type='submit' className="btn-signin" label='Log in'>Register</button></div>
//
//               <Link to="/signin"><p>Already have an account?</p></Link>
//
//           </form>
//       </div>
//
//     );
// }

  // <i className="fa fa-plus-circle fa-2x" aria-hidden="true" onClick={this.subscribe}></i>
