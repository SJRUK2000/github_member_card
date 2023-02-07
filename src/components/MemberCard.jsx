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

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;
const MemberCard = ({ member }) => {
    const [user, setUser] = useState({});
  
    useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch(`https://api.github.com/users/${member.login}`, { 
          headers: {
            Authorization: 'Bearer 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'
        }
      });
        const data = await response.json();
        setUser(data);
      };
      fetchUser();
    }, [member]);
  
    return (
      <MemberCardWrapper>
        <a href={user.html_url}>{user.login}</a>
        <Avatar src={user.avatar_url} alt={`Avatar for ${user.login}`} />
        {user.name && <p>Name: {user.name}</p>}
        {user.location && <p>Location: {user.location}</p>}
        {user.email && <p>Email: {user.email}</p>}
        <p>Number of Public Repositories: {user.public_repos}</p>
      </MemberCardWrapper>
    );
  };
  
  export default MemberCard;
