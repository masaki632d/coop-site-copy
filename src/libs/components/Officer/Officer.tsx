import { css } from '@emotion/react'
import Image from 'next/image'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'
import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  president: css`
    display: flex;
    margin: ${spacing(10)} 0;
    ${mq['sm']} {
      flex-direction: column;
      margin: ${spacing(4)} 0 ${spacing(6)};
    }
  `,
  presidentDetail: css`
    margin-left: ${spacing(7)};
    ${mq['sm']} {
      margin: ${spacing(3)} 0 0;
    }
  `,
  presidentPosition: css`
    ${typography.normal[16]}
    ${mq['sm']} {
      ${typography.normal[12]}
    }
  `,
  presidentName: css`
    ${typography.normal[36]}
    margin-bottom: ${spacing(3)};
    ${mq['sm']} {
      ${typography.normal[24]}
      margin-bottom: ${spacing(2)};
    }
  `,
  biography: css`
    ${mq['sm']} {
      ${typography.normal[12]}
    }
    tr {
      display: flex;
      &:not(:last-of-type) {
        margin-bottom: ${spacing(1)};
      }
    }
    th {
      width: 116px;
      text-align: left;
      flex-shrink: 0;
      ${mq['sm']} {
        width: 80px;
      }
    }
    td {
      white-space: pre-wrap;
    }
  `,
  officers: css`
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: ${spacing(10)};
      ${mq['sm']} {
        margin: 0 ${spacing(2)} ${spacing(2)} 0;
      }
    }
  `,
  position: css`
    ${typography.normal[14]}
    ${mq['sm']} {
      ${typography.normal[12]}
    }
  `,
  name: css`
    ${typography.normal[24]}
    ${mq['sm']} {
      ${typography.normal[20]}
    }
  `,
}

const biography = [
  { year: '2011年 4月', body: '●● 入社' },
  { year: '2015年 5月', body: '●● 入社' },
]
const officers = [
  { position: '取締役社長', name: 'ダミーテキスト' },
  { position: '取締役', name: 'ダミーテキスト' },
  { position: '監査役', name: 'ダミーテキスト' },
]

export const Officer: FC = () => (
  <BaseLayout>
    <section>
      <Headline mainText="役員紹介" subText="OFFICER" />
      <div css={styles.president}>
        <Image
          src="/images/corporate/officer.png"
          width={330}
          height={360}
          objectFit="cover"
          alt="代表取締役社長"
        />
        <div css={styles.presidentDetail}>
          <p css={styles.presidentPosition}>代表取締役</p>
          <h3 css={styles.presidentName}>ダミーテキスト</h3>
          <table css={styles.biography}>
            <tbody>
              {biography.map(({ year, body }) => (
                <tr key={year}>
                  <th>{year}</th>
                  <td>{body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ul css={styles.officers}>
        {officers.map(({ position, name }) => (
          <li key={name}>
            <p css={styles.position}>{position}</p>
            <h3 css={styles.name}>{name}</h3>
          </li>
        ))}
      </ul>
    </section>
  </BaseLayout>
)
