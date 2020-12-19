import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  padding: 5px 10px;
  background-color: ${(p) => p.theme.colors.white};
  width: 250px;
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);

  .sidebar--sticky {
    position: sticky;
    top: 0;
  }

  p {
    margin: 0;
  }

  .navigation {
    text-transform: uppercase;
    font-size: 12px;
    color: ${(p) => p.theme.colors.gray};
    margin:15px 5px;
    font-weight:bold;
  }

  .dashboard__avatar {
    margin-bottom: 5px;
    margin-top: 10px;
  }

  @media all and (${(p) => p.theme.media.tablet}) {
    position: fixed;
    left: ${(p) => (p.isOpen ? "0px" : "-200px")};
    top: 0;
    padding: 80px 25px;
    width: 200px;
    height: 100vh;
    z-index: 1;
    background-color: ${(p) => p.theme.colors.white};
    transition: 3s;
  }

  a {
    font-size: 15px;
    margin:10px 5px;
  }
`;

export const SidebarLinks = styled.div`
  a {
  margin-left:20px;
  }
  position:relative;
  i.dripicons-chevron-down{
    margin-left:auto;
  }
`;
