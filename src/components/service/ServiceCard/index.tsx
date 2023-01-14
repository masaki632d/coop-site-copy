import Image from 'next/image'
import { FC } from 'react'

import { styles } from './Style'

import { Button } from '@libs/components/Button'
import { ServiceItem } from '@libs/constants/service'

export const ServiceCard: FC<ServiceItem> = ({
  name,
  code,
  siteURL,
  contactURL,
  siteCategory,
  copy,
  description,
  imagePath,
}) => (
  <div css={styles.service} id={code}>
    <figure css={styles.img}>
      <Image
        src={`/images/service/logo/${imagePath}`}
        alt={name}
        width={330}
        height={140}
        objectFit="cover"
      />
    </figure>

    <div css={styles.body}>
      <h2 css={styles.title}>{name}</h2>
      {siteCategory && <p css={styles.siteCategory}>{siteCategory}</p>}
      <h3 css={styles.copy}>{copy}</h3>
      <p css={styles.description}>{description}</p>
      <div css={styles.links}>
        {siteURL && (
          <Button
            as="anchor"
            label="公式サイト"
            size="small"
            href={siteURL}
            target="_blank"
            rel="noopener noreferrer"
          />
        )}
        <Button
          as="anchor"
          label="お問い合わせ"
          color="black"
          size="small"
          href={contactURL}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  </div>
)
