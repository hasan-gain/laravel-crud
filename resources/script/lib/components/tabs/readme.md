# Tabs [@/lib/tabs/index.vue]
Use:
```
<script setup lang="ts">
import { reactive, markRaw } from 'vue';
import type { ITabOptions } from '@/lib/components/tabs/index';
import Tabs from '@/lib/components/tabs/Index.vue'
import UserInfo from './UserInfo.vue';

const options = reactive<ITabOptions>({
    tabId: 'tab2',
    tabs: [
        {
            name: 'tab1',
            type: 'html',
            component: '<div>Tab 1</div>',
            actions: [
                { name: 'Action1', fire:() => { console.log('action1')}, class: 'btn-success', icon: 'send' },
                { name: 'Action2', fire:() => { console.log('action2')} },
            ],
            in: () => {
                console.log('in 1')
            },
            out: () => {
                console.log('out 1')
            }
        },
        {
            name: 'tab2',
            type: 'component',
            component: markRaw(UserInfo),
            in: () => {
                console.log('in 2')
            },
            out: () => {
                console.log('out 2')
            }
        }
    ]
})

</script>

<template>
    <tabs :options="options" />
</template>

```
Props
- options: [required]
````
interface ITabOptions {
    tabId: string
    tabs: ITabItem[
        {
            name: string
            type: 'html' | 'component'
            icon?: string
            component: string | Object
            headerClass?: string
            bodyClass?: string
            in?: Function
            out?: Function
            tabTitle?: string
            props?: Object
            actions?: [
                {
                    name: string
                    fire: Function
                    class?: string
                    icon?: string
                }
            ]
        }
    ]
    title?: string
    icon?: string
    class?: string
    scrollable?: boolean
    alignment?: 'horizontal' | 'vertical'
}
````

Note:
````
Also you can use "@/lib/tabs/vertical/Tabs.vue" and "@/lib/tabs.horizontal/Tabs.vue" components for more optimization.
````
