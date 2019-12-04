import { of } from 'rxjs';

import * as actions from '../models/todos/actions';
import * as epics from '../models/todos/epics';
import * as apiService from '../services/api';

// Log errors only to jest-virtual-console
console.error = () => {};

// Jest will mock the api service
jest.mock('../services/api');

// Preset test data
const data = [
  {
    _id: 1,
    text: 'Todo Number #1',
    completed: false,
  },
  {
    _id: 2,
    text: 'Todo Number #2',
    completed: true,
  },
];

describe('Epics', () => {
  // Testing redux observable epics
  describe('Load todos epic', () => {
    // Test the successful case of `loadTodosEpic`
    it('should dispatch correct action when the todos have loaded', done => {
      // Mock the api service's `getTodos` function
      apiService.getTodos.mockReturnValue(
        Promise.resolve({
          body: data,
        })
      );

      const action$ = of(actions.loadTodosRequest());
      const epic$ = epics.loadTodosEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.loadTodosSuccess.type);
        expect(action.payload).toEqual(data);
        done();
      });
    });
  });

  describe('Add todo epic', () => {
    // Test the correct call of apiService `addTodo` function
    it('should correctly call `apiService` to add todo', done => {
      // Mock the apiService `addTodo` response
      apiService.addTodo.mockReturnValue(Promise.resolve({}));

      const action$ = of(actions.addTodoRequest(data[0].text));
      const epic$ = epics.addTodoEpic(action$);

      epic$.subscribe(() => {
        expect(apiService.addTodo.mock.calls[0][0]).toEqual(data[0].text);
        done();
      });
    });

    // Test the successful case of `addTodoEpic`
    it('should dispatch correct action when a todo has been added', done => {
      // Mock the api service's `addTodo` function
      apiService.addTodo.mockReturnValue(
        Promise.resolve({
          body: data[0],
        })
      );

      const action$ = of(actions.addTodoRequest());
      const epic$ = epics.addTodoEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.addTodoSuccess.type);
        expect(action.payload).toEqual(data[0]);
        done();
      });
    });
  });

  describe('Toggle todo epic', () => {
    // Test the correct call of apiService `toggleTodo` function
    it('should correctly call `apiService` to toggle todo', done => {
      // Mock the apiService `toggleTodo` response
      apiService.toggleTodo.mockReturnValue(Promise.resolve({}));

      const action$ = of(actions.toggleTodoRequest(data[0]));
      const epic$ = epics.toggleTodoEpic(action$);

      epic$.subscribe(() => {
        expect(apiService.toggleTodo.mock.calls[0][0]).toEqual(data[0]);
        done();
      });
    });

    // Test the successful case of `toggleTodoEpic`
    it('should dispatch correct action when a todo has been toggled', done => {
      // Mock the apiService `toggleTodo` response
      apiService.toggleTodo.mockReturnValue(
        Promise.resolve({
          body: { ...data[0], completed: !data[0].completed },
        })
      );

      const action$ = of(actions.toggleTodoRequest(data[0]));
      const epic$ = epics.toggleTodoEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.toggleTodoSuccess.type);
        expect(action.payload).toEqual({
          ...data[0],
          completed: !data[0].completed,
        });
        done();
      });
    });
  });

  describe('Toggle all todos epic', () => {
    // Test the successful case of `toggleAllEpic`
    it('should dispatch correct action when all todo has been toggled', done => {
      // Mock the apiService `toggleAllTodos` response
      apiService.toggleAllTodos.mockReturnValue(
        Promise.resolve({
          body: data.map(item => ({ ...item, completed: true })),
        })
      );

      const action$ = of(actions.toggleAllRequest());
      const epic$ = epics.toggleAllEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.toggleAllSuccess.type);
        expect(action.payload).toEqual(
          data.map(item => ({ ...item, completed: true }))
        );
        done();
      });
    });
  });

  describe('Remove todo epic', () => {
    // Test the correct call of apiService `removeTodo` function
    it('should correctly call `apiService` to remove todo', done => {
      // Mock the apiService `removeTodo` response
      apiService.removeTodo.mockReturnValue(Promise.resolve({}));

      const action$ = of(actions.removeTodoRequest(data[0]));
      const epic$ = epics.removeTodoEpic(action$);

      epic$.subscribe(() => {
        expect(apiService.removeTodo.mock.calls[0][0]).toEqual(data[0]);
        done();
      });
    });

    // Test the successful case of `removeEpic`
    it('should dispatch correct action when a todo has been removed', done => {
      // Mock the apiService `removeTodos` response
      apiService.removeTodo.mockReturnValue(
        Promise.resolve({
          body: data[0],
        })
      );

      const action$ = of(actions.removeTodoRequest(data[0]));
      const epic$ = epics.removeTodoEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.removeTodoSuccess.type);
        expect(action.payload).toEqual(data[0]);
        done();
      });
    });
  });

  describe('Remove completed todos epic', () => {
    // Test the successful case of `removeCompletedEpic`
    it('should dispatch correct action when completed todos have been removed', done => {
      // Mock the apiService `removeCompletedTodos` response
      apiService.removeCompletedTodos.mockReturnValue(
        Promise.resolve({
          body: [data[1]],
        })
      );

      const action$ = of(actions.removeCompletedRequest());
      const epic$ = epics.removeCompletedEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.removeCompletedSuccess.type);
        expect(action.payload).toEqual([data[1]]);
        done();
      });
    });
  });
});
