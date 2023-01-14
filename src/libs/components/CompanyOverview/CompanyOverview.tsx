import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'
import { companyName } from '@libs/constants/common'

const companyInfo = [
  {
    header: '商号',
    data: companyName,
  },
  { header: 'URL', data: 'https://www.yahoo.co.jp/' },
  {
    header: '本社所在地',
    data: '〒000-0000\n大阪府大阪市',
  },
  { header: '設立', data: 'ダミーテキスト' },
  { header: '決算期', data: 'ダミーテキスト' },
  { header: '代表取締役', data: 'ダミーテキスト' },
  { header: '取締役社長', data: 'ダミーテキスト' },
  {
    header: '取締役',
    data: 'ダミーテキスト',
  },
  { header: '監査役', data: 'ダミーテキスト' },
  {
    header: '主な事業内容',
    data: 'ダミーテキスト',
  },
]

const groupCompanyInfo = [
  {
    url: 'https://www.yahoo.co.jp/',
    name: 'ダミーテキスト',
  },
  {
    url: 'https://www.yahoo.co.jp/',
    name: 'ダミーテキスト',
  },
  {
    url: 'https://www.yahoo.co.jp/',
    name: 'ダミーテキスト',
  },
  {
    url: 'https://www.yahoo.co.jp/',
    name: 'ダミーテキスト',
  },
  {
    url: 'https://www.yahoo.co.jp/',
    name: 'ダミーテキスト',
  },
  {
    url: 'https://www.yahoo.co.jp/',
    name: 'ダミーテキスト',
  },
]

export const CompanyOverview: FC = () => (
  <div css={styles.wrap}>
    <BaseLayout>
      <section>
        <Headline mainText="会社概要" subText="COMPANY OVERVIEW" />
        <div css={styles.overview}>
          <table css={styles.table}>
            <tbody>
              {companyInfo.slice(0, 8).map(({ header, data }) => (
                <tr key={header}>
                  <th>{header}</th>
                  <td>{data}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table css={styles.table}>
            <tbody>
              {companyInfo.slice(8).map(({ header, data }) => (
                <tr key={header}>
                  <th>{header}</th>
                  <td>{data}</td>
                </tr>
              ))}
              <tr>
                <th>親会社</th>
                <td>
                  <a
                    href="https://www.yahoo.co.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    株式会社エイチーム
                    <span className="material-icons" css={styles.linkIcon}>
                      open_in_new
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <th>グループ会社</th>
                <td>
                  {groupCompanyInfo.map(({ url, name }) => (
                    <>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                        <span className="material-icons" css={styles.linkIcon}>
                          open_in_new
                        </span>
                      </a>
                      <br />
                    </>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </BaseLayout>
  </div>
)
