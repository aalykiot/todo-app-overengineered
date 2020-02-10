import { of } from 'rxjs';

import * as actions from 'models/todos/actions';
import * as epics from 'models/todos/epics';
import * as apiService from 'services/api';

console.error = () => {};

jest.mock('services/api');

describe('epics', () => {
  describe('load-todos', () => {
    it('creates todos/LOAD_TODOS_SUCCESS when fetching todos has been done', done => {
      const data = [
        {
          id: 1,
          text: 'Todo Number #1',
          completed: false,
        },
        {
          id: 2,
          text: 'Todo Number #2',
          completed: true,
        },
      ];

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

  describe('add-todo', () => {
    it('should call apiService correctly', done => {
      apiService.addTodo.mockReturnValue(Promise.resolve({}));

      const text = 'Todo Number #1';

      const action$ = of(actions.addTodoRequest(text));
      const epic$ = epics.addTodoEpic(action$);

      epic$.subscribe(() => {
        expect(apiService.addTodo.mock.calls[0][0]).toEqual(text);
        done();
      });
    });

    // Test the successful case of `addTodoEpic`
    it('creates todos/ADD_TODO_SUCCESS when a new todo has been added', done => {
      const data = {
        id: 1,
        text: 'Todo Number #1',
        completed: false,
      };

      apiService.addTodo.mockReturnValue(
        Promise.resolve({
          body: data,
        })
      );

      const action$ = of(actions.addTodoRequest(data.text));
      const epic$ = epics.addTodoEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.addTodoSuccess.type);
        expect(action.payload).toEqual(data);
        done();
      });
    });
  });

  describe('toggle-todo', () => {
    it('should call apiService correctly', done => {
      const todo = {
        id: 1,
        text: 'Todo Number #1',
        completed: false,
      };

      const response = {
        id: 1,
        text: 'Todo Number #1',
        completed: true,
      };

      apiService.toggleTodo.mockReturnValue(
        Promise.resolve({ body: response })
      );

      const action$ = of(actions.toggleTodoRequest(todo));
      const epic$ = epics.toggleTodoEpic(action$);

      epic$.subscribe(() => {
        expect(apiService.toggleTodo.mock.calls[0][0]).toEqual(todo);
        done();
      });
    });

    it('creates todos/TOGGLE_TODO_SUCCESS when a todo has been toggled', done => {
      const todo = {
        id: 1,
        text: 'Todo Number #1',
        completed: false,
      };

      const response = {
        id: 1,
        text: 'Todo Number #1',
        completed: true,
      };

      apiService.toggleTodo.mockReturnValue(
        Promise.resolve({
          body: response,
        })
      );

      const action$ = of(actions.toggleTodoRequest(todo));
      const epic$ = epics.toggleTodoEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.toggleTodoSuccess.type);
        expect(action.payload).toEqual(response);
        done();
      });
    });
  });

  describe('toggle-all-todos', () => {
    it('creates todos/TOGGLE_ALL_SUCCESS when all todos have been toggled', done => {
      const data = [
        {
          id: 1,
          text: 'Todo Number #1',
          completed: false,
        },
        {
          id: 2,
          text: 'Todo Number #2',
          completed: true,
        },
      ];

      apiService.toggleAllTodos.mockReturnValue(
        Promise.resolve({
          body: data,
        })
      );

      const action$ = of(actions.toggleAllRequest());
      const epic$ = epics.toggleAllEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.toggleAllSuccess.type);
        expect(action.payload).toEqual(data);
        done();
      });
    });
  });

  describe('remove-todo', () => {
    it('should call apiService correctly', done => {
      const todo = {
        id: 1,
        text: 'Todo Number #1',
        completed: false,
      };

      // Mock the apiService `removeTodo` response
      apiService.removeTodo.mockReturnValue(Promise.resolve({ body: todo }));

      const action$ = of(actions.removeTodoRequest(todo));
      const epic$ = epics.removeTodoEpic(action$);

      epic$.subscribe(() => {
        expect(apiService.removeTodo.mock.calls[0][0]).toEqual(todo);
        done();
      });
    });

    it('creates todos/REMOVE_TODO_SUCCESS when a todo has been removed', done => {
      const todo = {
        _id: 1,
        text: 'Todo Number #1',
        completed: true,
      };

      apiService.removeTodo.mockReturnValue(
        Promise.resolve({
          body: todo,
        })
      );

      const action$ = of(actions.removeTodoRequest(todo));
      const epic$ = epics.removeTodoEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.removeTodoSuccess.type);
        expect(action.payload).toEqual(todo);
        done();
      });
    });
  });

  describe('remove-completed-todos', () => {
    it('creates todos/REMOVE_COMPLETED_SUCCESS when all completed todos have been removed', done => {
      const data = [
        {
          id: 1,
          text: 'Todo Number #1',
          completed: true,
        },
        {
          id: 2,
          text: 'Todo Number #2',
          completed: true,
        },
      ];

      apiService.removeCompletedTodos.mockReturnValue(
        Promise.resolve({
          body: data,
        })
      );

      const action$ = of(actions.removeCompletedRequest());
      const epic$ = epics.removeCompletedEpic(action$);

      epic$.subscribe(action => {
        expect(action.type).toEqual(actions.removeCompletedSuccess.type);
        expect(action.payload).toEqual(data);
        done();
      });
    });
  });
});
