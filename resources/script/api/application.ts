import http from '@/helper/http'
import type { Settings, LocaleResponse, Locale } from '@/types/application'
import type { SidebarMenu } from '@/types/sidebar'

export let sidebarResponse: SidebarMenu[] = [
    {
        id: "dashboard-samples",
        icon: "pie-chart",
        name: "Dashboard",
        permission: true,
        subMenu: [
            { name: "Default", url: "/app/dashboard", permission: true },
            { name: "Academy", url: "/app/dashboard/academy", permission: true },
            { name: "E-commerce", url: "/app/dashboard/ecommerce", permission: true },
            { name: "Hospital", url: "/app/dashboard/hospital", permission: true },
            { name: "HRM", url: "/app/dashboard/hrm", permission: true },
            { name: "POS", url: "/app/dashboard/pos", permission: true }
        ]
    },
    {
        id: "auth-pages",
        icon: "power",
        name: "Authentication",
        permission: true,
        subMenu: [
            { name: "Registration", url: "/app/registration", permission: true },
            { name: "Forget Password", url: "/app/forget-password", permission: true },
            { name: "Reset password", url: "/app/reset/password", permission: true }
        ]
    },
    {
        id: "tables",
        icon: "grid",
        name: "Datatables",
        permission: true,
        subMenu: [
            { name: "Basic", url: "/app/tables/basic-datatable", permission: true },
            { name: "Functional", url: "/app/tables/functional", permission: true },
            { name: "Advance", url: "/app/tables/advance", permission: true },
            { name: "Responsive", url: "/app/tables/responsive", permission: true },
            { name: "Filter Type", url: "/app/tables/filter", permission: true },
            { name: "Grid View", url: "/app/tables/grid-view", permission: true },
            { name: "Paginated", url: "/app/tables/pagination", permission: true }
        ]
    },
    {
        icon: "message-square",
        name: "Chat",
        url: "/app/chat",
        permission: true
    },
    {
        icon: "map",
        name: "Maps",
        url: "/app/maps",
        permission: true
    },
    {
        icon: "calendar",
        name: "Calendar View",
        url: "/app/calendar-view",
        permission: true
    },
    {
        icon: "columns",
        name: "Kanban View",
        url: "/app/kanban-view",
        permission: true
    },
    {
        id: "social_network",
        icon: "users",
        name: "Social network",
        permission: true,
        subMenu: [
            { name: "Feeds", url: "/app/social-feeds", permission: true },
            { name: "Profile", url: "/app/social-profile", permission: true }
        ]
    },
    { icon: "credit-card", name: "Payment Method", url: "/app/payment-view", permission: true },
    { icon: "book", name: "Documentation", url: "/app/documentation/index.html", permission: true }]

export const GET_SETTINGS = (params) => {
    return http.get<Settings>('/app-setting?' + new URLSearchParams(params).toString())
}
