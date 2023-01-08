import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../../components/timeline/Post";
import PostBar from "../../components/timeline/PostBar";
import TopBar from "../../components/TopBar/TopBar.js";
import axios from "axios";
import Trending from "../../components/timeline/Trending";
import { urlAxios } from "../../service/Service";
import SearchBar from "../../components/TopBar/SearchBar";

export default function Timeline() {
  /* Criar estados e chamadas de contexto */
  const [posts, setPosts] = useState([])
  /* Criar useEffect para fazer requisição dos posts */
  useEffect(() => {
    const URL = urlAxios + "timeline"
    const request = axios.get(URL)
    request.then((ans) => {
      setPosts(ans.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <Container>
      <TopBar />
      <SearchBar screen={'<800'} />
      <main>
        <Main>
          <HeaderContainer>timeline</HeaderContainer>
          <TimelineContainer>
            <PostBar />
            <PostContainer>
              {posts.map((post) => <Post key={post.id} post={post} />)}
            </PostContainer>
          </TimelineContainer>
        </Main>
        <nav></nav>
        <Trending />
      </main>

      {/* Header */}
      {/* HashtagsContainer */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333333;
  padding-top: 72px;
  main{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

  }

  @media (max-width: 1100px) {
    
    main{
      nav{
        display: none;
      }
    }
  }
`;

const Main = styled.div`
  height: 100%;
`;

const HeaderContainer = styled.h1`
  margin-bottom: 43px;
  font-family: Oswald, sans-serif;
  font-weight: 700;
  font-size: 43px;
  color: #ffffff;
`;

const TimelineContainer = styled.div``;

const PostContainer = styled.div`
    margin-top: 29px;
`;
