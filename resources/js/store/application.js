import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
    // state
    const leftMenu = ref('')
    const loading = ref(false)

    // methods
    const init = () => {
        setLeftMenu()
    }

    const setLeftMenu = (type = localStorage.getItem('sidebar') || 'normal') => {
        leftMenu.value = type
        localStorage.setItem('sidebar', type);
        let body = document.querySelector('body');
        if (type === 'icon-only') {
            body.classList.remove('sidebar-hover-only');
            body.classList.toggle('sidebar-icon-only');
        } else if (type === 'floating') {
            body.classList.remove('sidebar-icon-only');
            body.classList.toggle('sidebar-hover-only');
            let sidebar = document.querySelector('.sidebar')
            sidebar.querySelectorAll('.collapse.show').forEach(i => i.classList.remove('show'))
        } else if (type === 'normal') {
            body.classList.remove('sidebar-icon-only');
            body.classList.remove('sidebar-hover-only');
        }
    }

    return { loading, setLeftMenu, init, leftMenu }
})
