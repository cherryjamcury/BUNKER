import React, { useEffect, useRef, useState } from 'react';

async function fetchUser() {
    URL = 'https://randomuser.me/api/'

    const request = new Request(URL, {
        method:"GET"
    })
  const response = await fetch(request);
  const data = await response.json();
  return data.results[0];
}

export default function LoadModules() {
  const [users, setUsers] = useState([]);
  const containerRef = useRef(null);
const [loading, setLoading] = useState(false);
  // Initial load
  useEffect(() => {
    loadMoreUsers(10);
  }, []);

  const loadMoreUsers = async (count = 5) => {
    if (loading) return;
    setLoading(true)

    const newUsers = [];
    for (let i = 0; i < count; i++) {
      const user = await fetchUser();
      newUsers.push(user);
    }

    setUsers(prev => [...prev, ...newUsers]);
    setLoading(false)
  };

  // Scroll detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop >= (scrollHeight / 2 - clientHeight / 2)) {
        loadMoreUsers(5);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: '300px',
        overflowY: 'auto',
        width: '200px',
        background: '#f0f0f0',
        padding: '10px',
      }}
    >

{users.map((user, index) => (
  <div key={index} style={{ marginBottom: '10px' }}>
    <img
      src={user.picture.thumbnail}
      alt="user"
      style={{ width: 50, height: 50, borderRadius: '50%' }}
    />
    <p>{user.name.first} {user.name.last}</p>
  </div>
))}
{loading && <p>Loading...</p>}

    </div>
  );
}
