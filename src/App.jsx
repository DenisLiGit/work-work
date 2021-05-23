import { createContext } from 'react';
import './App.scss';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBox from './components/HeaderBox/HeaderBox';
import ContentBox from './components/ContentBox/ContentBox';
import FooterBox from './components/FooterBox/FooterBox';
import ModalsStore from './mobx-store/Modals-store';
import PropblemReposrtStore from './mobx-store/ProblemReport-store';

export const modalContext = createContext(new ModalsStore());
export const problemContext = createContext(new PropblemReposrtStore());

function App() {
  return (
    <div className="App">
      <Router>
        <Layout className="layout">
          <HeaderBox/>
          <ContentBox/>
          <FooterBox/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
