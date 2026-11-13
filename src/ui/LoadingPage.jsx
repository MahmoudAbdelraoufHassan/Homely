import styled, { keyframes } from "styled-components"
import HouseLoader from "./HouseLoader"

const LoadingContainer = styled.div`
min-height : 100vh;
display : flex;
align-items : center;
justify-content : center;
`
const LoadingContentWrapper = styled.div`
display : flex;
flex-direction : column;
align-items : center;
text-align : center;
& h3 {
margin : 10px 0 20px;
}
`
const LoaderAnimation = keyframes`
    0% {
    transform: translateX(-90px);
    }
    100% {
    transform: translateX(250px);
    }
`
const LoadingBar =styled.div`
width: 250px;
background-color: #e6edf0;
overflow: hidden;
height : 6px; 
border-radius : 10px;
    position: relative;
`
const Loader = styled.div`
width : 80px;
height : 100%;
border-radius : 15px;
background-color:var(--color-primary);
animation: ${LoaderAnimation} 1s linear infinite;
`
function LoadingPage() {
    return (
        <LoadingContainer>
        <LoadingContentWrapper >
            <HouseLoader />
          <h3>Homley</h3>
          <LoadingBar>
            <Loader/>
          </LoadingBar>
        </LoadingContentWrapper>
        </LoadingContainer>
    )
}

export default LoadingPage
