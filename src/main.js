import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Career } from './career.js';
import { Publications } from './publications.js';

// The flex setting makes the main element use up the rest of the page after
// the header and footer. The overflow adds a scrollbar to the content instead
// of the whole page and keeps the header and footer fixed. The padding spaces
// any containers within the main element.
const StyledMain = styled.main`
  flex 1;
  overflow-y: auto;
  padding: 1.5rem;
`;

export function Main({ onThemeChange }) {
  return (
    <StyledMain>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Career />} />
          <Route path="/pubs" element={<Publications />} />
        </Routes>
      </BrowserRouter>
    </StyledMain>
  );
}
