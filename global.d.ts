type Layout = (page: ReactElement) => ReactNode
type WithCustomLayout<P> = P & {
  layout?: Layout
}
