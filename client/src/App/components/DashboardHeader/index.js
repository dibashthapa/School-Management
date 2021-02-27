import styled from 'styled-components';

const DashboardHeader = styled.div`
  margin-bottom: ${(p) => p.theme.space.bottom}px;
  color: ${(p) => p.theme.colors.dark};
  font-weight: 700;
  padding: 10px 20px;
  font-size: 25px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  position: relative;

  .dashboard-title {
    margin-left: 15px;
  }

  .dashboard-create--button {
    font-weight: 600;
    font-size: 15px;
    border-radius: 25px;
    border: 1px solid ${(p) => p.theme.colors.primary};
    padding: 5px 10px;
    color: ${(p) => p.theme.colors.primary};
    cursor: pointer;

    &:hover {
      background-color: ${(p) => p.theme.colors.primary};
      color: ${(p) => p.theme.colors.white};
    }
  }
`;

export default DashboardHeader;
