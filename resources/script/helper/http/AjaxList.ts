import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { useNProgress } from '@vueuse/integrations/useNProgress'

interface Item {
    url: string
    method: string
}

class AjaxList {
    #requested: Item[]
    constructor() {
        this.#requested = []
    }

    get count() {
        return this.#requested.length
    }

    add(config: AxiosRequestConfig) {
        this.#requested.push({ url: config.url || '', method: config.method || '' })
        this.#updatNprogress()
    }

    done(response: AxiosResponse | AxiosError) {
        let index = this.#requested.findIndex(i => i.url === response.config?.url && i.method === response.config?.method)
        this.#requested.splice(index, 1)
        this.#updatNprogress()
    }

    #updatNprogress() {
        const { progress } = useNProgress()
        progress.value = this.value
    }

    reset() {
        this.#requested = []
    }

    get value() {
        return !!this.#requested.length ? this.#requested.length / 100 : 1
    }
}

export default new AjaxList()
