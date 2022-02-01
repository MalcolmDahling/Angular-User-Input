import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }





    textInput:any = '';

    handleChange(event:KeyboardEvent){
        this.textInput = (event.target as HTMLInputElement).value;
    }




    handleChange2(){
        
    }



    textInput3:any = '';
    
    handleChange3(textInput3:any){
        this.textInput3 = textInput3.value;
    }
}

