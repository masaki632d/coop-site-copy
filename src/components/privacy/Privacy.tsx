import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { companyName } from '@libs/constants/common'
import { policyStyles } from '@styles/policy'

export const Privacy: FC = () => (
  <BaseLayout>
    <article css={policyStyles.article}>
      <h1>プライバシーポリシー</h1>
      <section>
        <h2>個人情報保護基本方針</h2>
        <p>
          {companyName}
          ダミーテキスト
        </p>
        <h3>個人情報保護基本方針</h3>
        <ol>
          <li>1. ダミーテキスト</li>
          <li>
            2. ダミーテキスト
            <p css={policyStyles.contact}>
              <b>ダミーテキスト</b>
              <br />
              {companyName} 個人情報対応窓口
              <br />
              〒000-0000 ダミーテキスト
              <br />
              mail: xxx@co.jp
            </p>
          </li>
        </ol>
        <p css={policyStyles.signature}>
          制定日：2022年x月x日
          <br />
          改定日：2022年x月x日
          <br />
          2022年x月xx日
          <br />
          2022年x月xx日
          <br />
          {companyName}
          <br />
          代表取締役 ダミーテキスト
        </p>
      </section>

      <section>
        <h2>個人情報の取扱いについて</h2>
        <p>ダミーテキスト</p>
        <h3>1. 個人情報の安全管理について</h3>
        <ol>
          <li>1. ダミーテキスト</li>
          <li>2. ダミーテキスト</li>
        </ol>

        <h3>4. 共同利用について</h3>
        <p>ダミーテキスト</p>
        <table>
          <tbody>
            <tr>
              <th>共同して利用する者の範囲</th>
              <td>
                当社グループ会社
                <br />
                詳細はこちらからご参照ください（
                <a
                  href="https://www.yahoo.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.yahoo.co.jp/
                </a>
                ）
              </td>
            </tr>
            <tr>
              <th>共同利用の目的</th>
              <td>
                ダミーテキスト
                <br />
                ダミーテキスト
              </td>
            </tr>
          </tbody>
        </table>

        <h3>6. WebサイトにおけるCookie等の取扱いについて</h3>
        <ol>
          <li>
            6.2. ダミーテキスト
            <br />
            *1 主な第三者配信事業者は以下のとおりです。
            <table>
              <thead>
                <tr>
                  <th>第三者配信事業者</th>
                  <th>プライバシーポリシー</th>
                  <th>オプトアウト方法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ダミーテキスト</td>
                  <td>
                    <a
                      href="https://www.yahoo.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.yahoo.co.jp/
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://www.yahoo.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.yahoo.co.jp/
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>ダミーテキスト</td>
                  <td>
                    <a
                      href="https://www.yahoo.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.yahoo.co.jp/
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://www.yahoo.co.jp/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.yahoo.co.jp/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
        <h3>7. 改定について</h3>
        <p>ダミーテキスト</p>
      </section>
    </article>
  </BaseLayout>
)
