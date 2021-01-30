# 올 때 메로나
소액 대행 서비스 프로젝트 입니다. <br/><br/>
[backend Github 바로가기](https://github.com/dorothy7964/hashtag-backend "backend Github 바로가기") <br/>
[노션 바로가기](https://www.notion.so/wam6577/30e2e341ff61447ea5863cb6c2175670 "app Github 바로가기")

<br/><br/>

# Install

## styled-components

<!-- Install Code -->

``` js
$ yarn add styled-components
```

스타일을 가진 컴포넌트를 만들 수 있도록 도와주는 CSS-in-JS 라이브러리


### Example (styled-components)

<!-- Example Code -->

``` js
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

<br/><br/>

## styled-reset

<!-- Install Code -->

``` js
$ yarn add styled-reset
```

css 를 reset 해주는 라이브러리이며 전역 스타일로 src/Styles/GlobalStyles.js 에 적용하였습니다.

### Example (styled-reset)

<!-- Example Code -->

``` js
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>Hi, I'm an app!</div>
  </React.Fragment>
}

export default App
```
      
<br/><br/>

## react-router-dom

<!-- Install Code -->

``` js
$ yarn add react-router-dom
```

리액트 라우터는 리액트의 서드파티 라이브러리로 화면전환을 도와주는 역할을 합니다.
     
<br/><br/>

## react-helmet

<!-- Install Code -->

``` js
$ yarn add react-helmet
```

페이지의 head 설정을 컴포넌트 렌더링하듯이 JSX 에서 할 수 있게 해주는 아주 유용한 라이브러리

### Example (react-helmet)

<!-- Example Code -->

``` js
import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};
```
      
<br/><br/>

## react-toastify

<!-- Install Code -->

``` js
$ yarn add react-toastify
```

알림 라이브러리입니다.

### Example (react-toastify)

<!-- Example Code -->

``` js
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Wow so easy !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }
```
      
<br/><br/>

## react-apollo-hooks

<!-- Install Code -->

``` js
$ yarn add react-apollo-hooks
```

GraphQL로 로컬 데이터와 원격 데이터를 모두 관리할 수 있는 자바스크립트용 종합 상태 관리 라이브러리<br/>
useQuery, useLazyQuery, useMutation, useSubscription 그리고 useApolloClient를 사용할 수 있습니다.

### Example (react-apollo-hooks)

<!-- Example Code -->

``` js
const FeedData({ type = "PUBLIC" }) {
const { loading, data, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      type: type.toUpperCase(),
      offset: 0,
      limit: 10
    },
  });

  // If you want your component to rerender with loading:true whenever
  // fetchMore is called, add notifyOnNetworkStatusChange:true to the
  // options you pass to useQuery above.
  if (loading) return <Loading/>;

  return (
    <Feed
      entries={data.feed || []}
      onLoadMore={() => fetchMore({
        variables: {
          offset: data.feed.length
        },
      })}
    />
  );
}
```
      
<br/><br/>

## apollo-boost

<!-- Install Code -->

``` js
$ yarn add apollo-boost
```

Apollo Client를 설정하는 데 필요한 모든 것을 포함하는 패키지이며, <br/>
apollo-boost가 Apollo client를 쉽게 사용할 수 있게 해주는 라이브러리 입니다.

### Example (apollo-boost)

<!-- Example Code -->

``` js
import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
 
// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://nx9zvp49q7.lp.gql.zone/graphql' });
 
const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);
 
render(ApolloApp(App), document.getElementById('root'));
```
      
<br/><br/>

## graphql

<!-- Install Code -->

``` js
$ yarn add graphql
```

GraphQL.js는 유형 스키마 구축과 해당 유형 스키마에 대한 쿼리 제공하는 라이브러리

### Example (graphql)

<!-- Example Code -->

``` js
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
 
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});
```
      
<br/><br/>

# GlobalStyles and Theme

GlobalCSS는 모든 태그에 적용 되는 style을 작성하는 것이고, 기존 styled-components 방식으로 작성하였습니다.

<!-- Example Code -->

``` js
// ~/wam-prj/melona-frontend/src/Styles/GlobalStyles.js 

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing: border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding-top: 140px;
        /* Scrollbar None */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
        }
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus {
        outline:none;
    }
`;
```

<br/><br/>

Theme은 프로젝트에 사용될 색상코드,스타일 과 같은 자주 사용되는 정보들을 저장해놓는 곳 입니다.

<!-- Example Code -->

