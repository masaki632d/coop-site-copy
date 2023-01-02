import { css } from '@emotion/react'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@libs/components/Button'
import { ServiceItem } from '@libs/constants/service'
import { elevation } from '@styles/elevation'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const cardStyles = {
  service: css`
    display: flex;
    margin-bottom: ${spacing(10)};
    ${mq['sm']} {
      box-shadow: ${elevation[2]};
      flex-direction: column;
      padding: ${spacing(2)};
      margin-bottom: ${spacing(4)};
    }
  `,
  img: css`
    max-width: 480px;
    width: 50%;
    box-shadow: ${elevation[2]};
    background-color: ${palette.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: ${spacing(4)};
    ${mq['sm']} {
      width: 100%;
      height: 118px;
      box-shadow: none;
      margin-right: 0;
      margin-bottom: ${spacing(1)};
    }
  `,
  body: css`
    width: 100%;
  `,
  title: css`
    ${typography.normal[30]}
    ${mq['sm']} {
      ${typography.normal[20]}
      font-weight: bold;
    }
  `,
  siteCategory: css`
    margin-bottom: ${spacing(3)};
    color: ${palette.red};
    ${mq['sm']} {
      margin-bottom: ${spacing(1)};
      ${typography.normal[14]}
    }
  `,
  copy: css`
    ${typography.normal[20]}
    ${mq['sm']} {
      ${typography.normal[16]}
    }
  `,
  description: css`
    ${typography.normal[14]}
    margin-bottom: ${spacing(3)};
    ${mq['sm']} {
      ${typography.normal[12]}
      margin-bottom: ${spacing(2)};
    }
  `,
  links: css`
    display: flex;
    width: 80%;
    ${mq['sm']} {
      flex-direction: column;
      width: 100%;
    }
    > a:not(:last-of-type) {
      margin-right: ${spacing(2)};
      ${mq['sm']} {
        margin-right: 0;
        margin-bottom: ${spacing(1)};
      }
    }
    > a:only-of-type {
      width: 50%;
      ${mq['sm']} {
        width: 100%;
      }
    }
  `,
}

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
  <div css={cardStyles.service} id={code}>
    <figure css={cardStyles.img}>
      <Image
        src={`/images/service/logo/${imagePath}`}
        alt={name}
        width={330}
        height={140}
        objectFit="cover"
      />
    </figure>

    <div css={cardStyles.body}>
      <h2 css={cardStyles.title}>{name}</h2>
      {siteCategory && <p css={cardStyles.siteCategory}>{siteCategory}</p>}
      <h3 css={cardStyles.copy}>{copy}</h3>
      <p css={cardStyles.description}>{description}</p>
      <div css={cardStyles.links}>
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
