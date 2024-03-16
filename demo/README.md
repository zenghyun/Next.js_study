## Module Content

- Understanding File-based Routing
- Static & Dynamic Routes
- Navigating Between Pages
  
### 파일 기반 라우팅이란 무엇인가? 
React 구성 요소 파일을 만들고 NextJS가 폴더 구조에서 경로를 추론하도록 합니다. => `/pages` 폴더

### 구조 미리보기
```
 |- /pages 
 |
 |-- index.js       => zenghyun.com/
 |-- about.js       => zenghyun.com/about
 |
 |
 |-- /products
 |  |
 |  |-- index.js      => zenghyun.com/products
 |  |-- [id].js       => zenghyun.com/products/1
 |
 |-- /clients 
    |
    |-- index.js      => zenghyun.com/clients
    |-- [id]          
        |
        |-- index.js                => zenghyun.com/client/zenghyun
        |-- [clientprojectid].js    => zenghyun.com/clients/zenghyun/project1 

```

### File-based vs Code-based
#### File-based Routing (NextJS)
- boilerplate code가 필요하지 않습니다.
- 직관적인 시스템
- 파일 폴더 구조(페이지/폴더 단위)가 경로에 영향을 미칩니다.
- 탐색은 `<Link>` 구성요소와 명령적으로 작동합니다.

#### Code-based Routing (React + react-router)
- boilerplate code가 필요합니다. (<Switch>, <Route>, ...)
- 간단하지만 새로운 구성 요소 개념이 포함되어 있습니다.
- 파일 폴더 설정은 전혀 중요하지 않습니다.
- 탐색은 `<Link>` 구성요소와 명령적으로 작동합니다.
