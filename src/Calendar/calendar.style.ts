import styled from "styled-components";

export const Container = styled.div`
  height: 75vh;
  overflow-y: auto;
  background-color: #fcfcfc;
  box-shadow: 0px 5px #fcfcfc;
  padding: 20px;
`;

export const MonthContainer = styled.div`
  padding-bottom: 2rem;
`;

export const MonthHeader = styled.h3`
  text-align: center;
  margin: 2rem 0;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  height: 40px;
`;

export const WeekDay = styled.div`
  padding: 5px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.div<{
  $isInRange: boolean;
  $isStartDate: boolean;
  $isEndDate: boolean;
  $isWeekend: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  margin: 2px auto;
  cursor: pointer;
  position: relative;
  z-index: 1;
  color: ${(props) =>
    props.$isStartDate || props.$isEndDate
      ? "white"
      : props.$isWeekend
      ? "#f20014"
      : "black"};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 40px;
    background-color: ${({ $isInRange }) => ($isInRange ? "#E7F0FF" : "unset")};
    margin-left: ${({ $isStartDate }) => ($isStartDate ? "50%" : "unset")};
    margin-right: ${({ $isEndDate }) => ($isEndDate ? "50%" : "unset")};
    z-index: -1;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    ${(props) =>
      props.$isStartDate || props.$isEndDate
        ? `
        width: 40px;
        height: 40px;
        background-color: #4E94F8;
        border-radius: 50%;`
        : `background-color: transparent;`}
  }
`;
