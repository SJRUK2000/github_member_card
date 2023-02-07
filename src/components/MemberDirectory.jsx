import React, { useState, useEffect } from "react";
import MemberCard from "./MemberCard";
import styled from "styled-components";

const MemberDirectoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

const MemberDirectory = () => {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch(
        `https://api.github.com/users?per_page=10&since=${currentPage}`
      );
      const data = await response.json();
      setMembers(data);
    };
    fetchMembers();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 19);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 19);
  };

  return (
    <>
      <MemberDirectoryWrapper>
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </MemberDirectoryWrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {currentPage > 0 && (
          <button onClick={goToPrevPage}>Previous Page</button>
        )}
        {members.length === 10 && (
          <button onClick={goToNextPage}>Next Page</button>
        )}
      </div>
    </>
  );
};

export default MemberDirectory;
