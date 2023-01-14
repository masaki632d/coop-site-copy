import Image from 'next/image'
import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'

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
