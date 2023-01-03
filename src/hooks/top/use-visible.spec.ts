import { cleanup, renderHook } from '@testing-library/react-hooks'
import { useWindowScroll } from 'react-use'

import { useVisible } from './use-visible'

jest.mock('react-use', () => ({
  useWindowScroll: jest.fn(),
}))

describe('useVisible', () => {
  beforeEach(() => {
    jest.resetAllMocks()
    cleanup()
  })

  describe('ページトップのとき', () => {
    beforeEach(() => {
      ;(useWindowScroll as jest.Mock).mockReturnValue({ y: 0 })
    })
    it('mount前はundefined、mount後はfalseが返る', () => {
      const { result } = renderHook(() => useVisible())
      expect(result.all).toStrictEqual([undefined, false])
    })
  })

  describe('ページトップ以外のとき', () => {
    beforeEach(() => {
      ;(useWindowScroll as jest.Mock).mockReturnValue({ y: 1 })
    })
    it('mount前はundefined、mount後はtrueが返る', () => {
      const { result } = renderHook(() => useVisible())
      expect(result.all).toStrictEqual([undefined, true])
    })
  })
})