``` js
// ~/wam-prj/melona-frontend/src/Styles/Theme.js 

const BORDER_COLOR = "#e6e6e6"
const BOX_BORDER = `1px solid ${BORDER_COLOR}`;
const BORDER_RADIUS = "4px";

export default {
    minHeight: "60vh",
    maxWidthLarge: "935px",
    maxWidthMiddle: "768px",
    maxWidthSmall: "576px",
    bgColor: "#FAFAFA",
    blackColor: "#262626",
    greenColor: "#06703b",
    melonaColor: "#b9dd39",
    lightGreenColor: "#9ccc65",
    titleGreyColor: "#f2f0f0",
    lightGreyColor: "#eeeeee",
    darkGreyColor: "#999",
    redColor: "#ED4956",
    darkBlueColor: "#003569",
    borderColor: `${BORDER_COLOR}`,
    boxBorder: `1px solid ${BORDER_COLOR}`,
    borderRadius: "4px",
    shadowBox: `background-color:white; 
                -webkit-box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                -moz-box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                box-shadow: 20px 20px 8px -13px rgba(230,230,230,0.37);
                `,
    shadowBox_bottom: `
                -webkit-box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                -moz-box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                box-shadow: 0px 14px 22px -3px rgba(230,230,230,0.25);
                `,
    whiteBox: `border:${BOX_BORDER};
               border-radius:${BORDER_RADIUS};
               background-color:white; 
               `,
    whiteBox_bottom: `border-bottom:${BOX_BORDER};
               border-radius:${BORDER_RADIUS};
               background-color:white;
               `
};
```

<br/><br/>

App 파일에 연결해 주었습니다.

<!-- Example Code -->

``` js
// ~/wam-prj/melona-frontend/src/Components/App.js 

import React from "react";
import { ThemeProvider } from "styled-components"; 
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from "../Styles/Theme"; 

export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
        </ThemeProvider>
    );
};
```

<br/><br/>

# Apollo Client

Apollo Client 는 JavaScript 앱을위한 완벽한 상태 관리 라이브러리 <br/>
GraphQL 쿼리를 작성하기 만하면 Apollo Client가 데이터를 요청하고 캐싱하고 UI를 업데이트합니다.

<br/>

**Apollo에서 제공하는 GraphQL 클라이언트 관련 라이브러리**
- apollo-client
- apollo-cache-inmemory
- apollo-link-http

<br/>

**Facebook에 정의한 GraphQL 스팩을 JavaScript 언어로 구현체**

- graphql

<br/>


**GraphQL 쿼리를 파싱해주는 템플릿 리터럴 태그**

- graphql-tag

<br/><br/>

## 클라이언트 생성하기

Apollo Client를 사용하려면 먼저 ApolloClient 객체를 생성해야 합니다. <br/>
ApolloClient 생성자는 옵션 객체를 인자로 받는데, 이 객체의 link와 cache는 필수 옵션입니다.

<br/>

<!-- Example Code -->

``` js
const client = new ApolloClient({
  link: createHttpLink({ uri: "https://countries.trevorblades.com" }),
  cache: new InMemoryCache()
});
```

<br/>

- link 옵션에는 ApolloLink 객체를 넘거야 합니다.
- cache 옵션에는 ApolloCache 객체를 넘거야 합니다.

<br/>

- **createHttpLink**는 HTTP를 통해 원격 GraphQL 서버와 연동할 수 있도록 HttpLink 객체를 생성해주는 팩토리 함수입니다.
- 이 함수의 인자로 연동할 GraphQL 서버의 uri를 설정해줘야 합니다.
- 특별한 캐시 요구사항이 없다면 대부분의 경우, 가장 기본적인 InMemoryCache 옵션을 사용합니다. 

<br/><br/>

## React에 Apollo Client 연결

@apollo/react-hooks 패키지는 useQuery, useMutation, useApolloClient와 같은 React Hooks 함수를 제공하며, 이 함수들을 활용하면 React 앱에서 GraphQL API를 훨씬 쉽게 호출할 수 있습니다.

<br/>

**apollo Hook 추가로 라이브러리 설치하기**

- @apollo/client
- @apollo/react-hooks

<!-- Install Code -->

``` js
$ yarn add @apollo/client @apollo/react-hooks
```

<br/>

**프로젝트에 이미 존재하는 react-apollo의 ApolloProvider와 함께 사용할 때**

``` js
// ~/wam-prj/prismagram-frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import App from './Components/App';
import Client from "./Apollo/Client";  

ReactDOM.render(
    <ApolloProvider client={Client}>
        <ApolloHooksProvider client={Client}>
            <App />
        </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById("root")
);
```

<br/><br/>
