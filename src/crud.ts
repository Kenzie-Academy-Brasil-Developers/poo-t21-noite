import { ITodo, TCreateTodoData, TUpdateTodoData } from "./omitpickpartial";

interface ITodoService{
    todoList: ITodo[];
    id: number;
    create(data: TCreateTodoData): ITodo;
    remove(removingId: number): string;
    update(updatingId: number, date: TUpdateTodoData): ITodo | string;
}

class TodoService implements ITodoService {
   todoList: ITodo[];
   id = 1;

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

const todoList = new TodoService();