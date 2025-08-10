import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

// This component serves as a layout for the application, allowing for shared UI elements
// Outlet is used to render the child routes defined in the main App component
// This allows for a consistent layout across different pages of the application
// You can add navigation, headers, footers, or any other common elements here
// The Header and Sidebar components are included to provide a consistent navigation experience
// The main element is where the content of the child routes will be rendered
// The styling of the main element will apply to all child routes
// The children of the main element won't have a div wrapping them, but a fragment or a JSX element
// This is a convention for this application to keep styling consistent

//  overflow: scroll; - prevents the page from jumping when the form appears cause the scroll is already set.
