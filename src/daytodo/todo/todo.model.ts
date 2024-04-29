export interface Fulfillment {
  id: string;
  date: Date;
}

export interface Todo {
  id: string;
  ownerId: string;
  color: string;
  name: string;
  fulfillments: Fulfillment[];
  createdAt: Date;
  lastUpdatedAt: Date;
}

export interface NewTodo {
  color: string;
  name: string;
}
