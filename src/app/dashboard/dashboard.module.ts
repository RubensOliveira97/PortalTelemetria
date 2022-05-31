import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { SalesSummaryComponent } from "./dashboard-components/sales-summary/sales-summary.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { ReportsComponent } from "./dashboard-components/reports/reports.component";
import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: "broker.hivemq.com",
  port: 8000,
  protocol: "wss",
  path: '/mqtt/tcc-telemetria',
};
const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  declarations: [
    DashboardComponent,
    SalesSummaryComponent,
    FeedsComponent,
    ReportsComponent,
  ],
})
export class DashboardModule {}
