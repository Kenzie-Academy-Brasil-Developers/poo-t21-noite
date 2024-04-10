export interface ITodo{
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at?: Date;
}

// type - instância de tipo (uma instância capaz de armanzenar qualquer tipo existente no Typescript)
// tipos primitivos: string, number, boolean, undefined, null
// tipos de lista: []
// tipos de união: string | number
// tipos de interface (tipos para descrever objetos)

type TStringOrNumber = string | number;

// Tipos variados (Omit, Pick e Partial) - tipos com base em uma interface (ou tipo literal de objeto)

// type TCreateTodoData = Omit<ITodo, "id" | "created_at" | "updated_at">;
export type TCreateTodoData = Pick<ITodo, "title" | "content">;
export type TUpdateTodoData = Partial<TCreateTodoData>;


