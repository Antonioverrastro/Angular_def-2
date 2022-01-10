import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { AnimalsService } from 'src/app/services/animals.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  number!: number;
  category!: string;

  constructor(private readonly animalService: AnimalsService) {}

  ngOnInit(): void {}

  getAnimals(){
    this.animalService.getImages(this.category, this.number)
  }
}
