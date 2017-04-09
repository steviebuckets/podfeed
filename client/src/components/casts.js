import React from 'react';

export function Podcast(props) {
    const {podcast} = props;

    return (
        <div className="podcast">
            {podcast.name}
            {podcast.slug}
        </div>
    )
}

export function PodcastList(props) {
    const {podcasts, addPodcast, addPodcastName} = props;

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if (isEnterKey && isLongEnough) {
            input.value = '';
            addPodcastName(text);

            const podcastName = input.value;
            this.props.dispatch(actions.fetchDescription(podcastName));
        }
    };

// const toggleClick = id => event => toggleTodo(id);
    return (
    <div className='podcast'>
      <input type='text'
             className='podcast__entry'
             placeholder='Search Podcasts'
             onKeyDown={onSubmit} />
      <ul className='podcast__list'>
        {podcasts.map(p => (
          <li key={p.get('id')}
              className='podcast__item'
              onClick={toggleClick(p.get('id'))}>
            <Podcast podcast={p.poJS()} />
          </li>
        ))}
      </ul>
    </div>
  );
}
