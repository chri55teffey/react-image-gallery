import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development' || process.env.VUE_APP_INCLUDE_DEMOS) {
  const vueBookRoutes = require('./vueBookRoutes').default
  vueBookRoutes.forEach(route => demoRoutes.push(route))
}

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'dashboard' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: () => import('../components/auth/signup/Signup.vue'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: () => import('../components/pages/404-pages/VuesticPageNotFoundSearch.vue'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: () => import('../components/pages/404-pages/VuesticPageNotFoundSimple.vue'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: () => import('../components/pages/404-pages/VuesticPageNotFoundCustom.vue'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VuesticPageNotFoundLargeText.vue'),
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
          default: true,
        },
        {
          name: 'statistics',
          path: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              name: 'charts',
              path: 'charts',
              component: () => import('../components/statistics/charts/Charts.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'progress-bars',
              path: 'progress-bars',
              component: () => import('../components/statistics/progress-bars/ProgressBars.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
              },
            },
          ],
        },
        {
          name: 'forms',
          path: 'forms',
          component: EmptyParentComponent,
          children: [
            {
              name: 'form-elements',
              path: 'form-elements',
              component: () => import('../components/forms/form-elements/FormElements.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
              },
            },
            {
              name: 'form-wizards',
              path: 'form-wizards',
              component: () => import('../components/forms/form-wizard/FormWizard.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Wizards',
              },
            },
            {
              name: 'medium-editor',
              path: 'medium-editor',
              component: () => import('../components/forms/medium-editor/MediumEditor.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
              },
            },
          ],
        },
        {
          name: 'tables',
          path: 'tables',
          component: () => import('../components/tables/Tables.vue'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
          },
        },
        {
          name: 'ui',
          path: 'ui',
          component: EmptyParentComponent,
          children: [
            {
              name: 'typography',
              path: 'typography',
              component: () => import('../components/ui/typography/Typography.vue'),
            },
            {
              name: 'buttons',
              path: 'buttons',
              component: () => import('../components/ui/buttons/Buttons'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Buttons',
              },
            },
            {
              name: 'color-pickers',
              path: 'color-pickers',
              component: () => import('../components/ui/color-pickers/ColorPickers'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Color-Pickers',
              },
            },
            {
              name: 'timelines',
              path: 'timelines',
              component: () => import('../components/ui/timelines/Timelines'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Timelines',
              },
            },
            {
              name: 'dropdowns',
              path: 'dropdowns',
              component: () => import('../components/ui/dropdowns/Dropdowns'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Dropdowns',
              },
            },
            {
              name: 'notifications',
              path: 'notifications',
              component: () => import('../components/ui/notifications/Notifications'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Notifications',
              },
            },
            {
              path: 'icons',
              component: () => import('../components/ui/icons/Icons'),
              children: [
                {
                  name: 'icon-sets',
                  path: '', // Default route
                  component: () => import('../components/ui/icons/SetsList'),
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
                  }
                },
                {
                  name: 'icon-set',
                  path: ':name',
                  component: () => import('../components/ui/icons/IconSet'),
                  props: true,
                  meta: {
                    wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Icons',
                  }
                },
              ],
            },
            {
              name: 'spinners',
              path: 'spinners',
              component: () => import('../components/ui/spinners/Spinners'),
            },
            {
              name: 'grid',
              path: 'grid',
              component: () => import('../components/ui/grid/Grid'),
            },
            {
              name: 'modals',
              path: 'modals',
              component: () => import('../components/ui/modals/Modals'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Modals',
              },
            },
            {
              name: 'cards',
              path: 'cards',
              component: () => import('../components/ui/cards/Cards'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Cards',
              },
            },
            {
              name: 'file-upload',
              path: 'file-upload',
              component: () => import('../components/ui/file-upload/FileUpload'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/File-Upload',
              },
            },
            {
              name: 'tags',
              path: 'tags',
              component: () => import('../components/ui/tags/Tags'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tags',
              },
            },
            {
              name: 'tree-view',
              path: 'tree-view',
              component: () => import('../components/ui/tree-view/TreeView'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tree-view',
              },
            },
            {
              name: 'collapses',
              path: 'collapses',
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Collapse',
              },
              component: () => import('../components/ui/collapse/Collapses')
            },
            {
              name: 'filters',
              path: 'filters',
              component: () => import('../components/ui/filters/Filters')
            },
            {
              name: 'spacing',
              path: 'spacing',
              component: () => import('../components/ui/spacing/Spacing')
            },
            {
              name: 'sliders',
              path: 'sliders',
              component: () => import('../components/ui/sliders/Sliders'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Sliders'
              },
            }
          ]
        },
        {
          name: 'extra',
          path: 'extra',
          component: () => import('../components/extra/Extra'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tabs',
          },
        },
        {
          name: 'maps',
          path: 'maps',
          component: EmptyParentComponent,
          children: [
            {
              name: 'google-maps',
              path: 'google-maps',
              component: () => import('../components/maps/google-maps/GoogleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'yandex-maps',
              path: 'yandex-maps',
              component: () => import('../components/maps/yandex-maps/YandexMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'leaflet-maps',
              path: 'leaflet-maps',
              component: () => import('../components/maps/leaflet-maps/LeafletMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'bubble-maps',
              path: 'bubble-maps',
              component: () => import('../components/maps/bubble-maps/BubbleMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
            {
              name: 'line-maps',
              path: 'line-maps',
              component: () => import('../components/maps/line-maps/LineMapsPage'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
              },
            },
          ],
        },
        {
          name: 'pages',
          path: 'pages',
          component: EmptyParentComponent,
          children: [
            {
              name: '404-pages',
              path: '404-pages',
              component: () => import('../components/pages/404-pages/404PagesPage'),
            },
          ],
        },
      ],
    },
  ],
})
