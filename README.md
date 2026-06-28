# index.json
- 매인 페이지 (banner 위) 글

# competition.json
- 대회 안내 관련된 정보 작성
    - posters 함옥에 포스터 파일명 작성하고 public/poster 폴더에 해당 파일 저장
    - guide 항목에서 
        - registerButtons에 구글 폼 링크 추가
        - sections에 시합 관련된 정보
            - placeName에는 도로명 주소로 작성 (장소명 사용할 경우 마커 표시에 오류가 생길 수 있음)
    - contact 항목에서 오픈챗팅, 전화번호 수정

# result.json
``` 
    "연도" : [ {"성별": "남성 또는 여성", belts" [
    { 
        "belt": white,
        "weightClasses" : [
            {
                "class" : "표시되는 벨트 체급 명",
                "ranking" : [
                    {
                        "rank": 1, 
                        "name" : "김서강", "university": "서강대",
                        "gym": "TAP"}
                ]
            }
        ]
    }
    ]}]
```
- 연도, ranking 부분에서 수상자 이름, 대학, 도장, class에 변동이 있을 경우 class 수정

# sponsor.json
```
만약 sponsor가 없을 경우
sponsor : [],
만약 개인 후원자 없을 경우 
individual : []
```
작성 예시
```
    "sponsor": [
    {
      "name": "monster",
      "displayName": "MONSTER",
      "description": "에너지 드링크 브랜드",
      "website": "https://www.monster.com",
      "logoImage": "monster_logo.png",
      "detailImages": []
    },
    {
      "name": "spotlite",
      "displayName": "SPOTLITE",
      "description": "대회 운영 플랫폼",
      "website": "https://spotlite.co.kr",
      "logoImage": "spotlite_logo.png",
      "detailImages": []
    },
    {
      "name": "bitnara",
      "displayName": "빛나라",
      "description": "기능성 운동복 전문 브랜드",
      "website": "https://smartstore.naver.com/ssshine",
      "logoImage": "bitnara_logo.png",
      "detailImages": ["bitnara1.png","bitnara2.png","bitnara3.png","bitnara4.png"]
    }
  ],
  "individual": {
    "서강대": ["김건우", "김서강"],
    "이화여대": ["김이화", "박이화"]
  },
```
- displayName은 화면에 표시할 기업 이름
- description은 상세 페이지에 표시할 간략한 설명 정보
- website는 해당 후원사 공식 홈페이지
- detailImages에서는 해당 후원자 상세 페이지에 표시할 추가 이미지
- 후원사 관련된 사진은 전부 /public/sponsor에 후원사 이름(sponsor.name과 동일한) 폴더를 생성하고 해당 폴더에 추가
    - detailImages, logoImage에 작성한 파일명은 /public/sponsor/{후원사 이름} 폴덩 저장한 파일명과 동일한 파일로 작성할 것

# about.json
- intro 부분에는 TAP 소개글 작성
- staff은 운영진 이름 업데이트