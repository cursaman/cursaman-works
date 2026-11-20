'use client'

import { useState } from 'react'

const checks = [
  ['모바일에서 글이나 버튼이 보기 어렵습니다.', '모바일 글자 크기, 버튼과 화면 폭을 점검하세요.'],
  ['페이지가 늦게 열립니다.', '큰 이미지와 불필요한 스크립트부터 확인하세요.'],
  ['문의 버튼을 찾기 어렵거나 문의가 접수되지 않습니다.', '문의 버튼 위치와 테스트 접수 결과를 확인하세요.'],
  ['주요 페이지가 검색 결과에서 잘 보이지 않습니다.', '페이지 제목과 검색 엔진 색인 상태를 확인하세요.'],
]

export default function Tools({ email }) {
  const [report, setReport] = useState(null)
  const [draft, setDraft] = useState('')
  const [status, setStatus] = useState('')

  function assess(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setReport(form.getAll('issue').map((index) => checks[Number(index)][1]))
  }

  function prepare(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setDraft(`상담 유형: ${form.get('type')}\n\n${form.get('details')}`)
    setStatus('')
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(draft)
      setStatus('상담 내용을 복사했습니다.')
    } catch {
      setStatus('아래 내용을 선택해 복사해 주세요.')
    }
  }

  return <div className="wrap section tools">
    <section id="health">
      <p className="label">홈페이지 건강검진</p><h2>무료 간편검진</h2>
      <p>현재 겪고 있는 문제를 선택하면 우선 점검할 항목을 확인할 수 있습니다.</p>
      <form onSubmit={assess}>
        <fieldset><legend>현재 겪는 문제</legend>{checks.map(([label], index) => <label key={label} className="check"><input type="checkbox" name="issue" value={index}/> {label}</label>)}</fieldset>
        <button className="button primary">점검 항목 보기</button>
      </form>
      <div aria-live="polite">{report && <div className="result"><strong>자가 점검 결과</strong>{report.length ? <ul>{report.map(item => <li key={item}>{item}</li>)}</ul> : <p>선택한 문제가 없습니다. 증상이 있다면 항목을 선택해 다시 확인하세요.</p>}</div>}</div>
    </section>
    <section id="contact">
      <p className="label">상담</p><h2>상담 내용 준비하기</h2>
      <p>{email ? '필요한 서비스를 선택하고 상담 내용을 작성하세요.' : '작성한 내용을 복사할 수 있습니다. 상담 접수 채널은 준비 중입니다.'}</p>
      <form onSubmit={prepare}>
        <label>상담 유형<select name="type"><option>홈페이지 진단</option><option>제작·개선·운영</option><option>AI 실무교육</option></select></label>
        <label>상담 내용<textarea name="details" required maxLength={2000} rows={3} placeholder="현재 겪고 있는 문제나 원하는 결과를 적어 주세요."/></label>
        <button className="button primary">상담 내용 만들기</button>
      </form>
      {draft && <div className="result"><textarea aria-label="작성된 상담 내용" readOnly value={draft} rows={4}/><button className="button" type="button" onClick={copy}>내용 복사</button>{email && <a className="button" href={`mailto:${email}?subject=${encodeURIComponent('커사맨웍스 상담 문의')}&body=${encodeURIComponent(draft)}`}>이메일 열기</a>}<p role="status">{status}</p></div>}
    </section>
  </div>
}
