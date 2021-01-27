import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import fire from "../fire-config"


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [db, setDb] = useState('');

  useEffect(() => {
    fire.firestore()
      .collection('db')
      .onSnapshot(snap => {
        const data = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDb(JSON.parse(data[0].name))
      });

  }, []);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name${name}`);
            }}
            >
              <input placeholder="Name" onChange={(event) => setName(event.target.value)} />
              <button type="submit" disabled={name.length === 0}>
                Play
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>dssadsadsa as dskadjlsa</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/RAJ66" />
    </QuizBackground>
  );
}
