import { createTodo, fulfillTodo, unfulfillTodo } from './todo.helpers';
import { Todo } from './todo.model';

const todo: Todo = createTodo({ color: 'blue', name: 'shower' });

console.log('todo', todo);

const fulfilledTodo: Todo = fulfillTodo(todo);

console.log('fulfilledTodo', fulfilledTodo);

const last = fulfilledTodo.fulfillments[fulfilledTodo.fulfillments.length - 1];

const unfulfilledTodo = unfulfillTodo(fulfilledTodo, last.id);

console.log('unfulfilledTodo', unfulfilledTodo);
