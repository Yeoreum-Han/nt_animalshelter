# 펫보호소   

## 소개
![petshelter001](https://github.com/Yeoreum-Han/nt_animalshelter/assets/127937169/c72714c9-4b39-4a26-8c50-12d70ca3ce68)
우리 지역에 있는 동물 보호소를 찾아보세요. [**펫보호소**](링크)는 전국에 있는 동물 보호소를 검색 할 수 있는 사이트입니다.   
직접 지역을 검색할 수 있고, 강아지/고양이/기타 동물과 지역 분류로 선택하며 찾을 수도 있습니다.   
이달의 모임 페이지에서는 매달 잘 운영되고 있는 모임을 선정하고 소개하여 활발한 모임활동을 장려합니다. 

## 기술스택
* js
* react
* typescript
* next.js
* tailwindcss

## 핵심기능
**1. 검색창 검색**   
![petshelter002](https://github.com/Yeoreum-Han/nt_animalshelter/assets/127937169/6ecb3a6d-5e29-4ed9-9432-a39922e47d32)   
지역명을 입력해 검색할 수 있습니다.
form 제출 시 입력한 값을 쿼리로 전달하고 결과 페이지에서 useSearchParams으로 값을 받아 데이터 검색과 filter를 실행했습니다.
검색 결과가 없는 경우는 안내문구를 표시하고, 화면 크기에 따라 1~3줄로 정렬합니다.


**2. 분류 선택**   
![petshelter003](https://github.com/Yeoreum-Han/nt_animalshelter/assets/127937169/df878696-a394-4476-8f84-5028fad32d1d)
메인 화면에서 강아지/고양이/기타 분류를 선택할 수 있습니다.
이후 지역을 한번 더 클릭하면 클릭한 지역에서 선택한 동물을 관리하는 보호소 정보를 보여줍니다.
결과페이지에서 전체 데이터를 fetch한 뒤 pathname에 있는 동물과 지역 정보로 filter를 실행했습니다.
검색 결과가 없는 경우는 안내문구를 표시하고, 화면 크기에 따라 1~3줄로 정렬합니다.


## 트러블슈팅
**CORS와 Mixed Content 에러**
개발 초기에 page에서 직접 fetch 하니 CORS에러가 발생했습니다. 이를 api/route.ts 를 통해 fetch해 서버 간 통신하는 방식으로 수정해 해결했습니다. 

빌드 후 vercel로 배포할 때는 Mixed Content 에러가 발생했습니다. rewrites로 프록시 서버를 설정 하다보니 cors에러도 이 코드로 해결 가능함을 깨달았고 최종적으로 route파일 없이 config를 수정하는 방식으로 수정했습니다.
