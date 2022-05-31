import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService, IMqttServiceOptions } from 'ngx-mqtt';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EventMqttService {
  public message: string;



  constructor( private _mqttService: MqttService)
  {


  }

  topicoVelocidade():Observable<IMqttMessage>{
    return this._mqttService.observe("velocidade");
  }
  topicoRpm():Observable<IMqttMessage>{
    return this._mqttService.observe("rpm");
  }
  topicoTemperatura():Observable<IMqttMessage>{
    return this._mqttService.observe("temperatura");
  }
  topicoConsumo():Observable<IMqttMessage>{
    return this._mqttService.observe("consumo");
  }
}



