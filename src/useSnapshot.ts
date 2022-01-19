import { subscribe, snapshot, proxy } from 'valtio/vanilla'
import type { DeepResolveType } from 'valtio/vanilla'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useSnapshot<T extends Record<string, unknown>>(proxyObject: T) {
    return {
        subscribe(fn: (payload: DeepResolveType<T>) => void) {
            fn(snapshot(proxyObject))
            return subscribe(proxyObject, () => {
                fn(snapshot(proxyObject))
            })
        },
    }
}

export { useSnapshot, proxy }
export { proxyWithComputed, proxyWithHistory } from 'valtio/utils'
