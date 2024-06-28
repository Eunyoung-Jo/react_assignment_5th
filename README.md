## 나라카드페이지
<br>

### 각 나라의 국기, 나라명, 수도명, 위치하는 지역을 담은 국가 카드를 불러오고 간단하게 클릭으로 좋아하는 나라에 추가, 제거할 수 있도록 한 페이지
<br>

- [x]  1. vite로 react+typescript 프로젝트 세팅

- [x]  2. `GET` 메서드로 API 호출하고 src/types에 API의 응답값에 대한 타입들을 정하기
    
- [x]  3.  해당 API에서 받아온 나라들의 기본 정보를 보여줄 `CountryList`컴포넌트 작성

       - useState를 이용해 해당 response를 `CountryList`안에서 상태관리

- [x]  4. `CountryList`  컴포넌트에서 map을 이용해 각 useState 에 상태관리되고 있는 각나라에 대한 정보를 렌더링하도록

- [x]  5.  `CountryCard` 개별 나라에 대한 정보를 props 로 받아와서 보여주는 역할을 담당하는 컴포넌트 작성
        
    
- [x]  6. 각 `CountryCard` 가 클릭이 되었을 때, 클릭 된 `CountryCard` 를 저장하고 있을 수 있는 state 를 하나 더 생성

       -`CountryCard` 를 클릭하면 selectedCountries 에 해당 나라정보를 등록해주고, 다시 한번 클릭된다면 제거가 되도록
           
- [x]  7. Vercel 을 이용해 배포
