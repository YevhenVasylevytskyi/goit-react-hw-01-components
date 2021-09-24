import ReactDom from 'react-dom';

const data = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const profiles = (
  <div className="profile">
    <div className="description">
      <img src={data.avatar} alt={data.name} className="avatar" />
      <p className="name">{data.name}</p>
      <p className="tag">{data.tag}</p>
      <p className="location">{data.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);

ReactDom.render(profiles, document.querySelector('#root'));
