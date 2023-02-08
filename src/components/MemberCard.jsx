import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MemberCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px;

  /* Width reduced for smaller screens */
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;

/* Avatar reduced for smaller screens */
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const MemberCard = ({ member }) => {
  /* state object to hold user information */
  const [user, setUser] = useState({});
  /* state to hold error message */
  const [error, setError] = useState(null);

  /* 
    make an API call to retrieve 
    information about the user using their `login` 
    as a path parameter in the API URL. 
  */

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${member.login}`, {
          headers: {
            Authorization: 'Bearer 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'
          }
        });
        if (!response.ok) {
          throw new Error(`Request failed with status code: ${response.status}`);
        }
        /* Store the API response data in the user state */
        const data = await response.json();
        setUser(data);
      } catch (error) {
        /* Store the error message in the error state */
        setError(error.message);
      }
    };
    fetchUser();
    /* fetch user data from API when component is first rendered and when `member` prop changes */
  }, [member]);

  return (
    <MemberCardWrapper>
      {/* If there was an error, show the error message */}
      {error ? (
        <p>An error occurred: {error}</p>
      ) : (
        <>
          {/* Show the user login and a link to their Github profile */}
          <a href={user.html_url}>{user.login}</a>
          <Avatar src={user.avatar_url} alt={`Avatar for ${user.login}`} />
          {/* Show the user's name, location and email if it's available */}
          {user.name && <p>Name: {user.name}</p>}
          {user.location && <p>Location: {user.location}</p>}
          {user.email && <p>Email: {user.email}</p>}
          {/* Show the number of public repositories the user has */}
          <p>Number of Public Repositories: {user.public_repos}</p>
        </>
      )}
    </MemberCardWrapper>
  );
};

export default MemberCard;
