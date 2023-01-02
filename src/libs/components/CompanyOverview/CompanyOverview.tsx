import { css } from '@emotion/react'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'
import { companyName } from '@libs/constants/common'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  wrap: css`
    background-color: rgba(239, 239, 239, 0.4);
  `,
  overview: css`
    display: flex;
    margin-top: ${spacing(10)};
    align-items: flex-start;
    ${mq['sm']} {
      flex-direction: column;
      margin-top: ${spacing(4)};
      ${typography.normal[12]}
    }
  `,
  table: css`
    width: 50%;
    border-bottom: 1px solid ${palette.grey};
    ${mq['sm']} {
      width: 100%;
    }
    &:first-of-type {
      margin-right: ${spacing(10)};
      ${mq['sm']} {
        margin-right: 0;
        border-bottom: none;
      }
    }
    tr {
      border-top: 1px solid ${palette.grey};
    }
    th,
    td {
      padding: ${spacing(3)} ${spacing(2)};
      box-sizing: border-box;
      ${mq['sm']} {
        padding: ${spacing(2)} ${spacing(1)};
      }
    }
    th {
      width: 164px;
      text-align: left;
      flex-shrink: 0;
      ${mq['sm']} {
        width: 100px;
      }
    }
    td {
      white-space: pre-wrap;
    }
  `,
  linkIcon: css`
    vertical-align: -3px;
    ${typography.normal[16]}
  `,
}

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
