import { useVisible } from '@hooks/top/use-visible'
import { Footer } from '@libs/components/Footer'
import { Header } from '@libs/components/Header'

export const getTopLayout =
  (): Layout =>
  // eslint-disable-next-line react/display-name
  (page) => {
    const visible = useVisible()

    return (
      <>
        <Header visible={visible} />
        {page}
        <Footer />
      </>
    )
  }
