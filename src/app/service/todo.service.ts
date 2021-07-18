import { Injectable } from '@angular/core';
import{ of } from 'rxjs';
import{ Todo } from './../model/Todo'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[];
  constructor() { 
    this.todos=[
      {
        id:"111",
        title:"learn cpp",
        isComplete:true,
        date:new Date(),
      },
      {
        id:"222",
        title:"learn java",
        isComplete:true,
        date:new Date(),
      },
      {
        id:"333",
        title:"learn Angular",
        isComplete:false,
        date:new Date(),
      },
    ]
  }
  getTodos(){
    return of(this.todos)
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
  changeStatus(todo:Todo){
    this.todos.map(singleTodo=>{
      if(singleTodo.id==todo.id){
        todo.isComplete=!todo.isComplete;
      }
    });
  }

  deleteTodo(todo:Todo){
    const inndexofTodo=this.todos.findIndex(
      (currentObj)=>currentObj.id===todo.id,
    );
    this.todos.splice(inndexofTodo,1);
    

  }
}
