import { useState } from 'react'
import './App.css'

const jobListings = [
  {
    id: 1,
    company: 'サテライトテクノロジーズ',
    role: 'データアナリスト',
    salary: '年収 550万〜700万円',
    location: '東京都・リモート可',
  },
  {
    id: 2,
    company: 'ネクストリンク',
    role: 'プロダクトマネージャー',
    salary: '年収 650万〜900万円',
    location: '東京都',
  },
  {
    id: 3,
    company: 'オービタルソリューションズ',
    role: 'バックエンドエンジニア',
    salary: '年収 500万〜800万円',
    location: '大阪府・フルリモート可',
  },
  {
    id: 4,
    company: 'イノベーションラボ',
    role: 'UXデザイナー',
    salary: '年収 480万〜720万円',
    location: '神奈川県',
  },
  {
    id: 5,
    company: 'グロースパートナーズ',
    role: 'マーケティングスペシャリスト',
    salary: '年収 520万〜780万円',
    location: '福岡県・一部リモート',
  },
]

const socialAnalytics = [
  {
    id: 'twitter',
    platform: 'Twitter',
    postFrequency: '週5投稿',
    followers: 'フォロワー 12.4K',
    engagement: 'エンゲージメント率 3.8%',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    postFrequency: '週3投稿',
    followers: 'フォロワー 8.1K',
    engagement: 'エンゲージメント率 5.1%',
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    postFrequency: '週2投稿',
    followers: 'フォロワー 15.6K',
    engagement: 'エンゲージメント率 2.4%',
  },
]

function App() {
  const [url, setUrl] = useState('')

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title">サテラボレポート</div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">企業URLを入力して分析を開始</h1>
          <p className="hero-subtitle">
            企業の採用やSNSの動向をまとめて可視化。サテラボレポートで効率的なリサーチを。
          </p>
          <div className="input-group">
            <input
              className="url-input"
              type="url"
              value={url}
              placeholder="https://example.co.jp"
              onChange={(event) => setUrl(event.target.value)}
            />
            <button className="analyze-button" type="button">
              分析開始
            </button>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>求人情報ハイライト</h2>
            <p>採用動向を素早く把握するための最新情報をピックアップ。</p>
          </div>
          <div className="card-scroll" role="list">
            {jobListings.map((job) => (
              <article className="info-card" key={job.id} role="listitem">
                <h3 className="card-title">{job.company}</h3>
                <dl className="card-details">
                  <div className="detail-row">
                    <dt>職種</dt>
                    <dd>{job.role}</dd>
                  </div>
                  <div className="detail-row">
                    <dt>給与</dt>
                    <dd>{job.salary}</dd>
                  </div>
                  <div className="detail-row">
                    <dt>勤務地</dt>
                    <dd>{job.location}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>SNS分析</h2>
            <p>主要プラットフォームの投稿頻度と反応をチェック。</p>
          </div>
          <div className="card-scroll" role="list">
            {socialAnalytics.map((channel) => (
              <article className="info-card" key={channel.id} role="listitem">
                <h3 className="card-title">{channel.platform}</h3>
                <dl className="card-details">
                  <div className="detail-row">
                    <dt>投稿頻度</dt>
                    <dd>{channel.postFrequency}</dd>
                  </div>
                  <div className="detail-row">
                    <dt>フォロワー数</dt>
                    <dd>{channel.followers}</dd>
                  </div>
                  <div className="detail-row">
                    <dt>エンゲージメント率</dt>
                    <dd>{channel.engagement}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        © {new Date().getFullYear()} サテラボレポート
      </footer>
    </div>
  )
}

export default App
