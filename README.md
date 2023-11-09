# 🐶 Pet Meeting 강아지 미팅

### 틈틈히 작업하기

| 학습해서 사용할 내용          |                                  진행상황                                  |
| :---------------------------- | :------------------------------------------------------------------------: |
| React-Router                  |         현재목표 : Params로 데이터 전달넘기기, 보안구간 지정 - ing         |
| React-Query                   | 현재목표 : 데이터 사용구간 전역세팅 및 동기적으로 데이터 관리해보기 - wait |
| React-Recoil                  |                   현재목표 : 전역 데이터 관리하기 - wait                   |
| TailWindCSS                   |            현재목표 : 반응형 웹으로 작동하기 및 다크모드 - wait            |
| 배포(AWS,Firebase,netlify 등) |                      AWS 학습 후 배포 고민 중 - wait                       |

| 프로젝트 상황            | 체크 |
| :----------------------- | :--: |
| 기초 세팅                | ing  |
| 라우팅 설정              | wait |
| 레이아웃                 | wait |
| 데이터 받아오기          | wait |
| 회원가입 및 로그인, 인증 | wait |
| 실시간 날씨정보 API      | ing |
| 마이페이지 및 기능       | wait |
| 카카오 지도 API          | wait |
| 글작성 및 수정, 삭제     | wait |
| 좋아요, 댓글             | wait |
| 인피니티 스크롤          | wait |
| 최적화                   | wait |
| 배포                     | wait |

### 트러블 슈팅

- react-dom.development.js:86 Warning: Invalid DOM property `class`. Did you mean `className`? <br/>
  👉 에러는 말그대로 className이 아닌 class를 사용해서 발생 (리액트에서는 className을 권장한다)

- API KEY가 정상적인데도 401에러가 뜨는 이유 <br/>
  👉 .env 같은 파일을 변경했을 때는 프로젝트를 재실행해야 변경사항이 적용된다.

### 수정 사항

- 로그인, 회원가입은 Google 과 Kakao 연동으로 변경 예정 ( 받아온 정보에 사이트에서 추가로 필요한 정보 ( 반려견에 관한 정보 등 )를 입력하는 형식 구상 중 )
- Recoil 말고 Zustand 로 전역 상태관리를 할지도 모르겠습니다 ( 미정 ) 
