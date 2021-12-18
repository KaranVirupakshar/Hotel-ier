import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  template: `
  <h1>Women adda</h1>
 <div> 
       <table width="50%" border="3" >
       <tr>
                <th>Dress type</th>
                <th>price</th> 
        </tr>
       <tr *ngFor="let pp of womens">
         <td>{{pp.type}}</td>
         <td>{{pp.price}}</td>
       </tr>
       </table>
  </div>
  `,
  styleUrls: ['./app.component.css']

})
export class login {
   // womens:any[]=[{type:"kurti",price:800},{type:"lehenga",price:2500},{type:"shirt",price:1500}];
}