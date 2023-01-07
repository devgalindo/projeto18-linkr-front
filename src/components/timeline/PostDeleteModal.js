import styled from "styled-components";
import { deletePost } from "../../service/Service";

export default function PostDeleteModal (props) {
    const {handleToggle, deletePost, postId} = props
    return (
        <ContainerBackground>
            <Container>
                <h2>Are you sure you want delete this post?</h2>
                <Buttons>
                    <button color="#fff" backgroudcolor="#1877F2" onClick = {() => handleToggle()}>No, go back</button>
                    <button color="#1877F2" backgroudcolor="#FFF" onClick = {() => deletePost(postId)} >Yes, delete it</button>
                </Buttons>
            </Container>
        </ContainerBackground>
    )
}

const ContainerBackground =  styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 597px;
    height: 262px;
    background-color: #333333;
    border-radius: 50px;
    h2 {
        width: 338px;
        height: 82px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        text-align: center;
        color: #FFFFFF;
    }
`

const Buttons = styled.button`
    display: flex;
    justify-content: space-between;
    button {
        width: 134px;
        height: 37px;
        color: ${props => props.color};
        background-color: ${props => props.backgroudcolor};
        border-radius: 5px;
    }
`

