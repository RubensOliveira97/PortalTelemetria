import { Component, AfterViewInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { EventMqttService } from '../services/event-mqtt.service';
import { Observable } from 'rxjs';

//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;


  velocidade = [{
    name: "Velocidade",
    data: Array(100).fill({x: new Date().getTime(),
      y: 76}),
    }]
  consumo = [{
    name: "Consumo de combustivel",
    data: Array(100).fill({x: new Date().getTime(),
    y: 76}),
  }]
  temperatura = [{
    name: "Temperatura",
    data: Array(100).fill({x: new Date().getTime(),
      y: 76}),
  }]
  aceleracao = [{
    name: "Aceleração",
    data: Array(100).fill({x: new Date().getTime(),
      y: 76}),
  }]

  cat = (Array(100).fill("")).map((item, i)=>{
    if(!(i % 20)){
      return "1s"
    }else{
      return item;
    }
   })
  constructor(private mqtt: EventMqttService) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() {
    this.subscribeToTopic();
  }


  private subscribeToTopic() {

    this.mqtt.topicoConsumo().subscribe((data: IMqttMessage) => {
      console.log(data);
    });

    this.mqtt.topicoRpm().
      subscribe((data: IMqttMessage) => {
        console.log(data);
      });

    this.mqtt.topicoVelocidade()
      .subscribe((data: IMqttMessage) => {
        const i = this.velocidade[0].data.length
        this.velocidade[0].data[i] ={x:new Date().getTime(), y:Number(data.payload.toString())} ;
        this.velocidade[0].data.splice(0,1);
        this.velocidade = this.velocidade.slice(0);
      });

    this.mqtt.topicoTemperatura()
      .subscribe((data: IMqttMessage) => {
        console.log(data);
      });
  }
}
