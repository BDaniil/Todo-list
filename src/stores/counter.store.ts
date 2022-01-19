import { proxy } from '@useSnapshot'

export const counter$ = proxy({
    count: 0,
    addCount: () => counter$.count++,
    substractCount: () => counter$.count--,
})
