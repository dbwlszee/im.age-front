# IM.AGE
상품 인식을 통한 재고관리 웹서비스

## 프로젝트 소개
React + Springboot + Flask + MySQL로 이루어진 재고관리 웹서비스

## Node/NPM 버전
- node: v18.14.0
- npm : v9.6.5

## 실행
React 설치가 필요합니다.
```
$ npm install --save react react-dom
```

원하는 <프로젝트디렉토리>에서 프로젝트를 클론합니다.
```
$ git clone https://github.com/dbwlszee/im.age-front.git
```

터미널에서 프로젝트를 다운로드한 디렉토리로 이동하여 npm으로 필요한 패키지를 설치합니다.
```
$ cd <프로젝트디렉토리>
$ npm install
```

프로젝트를 실행합니다.
```
$ npm start
```

## Docker를 통한 실행
windows 환경에서 도커 다운로드 시 powershell 관리자모드에서 `wsl --update` 필요.\

docker Hub에서 도커이미지를 pull받아옵니다.
```
$ docker pull dbwlszee/im.age-front:latest
```

컨테이너를 실행하면 localhost:3000에서 확인할 수 있습니다.
```
$ docker run -d -p 3000:3000 dbwlszee/im.age-front:latest
```