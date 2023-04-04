<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo" :href="logoUrl">
                <!-- <img :src="logoSrc" alt="logo" /> -->
            </a>
            <a class="navbar-brand brand-logo-mini" :href="logoUrl">
                <!-- <img :src="logoIconSrc" alt="logo" /> -->
            </a>
        </div>

        <ul class="nav nav-scrolling">
            <li class="nav-item" v-for="(item, index) in data" :key="index">
                <router-link class="nav-link" :to="item.id ? '#' + item.id : item.url" active-class="active"
                    :data-bs-toggle="item.id ? 'collapse' : false" :aria-expanded="item.id ? 'false' : false"
                    :aria-controls="item.id ? item.id : false">
                    <span class="icon-wrapper">
                        <icon :type="item.icon" class="menu-icon" />
                    </span>
                    <span class="menu-title">{{ item.name }}</span>
                    <icon v-if="item.subMenu" class="menu-arrow" type="arrow-down-circle" size="16" />
                </router-link>

                <div class="collapse" v-if="item.subMenu" :id="item.id">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item" v-for="(submenuItem, index) in item.subMenu" :key="index">
                            <router-link class="nav-link" :to="submenuItem.url">
                                {{ submenuItem.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
const props = defineProps({
    data: {
        type: Array,
        required: true,
        default: [{ "id": "dashboard-samples", "icon": "pie-chart", "name": "Dashboard", "permission": true, "subMenu": [{ "name": "Default", "url": "http://readykit.test/admin/dashboard", "permission": true }, { "name": "Academy", "url": "http://readykit.test/dashboard/academy", "permission": true }, { "name": "E-commerce", "url": "http://readykit.test/dashboard/ecommerce", "permission": true }, { "name": "Hospital", "url": "http://readykit.test/dashboard/hospital", "permission": true }, { "name": "HRM", "url": "http://readykit.test/dashboard/hrm", "permission": true }, { "name": "POS", "url": "http://readykit.test/dashboard/pos", "permission": true }] }, { "id": "auth-pages", "icon": "power", "name": "Authentication", "permission": true, "subMenu": [{ "name": "Registration", "url": "http://readykit.test/user/registration", "permission": true }, { "name": "Forget Password", "url": "http://readykit.test/forget-password", "permission": true }, { "name": "Reset password", "url": "http://readykit.test/reset/password", "permission": true }] }, { "id": "tables", "icon": "grid", "name": "Datatables", "permission": true, "subMenu": [{ "name": "Basic", "url": "http://readykit.test/tables/basic-datatable", "permission": true }, { "name": "Functional", "url": "http://readykit.test/tables/functional", "permission": true }, { "name": "Advance", "url": "http://readykit.test/tables/advance", "permission": true }, { "name": "Responsive", "url": "http://readykit.test/tables/responsive", "permission": true }, { "name": "Filter Type", "url": "http://readykit.test/tables/filter", "permission": true }, { "name": "Grid View", "url": "http://readykit.test/tables/grid-view", "permission": true }, { "name": "Paginated", "url": "http://readykit.test/tables/pagination", "permission": true }] }, { "id": "forms", "icon": "sidebar", "name": "Forms & Fields", "permission": true, "subMenu": [{ "name": "Form Layouts", "url": "http://readykit.test/form/layouts", "permission": true }, { "name": "Form Elements", "url": "http://readykit.test/form/elements", "permission": true }, { "name": "Form Validations", "url": "http://readykit.test/form/validation", "permission": true }, { "name": "Form wizard", "url": "http://readykit.test/form-wizard", "permission": true }, { "name": "Text Editor", "url": "http://readykit.test/form/text", "permission": true }] }, { "id": "ui", "icon": "trello", "name": "UI Elements", "permission": true, "subMenu": [{ "name": "Avatars", "url": "http://readykit.test/avatars", "permission": true }, { "name": "Badges & Pills", "url": "http://readykit.test/badges", "permission": true }, { "name": "Buttons", "url": "http://readykit.test/buttons", "permission": true }, { "name": "Cards", "url": "http://readykit.test/cards", "permission": true }, { "name": "Checkboxes & Radios", "url": "http://readykit.test/checkboxes-radios", "permission": true }, { "name": "Notes", "url": "http://readykit.test/error-notes", "permission": true }, { "name": "Icons", "url": "http://readykit.test/icons", "permission": true }, { "name": "Modals", "url": "http://readykit.test/modal", "permission": true }, { "name": "Nothing to Show", "url": "http://readykit.test/nothing-to-show", "permission": true }, { "name": "Tabs", "url": "http://readykit.test/tabs", "permission": true }] }, { "id": "pages", "icon": "copy", "name": "Sample Pages", "permission": true, "subMenu": [{ "name": "User Profile", "url": "http://readykit.test/my-profile", "permission": true }, { "name": "Report", "url": "http://readykit.test/report-view", "permission": true }, { "name": "Invoice", "url": "http://readykit.test/invoice-page", "permission": true }, { "name": "Blank page", "url": "http://readykit.test/blank-page", "permission": true }] }, { "icon": "message-square", "name": "Chat", "url": "http://readykit.test/chat", "permission": true }, { "icon": "map", "name": "Maps", "url": "http://readykit.test/maps", "permission": true }, { "icon": "calendar", "name": "Calendar View", "url": "http://readykit.test/calendar-view", "permission": true }, { "icon": "columns", "name": "Kanban View", "url": "http://readykit.test/kanban-view", "permission": true }, { "id": "social_network", "icon": "users", "name": "Social network", "permission": true, "subMenu": [{ "name": "Feeds", "url": "http://readykit.test/social-feeds", "permission": true }, { "name": "Profile", "url": "http://readykit.test/social-profile", "permission": true }] }, { "icon": "credit-card", "name": "Payment Method", "url": "http://readykit.test/payment-view", "permission": true }, { "id": "error-pages", "icon": "alert-triangle", "name": "Error Pages", "permission": true, "subMenu": [{ "name": "Error 400", "url": "http://readykit.test/error-400", "permission": true }, { "name": "Error 401", "url": "http://readykit.test/error-401", "permission": true }, { "name": "Error 403", "url": "http://readykit.test/error-403", "permission": true }, { "name": "Error 404", "url": "http://readykit.test/error-404", "permission": true }, { "name": "Error 500", "url": "http://readykit.test/error-500", "permission": true }, { "name": "Error 503", "url": "http://readykit.test/error-503", "permission": true }] }, { "icon": "user-check", "name": "Users & Roles", "url": "http://readykit.test/users-and-roles", "permission": true }, { "icon": "settings", "name": "Settings", "url": "http://readykit.test/app-setting", "permission": true }, { "icon": "book", "name": "Documentation", "url": "http://readykit.test/documentation/index.html", "permission": true }]
    },
    logoSrc: {
        type: String,
        default: 'images/core.png',
    },
    logoIconSrc: {
        type: String,
        default: 'images/core.png',
    },
    logoUrl: {
        type: String,
        default: '/'
    }
})

onMounted(() => {
    nextTick(() => {
        let body = document.querySelector('body'),
            current = location.pathname,
            sidebar = document.querySelector('.sidebar'),
            sidebarType = localStorage.getItem('sidebar');
        (function () {
            document.querySelectorAll('.nav li a').forEach(nav => {
                // addActiveClass(nav);
            });

            document.querySelectorAll('.horizontal-menu .nav li a').forEach(nav => {
                // addActiveClass(nav);
            });

            // Change sidebar and content-wrapper height
            applyStyles();

            function applyStyles() {
                //Applying perfect scrollbar
                if (!body.classList.contains("rtl")) {
                    if (body.classList.contains("sidebar-fixed")) {
                        let fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
                    }
                }
            }
        })()

        let navbars = sidebar.querySelectorAll('.nav-item');
        navbars.forEach(nav => {
            nav.addEventListener('mouseenter', (ev) => {
                let body = document.querySelector('body');
                let sidebarIconOnly = body.classList.contains("sidebar-icon-only");
                let sidebarHoverOnly = body.classList.contains("sidebar-hover-only");
                let sidebarFixed = body.classList.contains("sidebar-fixed");
                if (sidebarIconOnly) {
                    if (sidebarFixed) {
                        if (ev.type === 'mouseenter') {
                            body.classList.remove('sidebar-icon-only');
                        }
                    } else {
                        let $menuItem = nav;
                        if (ev.type === 'mouseenter') {
                            $menuItem.classList.add('hover-open')
                        } else if (ev.type === 'click') {
                            $menuItem.classList.add('hover-open')
                        } else {
                            $menuItem.classList.remove('hover-open')
                        }
                    }
                }
            })
            nav.addEventListener('mouseleave', (ev) => {
                let sidebarIconOnly = document.body.classList.contains("sidebar-icon-only");
                let sidebarFixed = document.body.classList.contains("sidebar-fixed");
                let sidebarHoverOnly = document.body.classList.contains("sidebar-hover-only")
                if (sidebarIconOnly) {
                    nav.classList.remove('hover-open')
                }
            })
        })

        sidebar.addEventListener('mouseleave', (ev) => {
            let sidebarIconOnly = body.classList.contains("sidebar-icon-only");
            let sidebarFixed = body.classList.contains("sidebar-fixed");
            let sidebarHoverOnly = document.body.classList.contains("sidebar-hover-only")
            if (sidebarHoverOnly) {
                sidebar.querySelectorAll('.collapse.show').forEach(i => i.classList.remove('show'))
            }
        })

    })
})
</script>
