import { ArrowUpRight, ArrowRight, Activity, Monitor, Layers, Sparkles, Check, Globe } from 'lucide-react'
import Tools from './tools'

const services = [
  { icon: Activity, title: '홈페이지 진단', text: '모바일 화면, 문의 동선, 로딩, 검색 노출을 점검하고 개선할 순서를 정합니다.', price: '간편검진 무료 · 기술진단 15만 원부터', href: '#health' },
  { icon: Layers, title: '제작·개선·운영', text: '작은 오류 수정부터 리뉴얼과 견적·주문 시스템 구축까지, 필요한 범위부터 시작합니다.', price: '부분개선 49만 원부터', href: '#contact' },
  { icon: Sparkles, title: 'AI 실무교육', text: '내 사업을 주제로 홈페이지와 홍보영상을 만들고 직접 운영하는 방법을 익힙니다.', price: '체험반 · 정규과정 · 기관 출강', href: '#education' },
]

export default function Home() {
  return <>
    <header><div className="wrap nav">
      <a className="brand" href="#" aria-label="커사맨웍스 홈"><span><Activity size={21}/></span>커사맨웍스</a>
      <nav aria-label="주 메뉴"><a href="#services">서비스</a><a href="#education">AI 실무교육</a><a href="#health">홈페이지 검진</a></nav>
      <a className="button navButton" href="#contact">상담 준비 <ArrowUpRight size={15}/></a>
    </div></header>
    <main>
      <section className="hero"><div className="wrap heroGrid">
        <div><p className="eyebrow"><span/> 웹 제작 · 운영 개선 · AI 실무교육</p>
        <h1>홈페이지를<br/>사업에 연결합니다<span>.</span></h1>
        <p className="intro">기존 홈페이지의 문제를 찾아 개선하고, 문의·견적·주문이 이어지는 고객 경험을 만듭니다.</p>
        <div className="actions"><a className="button primary" href="#health">무료 간편검진 <ArrowRight size={18}/></a><a className="button" href="#services">서비스 살펴보기</a></div></div>
        <div className="visual">
          <div className="window"><div className="windowBar"><div className="dots"><i/><i/><i/></div><span><Globe size={13}/> 홈페이지 개선 예시</span><Monitor size={16}/></div>
          <div className="windowBody"><p>홈페이지 개선 흐름</p><strong>방문에서 문의까지</strong>
          <div className="flow"><div><Globe size={19}/> 방문</div><ArrowRight size={16}/><div><Layers size={19}/> 서비스 확인</div><ArrowRight size={16}/><div><Check size={19}/> 문의</div></div>
          <div className="metric"><span><Check size={15}/> 모바일 화면 정리</span><span><Check size={15}/> 문의 동선 개선</span></div></div></div>
        </div>
      </div></section>
      <section className="wrap section" id="services"><p className="label">서비스</p><h2>필요한 부분부터 개선하세요</h2><div className="cards">
      {services.map(({icon:Icon,title,text,price,href}) => <article key={title}><div className="icon"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><a href={href}>{price} <ArrowUpRight size={16}/></a></article>)}
      </div></section>
      <section className="education" id="education"><div className="wrap section"><p className="label">AI 실무교육</p><h2>내 사업의 홈페이지와 영상을 직접 만듭니다</h2><p>실무자와 자영업자를 위한 3시간 체험반, 4주 완성반, 기업·기관 출강을 준비합니다.</p><a className="button" href="#contact">교육 상담 준비 <ArrowUpRight size={16}/></a></div></section>
      <Tools email={process.env.CONTACT_EMAIL || ''}/>
    </main>
    <footer><div className="wrap">커사맨웍스 <span>Cursaman Works</span></div></footer>
  </>
}
