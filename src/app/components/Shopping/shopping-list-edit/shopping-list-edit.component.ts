import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/services/Shopping/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('amountInput') amountInput: ElementRef

  constructor(private ShoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value

    if(name && amount){
      this.ShoppingService.addIngredient(name, amount)
    }
  }

  onClearIngredient(){
    this.nameInput.nativeElement.value = ''
    this.amountInput.nativeElement.value = 0
  }
}
