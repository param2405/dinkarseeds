export { useInView } from 'react-intersection-observer'

export function useScrollReveal() {
  return {
    threshold: 0.2,
    triggerOnce: true,
  }
}
