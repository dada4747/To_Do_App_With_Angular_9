import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import{Todo} from"./../../model/Todo";
import{faTrashAlt}from"@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
faTrashAlt=faTrashAlt;
todo:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todo)=>{
      this.todo=todo;
    });
  }
  changeTodoStatus(todos:Todo){
    this.todoService.changeStatus(todos);
  }
  deleteTodo(todos:Todo){
    this.todoService.deleteTodo(todos);
  }

}
