# Astro Lab Website

https://astroforum.github.io

Built with [al-folio](https://github.com/alshedivat/al-folio). Theme docs are in `docs/`.

- 연구실 소개(첫 페이지): `_pages/about.md`, 사진 `assets/img/prof_pic.jpg`
- 구성원: `_pages/profiles.md` + 사람별 소개 파일 (`_pages/about_pi.md` 등)
- 연구 주제: `_projects/`
- 논문: `_bibliography/papers.bib`
- 소식: `_news/`
- 사이트 설정: `_config.yml`, 연락처 링크: `_data/socials.yml`
- 실제 내용으로 바꿀 자리는 `[ ... ]`로 표시되어 있습니다.

논문 추가 예시 (`_bibliography/papers.bib`):

    @article{kim2026alloy,
      title    = {논문 제목},
      author   = {Kim, Gildong and Lee, Younghee},
      journal  = {저널명},
      year     = {2026},
      doi      = {10.xxxx/xxxxx},
      selected = {true}
    }
