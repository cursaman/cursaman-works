'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const slides = [
  ['homepage-hero', '홈페이지와 문의 관리'],
  ['corporate-website', '반응형 기업 홈페이지'],
  ['business-workflow', '맞춤형 업무 시스템'],
  ['website-diagnosis', '홈페이지 진단'],
  ['ai-training', 'AI 실무교육'],
]

export default function Hero() {
  const swiperRef = useRef(null)
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    function applyPreference() {
      const swiper = swiperRef.current
      if (!swiper || swiper.destroyed) return
      if (preference.matches) swiper.autoplay.stop()
      else swiper.autoplay.start()
    }
    applyPreference()
    preference.addEventListener('change', applyPreference)
    return () => preference.removeEventListener('change', applyPreference)
  }, [])

  function toggleAutoplay() {
    const autoplay = swiperRef.current?.autoplay
    if (!autoplay) return
    if (autoplay.running) autoplay.stop()
    else autoplay.start()
  }

  return (
    <section className="hero heroCarousel" aria-label="커사맨웍스 서비스">
      <Swiper
        className="heroSlides"
        modules={[Autoplay]}
        loop
        autoplay={{ enabled: false, delay: 2000, disableOnInteraction: false, waitForTransition: false }}
        onSwiper={swiper => { swiperRef.current = swiper }}
        onRealIndexChange={swiper => setActive(swiper.realIndex)}
        onAutoplayStart={() => setPlaying(true)}
        onAutoplayStop={() => setPlaying(false)}
        aria-hidden="true"
      >
        {slides.map(([file]) => (
          <SwiperSlide key={file}>
            <Image src={`/images/${file}.webp`} alt="" fill sizes="100vw" preload={file === slides[0][0]}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="heroShade"/>
      <div className="wrap heroContent">
        <p className="eyebrow">웹사이트 · 관리자 · 업무 시스템</p>
        <h1>홈페이지와<br/>기업의 업무를<br/><em>함께 개선합니다.</em></h1>
        <p className="intro">중소기업에 필요한 홈페이지부터 문의 관리와 반복 업무 시스템까지, 지금 필요한 범위부터 설계합니다.</p>
        <div className="actions">
          <a className="button primary" href="#contact">프로젝트 문의 <ArrowUpRight size={18}/></a>
          <a className="button outline" href="#portfolio">포트폴리오 <ArrowDown size={16}/></a>
        </div>
      </div>
      <div className="wrap heroControls" aria-label="히어로 슬라이드 조작">
        <button type="button" aria-label="이전 슬라이드" onClick={() => swiperRef.current?.slidePrev()}><ChevronLeft size={20}/></button>
        {slides.map(([file, title], index) => (
          <button type="button" className="heroDot" key={file} aria-label={`${index + 1}. ${title}`} aria-current={active === index ? 'true' : undefined} onClick={() => swiperRef.current?.slideToLoop(index)}><span/></button>
        ))}
        <button type="button" aria-label="다음 슬라이드" onClick={() => swiperRef.current?.slideNext()}><ChevronRight size={20}/></button>
        <button type="button" aria-label={playing ? '자동 재생 일시정지' : '자동 재생 시작'} onClick={toggleAutoplay}>{playing ? <Pause size={17}/> : <Play size={17}/>}</button>
      </div>
    </section>
  )
}
