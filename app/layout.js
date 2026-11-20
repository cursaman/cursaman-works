import './style.css'

export const metadata = {
  title: '커사맨웍스 | 홈페이지 진단·제작과 AI 실무교육',
  description: '홈페이지를 진단하고 문의와 업무가 연결되도록 개선합니다. AI 홈페이지·영상 실무교육도 제공합니다.',
}

export default function Layout({children}) {
  return <html lang="ko"><body>{children}</body></html>
}
