import React from 'react';

export function LandingPage(props) {
    return (
        <div className="landing-content">
            <h1>All your podcasts, available in one place.</h1>
            <h2>Available anytime, anywhere.</h2>
        </div>
    )
}

export function SignIn(props) {
    return (
        <div className="login-container">
            <p>Welcome to Pod-Feed. Please sign in with your Pod-Feed Account to continue.</p>
            <div className="form-container">
            <form>
              <div className='form-group'>
                <label>Email<span>*</span>
                </label>

                <input className='form-control' type="email" id="email" name="email"></input><br/><br/>
              </div>
                <label>Password<span>*</span>
                </label>
                <input type="password" id="password" name="password"></input>

                <input type="submit" name="login-button" id="login" value="Sign in"></input>
                </form>
            </div>
        </div>
    )
}

export function Register(props) {
    return (
        <div className="register-container">
            <p>Welcome to Pod-Feed. Please sign up if you don't already have a Pod-Feed Account.</p>
            <div className="form-container">
                <label>Email<span>*</span>
                </label>
                <input type="email" id="email" name="email"></input><br/><br/>

                <label>Password<span>*</span>
                </label>
                <input type="password" id="password" name="password"></input>

                <input type="submit" name="login-button" id="login" value="Sign in"></input>
            </div>
        </div>
    )
}

export function Podcast(props) {
    console.log('my props', props)
    const {podcast} = props;
    const name = podcast.name;
    const imgUrl = podcast.pictures.large;
    return (
        <div className="podcast">
            {podcast.name}
            <img src={ imgUrl } alt=""/>
        </div>
    )
}

export function PodcastList(props) {
    // console.log(props, 'props');
    const {todos, addPodcast} = props;

    const onSubmit = (event) => {
        const input = event.target;
        const name = input.value;
        const isEnterKey = (event.which === 13);
        const isLongEnough = name.length > 0;
        if (isEnterKey && isLongEnough) {
            // console.log("my props", props)
            input.value = '';
            addPodcast(name);
            // fetchDescriptionSuccess(podcastName);
        }
    };

    return (
        <div className='podcast'>
            <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={onSubmit}/>
            <ul className='podcast__list'>
                {todos.map(podcast => (
                    <li key={podcast['slug']} className='podcast__item'>
                        <Podcast podcast={podcast}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}