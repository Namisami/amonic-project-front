import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import LogoutPage from '../views/LogoutPage.vue'
import SystemPage from '../views/SystemPage.vue'
import AdduserPage from '../views/AdduserPage.vue'
import ChangerolePage from '../views/ChangerolePage.vue'
import ManagePage from '../views/ManagePage.vue'
import UserPage from '../views/UserPage.vue'
import SchedulePage from '../views/SchedulePage.vue'
import ChangeschedulePage from '../views/ChangeschedulePage.vue'
import BillingPage from '../views/BillingPage.vue'
import SearchPage from '../views/SearchPage.vue'
import BookingPage from '../views/BookingPage.vue'
import ExitPage from '../views/ExitPage.vue';
import SummaryPage from '@/views/SummaryPage.vue'
import SummaryReportPage from '@/views/SummaryReportPage.vue'
import FlightSatisfactionSurveyReport from '@/views/FlightSatisfactionSurveyReport.vue'
import PurchaseAmenities from '@/views/PurchaseAmenities.vue'
import ReportPage from '@/views/ReportPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LoginPage },
    { path: '/system', component: SystemPage },
    { path: '/adduser', component: AdduserPage },
    { path: '/logout', component: LogoutPage },
    { path: '/edit', component: ChangerolePage },
    { path: '/manage', component: ManagePage },
    { path: '/user', component: UserPage },
    { path: '/schedule', component: SchedulePage },
    { path: '/changeschedule', component: ChangeschedulePage },
    { path: '/billing', component: BillingPage },
    { path: '/booking', component: BookingPage },
    { path: '/search', component: SearchPage },
    { path: '/exit', component: ExitPage },
    { path: '/summary', component: SummaryPage },
    { path: '/report', component: SummaryReportPage },
    { path: '/surveyreport', component: FlightSatisfactionSurveyReport },
    { path: '/amentity', component: PurchaseAmenities },
    { path: '/amentity-report', component: ReportPage },
  ]
})

// router.beforeEach(async (to, from) => {
//   if (!store.state.isAuthenticated && to.name !== 'login') {
//     return { name: 'login' }
//   }
// })

export default router
