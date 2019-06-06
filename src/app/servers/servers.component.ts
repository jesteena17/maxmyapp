import { Component, OnInit } from '@angular/core';

@Component({
 // selector: '[app-servers]',
//  selector:'.app-servers',
selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='no new server is created';
servers=['test server','demo server'];
serverName='testserver';
serverCreated=false;  

constructor() {
setTimeout(()=>{
  this.allowNewServer=true;
},5000);

   }

  ngOnInit() {
  }

onCreateServer()
{
  this.serverCreated=true;
  this.servers.push(this.serverName);
  this.serverCreationStatus='server was created!!! And the server name is '+this.serverName;
}

onUpdateServerName(event:any){
  console.log(event);
  
this.serverName=(<HTMLInputElement>event.target).value;

}
}
