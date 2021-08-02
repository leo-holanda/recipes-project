import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('amountInput') amountInput: ElementRef
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value

    if(name && amount){
      this.newIngredient.emit({
        'name': name,
        'amount': amount
      })
    }
  }

  onClearIngredient(){
    this.nameInput.nativeElement.value = ''
    this.amountInput.nativeElement.value = 0
  }
}
