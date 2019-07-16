import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;
export const TableHead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const TR = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;

  &:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
export const TH = styled.th`
  padding: 0.8rem;
  font-size: 0.8rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
`;

export const TD = styled.td`
  padding: 0.8rem;
`;

export const TableBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const LeaderboardWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 3.2rem 0.8rem;
`;
export const placeColors = ["#F5CD7599", "rgba(0,0,0,0.2)", "#C6906B99"];

const colors = place => {
  if (place < 4) return placeColors[place - 1];
  else return "rgba(0, 0, 0, 0.1)";
};

export const Place = styled.div`
  display: inline-flex;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: ${props => colors(props.place)};
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: relative;
  font-weight: 800;
  border: 2px solid ${props => colors(props.place)};
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
