import faker from 'faker';
import Story from './Story';

import { useEffect, useState } from 'react';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  console.log(suggestions);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.createCard(),
      id: i,
      avatar: faker.image.abstract(1234, 2345, true),
    }));

    setSuggestions(suggestions);
  }, []);
  return (
    <div className="scrollbar-thin scrollbar-thumb-black flex space-x-2 p-6 overflow-x-scroll bg-white mt-8 border border-gray-200">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
}

export default Stories;
