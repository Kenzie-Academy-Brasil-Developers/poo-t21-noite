import { ITodo, TCreateTodoData, TUpdateTodoData } from "./omitpickpartial";

interface ITodoService{
    todoList: ITodo[];
    create(data: TCreateTodoData): ITodo;
    remove(removingId: number): string;
    update(updatingId: number, date: TUpdateTodoData): ITodo | string;
}

//Níveis de acesso
// Privado - restringe o uso de variáveis e métodos somente ao interior da classe
// Público - é possível utilizar tanto internamente quanto externamente o recurso
/*
class TodoService implements ITodoService {
   todoList: ITodo[];
   private id = 1;

   constructor(todoList: ITodo[] = []) {
      this.todoList = todoList;
   }

   create(data: TCreateTodoData): ITodo {
      const now = new Date();

      const newTodo: ITodo = {
         id: this.id,
         ...data,
         created_at: now,
      };

      this.todoList.push(newTodo);

      this.id++;

      return newTodo;
   }

   remove(removingId: number): string {
      const index = this.todoList.findIndex((todo) => todo.id === removingId);

      if (index !== -1) {
         this.todoList.splice(index, 1);
         return "Todo successfully deleted.";
      }

      return "Todo not found.";
   }

   update(updatingId: number, data: TUpdateTodoData): string | ITodo {
      const currentTodo = this.todoList.find((todo) => todo.id === updatingId);

      if (!currentTodo) {
         return "Todo not found.";
      }

      const now = new Date();

      const updateTodo: ITodo = {
         ...currentTodo,
         ...data,
         updated_at: now,
      };

      const index = this.todoList.findIndex((todo) => todo.id === updatingId);

      this.todoList.splice(index, 1, updateTodo);

      return updateTodo;
   }
}
*/

const todoList: ITodo[] = [];
let id = 1;

// classes estáticas não podem conter variáveis
// classes estáticas não precisam de instância para funcionar

class TodoService {
   static create(data: TCreateTodoData): ITodo {
      const now = new Date();

      const newTodo: ITodo = {
         id: id,
         ...data,
         created_at: now,
      };

      todoList.push(newTodo);

      id++;

      return newTodo;
   }

   static remove(removingId: number): string {
      const index = todoList.findIndex((todo) => todo.id === removingId);

      if (index !== -1) {
         todoList.splice(index, 1);
         return "Todo successfully deleted.";
      }

      return "Todo not found.";
   }

   static update(updatingId: number, data: TUpdateTodoData): string | ITodo {
      const currentTodo = todoList.find((todo) => todo.id === updatingId);

      if (!currentTodo) {
         return "Todo not found.";
      }

      const now = new Date();

      const updateTodo: ITodo = {
         ...currentTodo,
         ...data,
         updated_at: now,
      };

      const index = todoList.findIndex((todo) => todo.id === updatingId);

      todoList.splice(index, 1, updateTodo);

      return updateTodo;
   }
}