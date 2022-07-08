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
    name: "Velocidade (Km/h)",
    data: Array(250).fill({x: new Date().getTime() - 10800000,
      y: 0}),
    },
  ]
  consumo = [{
    name: "Consumo de combustivel (Km/l)",
    data: Array(250).fill({x: new Date().getTime() - 10800000,
    y: 0}),
  }]
  temperatura = [{
    name: "Temperatura (ºC)",
    data: Array(250).fill({x: new Date().getTime() - 10800000,
      y: 0}),
  }]
  rpm = [{
    name: "Rpm (Rotações por minuto)",
    data: Array(250).fill({x: new Date().getTime() - 10800000,
      y: 0}),
  }]

  geral = [{
        nome:"Gráfico geral",
        name: "Consumo",
        data: Array(250).fill({x: new Date().getTime() - 10800000,
        y: 0})},
      {
        name: "Rpm",
        data: Array(250).fill({x: new Date().getTime() - 10800000,
          y: 0}),
      },
      {
        name: "Velocidade",
        data: Array(250).fill({x: new Date().getTime() - 10800000,
          y: 0}),
      },
      {
        name: "Temperatura",
        data: Array(250).fill({x: new Date().getTime() - 10800000,
          y: 0}),
      }
  ]

  cat = (Array(250).fill("")).map((item, i)=>{
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

    const tempos:number[] = [];
    // setTimeout(() => {
    //   console.log("Amostras obtidas com sucesso!")
    //   console.log(tempos);
    //   debugger
    // }, 300000);
    let tempoAnterior = Date.now()
    this.mqtt.topicoConsumo().subscribe((data: IMqttMessage) => {
      let atual = Date.now()
      let intervalo = atual - tempoAnterior;
      tempoAnterior = atual;
      // tempos.push(intervalo);//Amostra de intervalos entre mensagens
      const i = this.consumo[0].data.length
      this.consumo[0].data[i] ={x:new Date().getTime() - 10800000, y:Number(data.payload.toString())} ;
      this.consumo[0].data.splice(0,1);
      this.consumo = this.consumo.slice(0);
      this.geral[0].data = this.consumo[0].data;
      this.geral =  this.geral.slice(0)
    });

    this.mqtt.topicoRpm().
      subscribe((data: IMqttMessage) => {
        const i = this.rpm[0].data.length
        this.rpm[0].data[i] ={x:new Date().getTime() - 10800000, y:Number(data.payload.toString())} ;
        this.rpm[0].data.splice(0,1);
        this.rpm = this.rpm.slice(0);
        this.geral[1].data = this.rpm[0].data;
        this.geral =  this.geral.slice(0)

      });

    this.mqtt.topicoVelocidade()
      .subscribe((data: IMqttMessage) => {
        const i = this.velocidade[0].data.length
        this.velocidade[0].data[i] ={x:new Date().getTime() - 10800000, y:Number(data.payload.toString())} ;
        this.velocidade[0].data.splice(0,1);
        this.velocidade = this.velocidade.slice(0);
        this.geral[2].data = this.velocidade[0].data;
        this.geral =  this.geral.slice(0)

      });

    this.mqtt.topicoTemperatura()
      .subscribe((data: IMqttMessage) => {
        const i = this.temperatura[0].data.length
        this.temperatura[0].data[i] ={x:new Date().getTime() - 10800000, y:Number(data.payload.toString())} ;
        this.temperatura[0].data.splice(0,1);
        this.temperatura = this.temperatura.slice(0);
        this.geral[3].data = this.temperatura[0].data;
        this.geral =  this.geral.slice(0)
      });
  }
}
