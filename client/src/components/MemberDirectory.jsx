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
  /*An array to store the members data obtained from the API call.*/
  const [members, setMembers] = useState([]);
  /* The API uses a zero based index for pages and users */
  const [currentPage, setCurrentPage] = useState(0);
  /* state to hold error message */
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users?per_page=10&since=${currentPage}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch members with status code: ${response.status}`);
        }
        const data = await response.json();
        /* Store the API response data in the member state */
        setMembers(data);
        setError(null);
      } catch (err) {
        /* Store the error message in the error state */
        setError(err.message);
      }
    };
    fetchMembers();
    /* fetch users from API when component is first rendered and when `currentPage` prop changes */
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 19);
  };
/*the API uses the since parameter to filter the results to return users whose ID is greater than or equal to a specific value.
 incrementing the currentPage value by 19 moves to the next set of ten users whose ID is greater than the currentPage value.*/
  const goToPrevPage = () => {
    setCurrentPage(currentPage - 19);
  };

  return (
    <>
      {error && <p>An error occurred: {error}</p>}
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