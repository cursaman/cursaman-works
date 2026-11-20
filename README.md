# 커사맨웍스 홈페이지

Next.js App Router 기반의 한국어 소개 페이지입니다.

```powershell
npm ci
npm run dev
```

개발 서버 주소는 http://localhost:3000 입니다. 배포 전에 `npm run build`로 확인합니다.

Vercel에서 이 폴더를 프로젝트 루트로 설정하고 Next.js 프리셋을 사용합니다. 상담용 이메일이 확정되면 Vercel 환경 변수 CONTACT_EMAIL에 추가하고 다시 배포합니다. 이메일이 설정되면 상담 초안을 기본 메일 앱에서 열 수 있습니다.

간편검진은 응답에 따른 자가 점검 안내입니다. 기존 /health/의 자동 진단, 데이터 이관, 상담 접수 서버와 관리자 기능은 연결되어 있지 않습니다.
