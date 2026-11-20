# 커사맨웍스 홈페이지

Next.js App Router 기반의 한국어 소개 페이지입니다.

```powershell
npm ci
npm run dev
```

개발 서버 주소는 http://localhost:3000 입니다. 배포 전에 `npm run build`로 확인합니다.

Vercel에서 이 폴더를 프로젝트 루트로 설정하고 Next.js 프리셋을 사용합니다. 상담 초안은 기본 메일 앱에서 열 수 있고, 견적 문의 기본 주소는 estimate@cursamanworks.kr입니다. 수신 주소를 바꾸려면 Vercel 환경 변수 CONTACT_EMAIL을 설정한 뒤 다시 배포합니다.

간편검진은 응답에 따른 자가 점검 안내입니다. 기존 /health/의 자동 진단, 데이터 이관, 상담 접수 서버와 관리자 기능은 연결되어 있지 않습니다.
