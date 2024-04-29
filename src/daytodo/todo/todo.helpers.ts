import { v4 } from 'uuid';
import { Fulfillment, NewTodo, Todo } from './todo.model';

export function fulfillTodo(todo: Todo): Todo {
  const { fulfillments } = todo;
  const updatedFulfillments = [...fulfillments, { date: new Date(), id: v4() } satisfies Fulfillment];
  return { ...todo, fulfillments: updatedFulfillments, lastUpdatedAt: new Date() };
}

export function unfulfillTodo(todo: Todo, fulfillmentId: string): Todo {
  const { fulfillments } = todo;
  const updatedFulfillments = fulfillments.filter((fulfillment) => fulfillment.id !== fulfillmentId);
  return { ...todo, fulfillments: updatedFulfillments, lastUpdatedAt: new Date() };
}

export function createTodo(newTodo: NewTodo): Todo {
  return { ...newTodo, id: v4(), ownerId: 'tomas', fulfillments: [], createdAt: new Date(), lastUpdatedAt: new Date() };
}
