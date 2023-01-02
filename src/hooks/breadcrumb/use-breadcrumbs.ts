import { useRouter } from 'next/router'

export type BreadcrumbType = {
  href: string
  title: string
}

type Titles = { [key: string]: string }

const pageTitles: Titles = {
  vision: '大切にしていること',
  corporate: '企業情報',
  service: '事業紹介',
  recruit: '採用情報',
  privacy: 'プライバシーポリシー',
  sitepolicy: 'サイトポリシー',
  agreement: '個人関連情報の受領と利用について',
  news: 'ニュース',
}

export const useBreadcrumbs = (): BreadcrumbType[] => {
  const { asPath } = useRouter()
  const pathWithoutQuery = asPath.split('?')[0]
  const paths = pathWithoutQuery.split('/').slice(1, -1)

  const breadcrumbs = paths.map((path, idx) => ({
    href: `/${paths.slice(0, idx + 1).join('/')}/`,
    title: pageTitles[path],
  }))

  return [{ href: '/', title: 'TOP' }, ...breadcrumbs]
}
