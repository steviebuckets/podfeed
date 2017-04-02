import 'isomorphic-fetch';

export const ADD_PODCAST = 'ADD_PODCAST'
export const addPodcast = podcast => ({
  type: ADD_PODCAST,
  podcast
});

export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const fetchDescriptionSuccess = (podcast, description) => ({
  type: FETCH_DESCRIPTION_SUCCESS,
  podcast,
  description
});

export const FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR';
export const fetchDescriptionError = (podcast, error) => ({
  type: FETCH_DESCRIPTION_ERROR,
  podcast,
  error
});

export const fetchDescription = podcast => dispatch => {

    const url = `https://api.mixcloud.com/search/?q=/${podcast}/&type=cloudcast`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>{

        dispatch(fetchDescriptionSuccess(podcast, data))
      }

    )
    .catch(error =>
        dispatch(fetchDescriptionError(podcast, error))
    );
};
