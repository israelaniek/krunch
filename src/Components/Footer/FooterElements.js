import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 22px 0;
  background: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  padding: 15px;
`;
export const FooterLink = styled.a`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    color: #4d8cf5;
  }
`;
export const FooterCopyright = styled.h4`
  font-size: 14px;
  color: #777;
`;

export const AuthorSpan = styled.span`
  color: #4d8cf5;
`;
