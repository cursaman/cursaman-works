import { ArrowUpRight, Check, ClipboardList, Globe, LayoutDashboard, Monitor, Phone, Workflow } from 'lucide-react'
import Hero from './hero'
import Tools from './tools'

const contactEmail = process.env.CONTACT_EMAIL || 'oo8317@naver.com'

const services = [
  { icon: Monitor, title: '기업 홈페이지', description: '서비스와 강점을 고객이 빠르게 이해하도록 정보를 정리하고, 화면 크기에 맞춰 제작합니다.', features: ['정보 구조와 콘텐츠 설계', 'PC·태블릿·모바일 대응', '검색·접근성 기본 설정'] },
  { icon: LayoutDashboard, title: '홈페이지 + 관리자', description: '문의와 콘텐츠를 한곳에서 확인하고, 담당자가 직접 운영할 수 있는 환경을 만듭니다.', features: ['문의 접수와 상태 관리', '콘텐츠·포트폴리오 관리', '담당자 권한 설계'] },
  { icon: Workflow, title: '맞춤형 업무 시스템', description: '전화·메신저·엑셀에 흩어진 업무를 살펴보고 반복되는 단계부터 연결합니다.', features: ['현재 업무 흐름 분석', '견적·신청·진행 상태 관리', '단계별 도입과 운영 지원'] },
]

const projects = [
  { title: '기업 홈페이지 프로젝트', description: '기업 소개와 서비스 정보를 고객이 찾기 쉬운 순서로 구성했습니다.', href: 'https://cursamanworks.kr/biz/', icon: Monitor, theme: 'web' },
  { title: '홈페이지 진단 프로젝트', description: '사이트의 상태를 항목별로 확인하고 개선 방향을 안내하는 프로젝트입니다.', href: 'https://cursamanworks.kr/health/', icon: ClipboardList, theme: 'audit' },
  { title: '동부산CC UX/UI 제안', description: '골프장 방문 경험을 중심으로 구성한 비공식 웹사이트 리뉴얼 제안입니다.', href: 'https://cursamanworks.kr/dongbusan/', icon: Globe, theme: 'concept' },
]

const steps = [
  ['상담', '현재 상황과 목표를 확인합니다.'],
  ['범위 확정', '우선순위와 완료 기준을 정합니다.'],
  ['설계·제작', '화면과 업무 기능을 연결합니다.'],
  ['검수·운영', '기능을 확인하고 배포와 운영을 지원합니다.'],
]

export default function Home() {
  return <>
    <header id="top"><div className="wrap nav">
      <a className="brand" href="#top"><span>CW</span>커사맨웍스</a>
      <nav aria-label="주 메뉴"><a href="#services">서비스</a><a href="#health">홈페이지 진단</a><a href="#portfolio">포트폴리오</a><a href="#education">AI 제작교육</a></nav>
      <div className="navActions">
        <a className="navPhone" href="tel:01028697095"><Phone size={15} aria-hidden="true"/> 010-2869-7095</a>
        <a className="button navButton" href="#contact">문의하기 <ArrowUpRight size={16}/></a>
      </div>
    </div></header>
    <main>
      <Hero/>
      <section className="wrap section" id="services">
        <p className="label">서비스</p><h2>홈페이지부터 업무 시스템까지</h2>
        <p className="sectionIntro">고객이 서비스를 찾고 문의하는 순간부터 담당자가 상담을 처리하는 흐름까지 살펴봅니다.</p>
        <div className="cards">{services.map(({ icon: Icon, title, description, features }) => <article key={title}><div className="icon"><Icon size={23}/></div><h3>{title}</h3><p>{description}</p><ul>{features.map(feature => <li key={feature}><Check size={15}/> {feature}</li>)}</ul><a href="#contact">제작 문의 <ArrowUpRight size={16}/></a></article>)}</div>
      </section>
      <Tools kind="health"/>
      <section className="wrap section" id="portfolio">
        <p className="label">포트폴리오</p><h2>프로젝트로 보는 해결 과정</h2>
        <div className="cards projects">{projects.map(({ icon: Icon, title, description, href, theme }) => <article key={title}>
          <a href={href} className="project"><div className={`projectArt ${theme}`}><Icon size={42} strokeWidth={1.35}/></div><div className="projectText"><h3>{title}</h3><p>{description}</p><span>프로젝트 보기 <ArrowUpRight size={16}/></span></div></a>
        </article>)}</div>
      </section>
      <section className="education" id="education"><div className="wrap section educationGrid"><div><p className="label">AI 제작교육</p><h2>내 사업의 홈페이지를<br/>직접 완성합니다</h2><p>실무자와 자영업자가 자신의 사업을 주제로 AI를 활용해 홈페이지와 홍보영상을 만드는 실습 과정입니다.</p><a className="button primary" href={`mailto:${contactEmail}?subject=${encodeURIComponent('AI 교육 문의')}`}>교육 문의 <ArrowUpRight size={16}/></a></div>
      <ul className="classList"><li><strong>3시간 체험반</strong><span>한 페이지 홈페이지 또는 짧은 홍보영상</span></li><li><strong>4주 완성반</strong><span>반응형 홈페이지 제작 또는 영상 콘텐츠 기획</span></li><li><strong>기업·기관 출강</strong><span>참가자와 업무 목표에 맞는 실습</span></li></ul></div></section>
      <section className="wrap section"><p className="label">진행 방식</p><h2>상담부터 배포까지</h2><ol className="steps">{steps.map(([title, description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ol></section>
      <Tools kind="contact" email={contactEmail}/>
    </main>
    <footer><div className="wrap footer"><div><a className="brand" href="#top"><span>CW</span>커사맨웍스</a><p>중소기업의 홈페이지와 반복 업무를 개선하는 웹 제작 파트너</p></div><div className="footerLinks"><a href={`mailto:${contactEmail}?subject=${encodeURIComponent('일반·교육 문의')}`}>일반·교육 문의</a><a href={`mailto:${contactEmail}?subject=${encodeURIComponent('유지보수 문의')}`}>유지보수 문의</a><a href="https://cursamanworks.kr/privacy/">개인정보처리방침</a></div></div></footer>
  </>
}
