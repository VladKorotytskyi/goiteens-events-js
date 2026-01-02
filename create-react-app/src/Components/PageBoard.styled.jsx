import styled from "styled-components";

export const BoardWrapper = styled.div`
  background: #e9ecef;
  padding: 24px;
  border: 2px solid #490076;
  border-radius: 6px;
`;

export const CardsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const Card = styled.div`
  background: #fde8d8;
  border: 2px solid #f0a36e;
  border-radius: 10px;
  padding: 16px;
  width: 220px;
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const AppTitle = styled.h1`
  background-color: #b4d9ff;
  border: 2px solid #4ba5ff;
  border-radius: 5px;
`;
export const Wrapper = styled.div`
  border: 2px solid gray;
  padding: 30px;
  background-color: white;
`;
