import styled from 'styled-components';

const Loading = styled.div`
  border: 16px solid  ${({ theme }) => theme.colors.contrastText};
  border-radius: 50%;
  border-top: 16px solid ${({ theme }) => theme.colors.primary};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} 
`;

export default Loading;
