# 해시태그

[backend Github 바로가기](https://github.com/dorothy7964/hashtag-backend "backend Github 바로가기") <br/>

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

# Material-ui Install

## ----- Table Materlai -----

## Basic table

[material 사이트 바로가기](https://material-ui.com/components/tables/#basic-table "material 사이트 바로가기") <br/>

### Install

<!-- Install Code -->

``` js
$ yarn add @material-ui/core
$ yarn add @material-ui/icons
```

### Example

<!-- Example Code -->

``` js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

```

<br/>

## Basic table_Customized tables

[material 사이트 바로가기](https://material-ui.com/components/tables/#customized-tables "material 사이트 바로가기") <br/>

### Example

<!-- Example Code -->

``` js
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

```

<br/>

## ----- Button Materlai -----

## Centered (Button)

[material 사이트 바로가기](https://material-ui.com/components/tabs/#centered "material 사이트 바로가기") <br/>

### Install

<!-- Install Code -->
``` js
$ yarn add @material-ui/lab
```

### Example

<!-- Example Code -->

``` js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}

```

<br/>

## Exclusive selection (Button)

[material 사이트 바로가기](https://material-ui.com/components/toggle-button/#customized-toggle-button "material 사이트 바로가기") <br/>

### Install


<!-- Install Code -->
``` js
$ yarn add @material-ui/lab
```

### Example

<!-- Example Code -->
``` js
import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```
<br/>

## Customized toggle button

[material 사이트 바로가기](https://material-ui.com/components/toggle-button/#customized-toggle-button "material 사이트 바로가기") <br/>

### Install

<!-- Install Code -->
``` js
$ yarn add @material-ui/lab
```

### Example

<!-- Example Code -->
``` js
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();

  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" className={classes.divider} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
```

<br/><br/>


# 라이브러리

## ----- Slider -----

[material 사이트 바로가기](https://material-ui.com/components/tables/#basic-table "material 사이트 바로가기") <br/>

### Install

<!-- Install Code -->

``` js
$ npm install react-slick --save
$ yarn add react-slick
```
yarn 또는 npm을 통한 설치를 완료 한 후에는 프로젝트에 CSS를 포함시켜야합니다.

### CSS 포함

<!-- Install Code -->

``` js
$ npm install slick-carousel --save
```

### CSS 적용

<!-- import Code -->

``` js
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```
or add cdn link in your html

<!-- import Code -->

``` html
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
```
<br/>

### App.js 파일에 CDN 적용하기

<!-- Example Code -->

``` js
import Helmet from 'react-helmet';

<Helmet
  htmlAttributes={{ lang: 'ko' }}
  meta={[{ charset: 'UTF-8' }]}
  link={[{
    rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
  }, {
    rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
  }]}
/>
```
위 처럼 App.js 파일에 CDN 을 Helmet 태그에 넣습니다. 

<br/>

## 사용법 참고

### javascript

<!-- Example Code -->

``` js
$('.multiple-items').slick({
  infinite: true, //양방향 무한 모션
  speed:300, // 슬라이드 스피드
  autoplay: true, //자동플레이 유무( false시 자동플레이 안됨 )
  autoplaySpeed:4000, // 자동플레이 스피드
  slidesToShow: 3, //한 화면에 보여줄 아이템수
  slidesToScroll: 3 // 한번에 슬라이드 시킬 아이템 개수
  arrows: false, //좌우 화살 버튼 노출 여부 ( false 시 안보임 )
});
```

<br/>

### html

<!-- Example Code -->

``` js
<div class="multiple-items">
  <div>item1</div>
  <div>item2</div>
  <div>item3</div>
......중략......
<div>
```

<br/>

### 단순 FadeInOut 으로만 사용시

<!-- Example Code -->

``` js
$('.multiple-items').slick({
  dots: true, // 하단 paging버튼 노출 여부
  infinite: true, // 양방향 무한 모션
  speed: 500, // 모션 스피드
  fade: true, //페이드모션 실행 여부
  cssEase: 'linear' //css easing 모션 함수
});
```

<br/>

### 제공되는 페이징 버튼이 아니고 custom 버튼형식으로 대체 (배너버튼 등)

<!-- Example Code -->

``` js
$('.multiple-items').slick({
  speed:1000,
  arrows: false,
  dots:true,
  dotsClass:'bn-controller', // 사용자 css class ( 버튼들의 부모 엘리먼트 클래스를 가르킨다 )
  customPaging: function(slide, i) {
    // console.log( slide.$slider[0] )
    //아래 마크업처럼 적용할 버튼들의 마크업을 대입하면 된다.

    // slick내부에서 슬라이드 개수 만큼 for문으로 생성 ( 슬라이드 개수 만큼 복제된다. )

    return '<div class="slide-banner">' +
      ' <div class="bn-item">' +
      '<img src="이미지경로'+(i+1)+'.jpg" alt="">'+
      '</div>' +
      '</div>'
  }
});
```

<br/>

## ----- moment  -----

### Install

<!-- Install Code -->

``` js
$ npm install moment --save
$ yarn add moment
```

<br/>

### 기본 날짜 예제

<!-- Example Code -->

```js
var moment = require('moment');
moment().format(); //2018-11-18T22:19:20+09:00
moment().format("MM-DD-YYYY"); //11-18-2018
moment().format("YYYY"); //2018
```
format함수로 자신이 원하는 날짜 및 시간 형식을 지정해서, 날짜나 시간을 출력할 수 있습니다.

<br>

### 현 시점으로부터 날짜 구하기


<!-- Example Code -->

```js
var moment = require('moment');
 
moment().add(7, 'd'); //지금부터 7일후의 날짜 구하기 2018-11-25T22:25:51.654
moment().add(7, 'd').add(1, 'M'); //지금부터 1달 7일후의 날짜 구하기 2018-12-25T22:25:51.654
moment().subtract(7, 'd'); //지금부터 7일전의 날짜 구하기 2018-11-11T22:25:51.654
moment().subtract(2, 'w'); //지금부터 2주전의 날짜 구하기 2018-11-04T22:25:51.654
```

add와 subtract함수를 이용하여, 현 시점을 기준으로 간단하게 다음이나 이전시점의 날짜로 조작해서 파싱할 수 있습니다.

<br>

### 날짜 및 시간 차이 구하기


<!-- Example Code -->

```js
var moment = require('moment');
 
var date1 = moment([2018, 11, 18]);
var date2 = moment([2018, 01, 01]);
date1.diff(da, 'days'); // 2018년 1월 1일부터 2018년 11월 18일까지 일(day) 차이 -> 320

```

diff 함수를 이용하여, 특정 시점으로부터 특정 시점까지의 날짜 및 시간 차이를 구할 수 있습니다.