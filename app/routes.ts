
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('routes/admin/AdminLayout.tsx', [

    route('/', 'routes/admin/Dashboard.tsx'),
    route('dashboard', 'routes/admin/Dashboard.tsx'),
    route('all-users', 'routes/admin/AllUsers.tsx')
  ])
] satisfies RouteConfig;