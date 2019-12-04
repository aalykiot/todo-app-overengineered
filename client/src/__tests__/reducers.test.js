import reducer from '../models/todos/reducer';
import * as actions from '../models/todos/actions';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    const initState = {
      items: [],
      filter: null,
    };

    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('should handle todos/LOAD_TODOS_SUCCESS action', () => {
    const state = {
      items: [
        {
          _id: 1,
          text: 'Todo Number #1',
          completed: false,
        },
        {
          _id: 2,
          text: 'Todo Number #2',
          completed: false,
        },
      ],
    };

    const payload = [
      {
        _id: 1,
        text: 'Todo Number #1',
        completed: false,
      },
      {
        _id: 2,
        text: 'Todo Number #2',
        completed: false,
      },
    ];

    const expectedState = {
      items: payload,
    };

    expect(reducer(state, actions.loadTodosSuccess(payload))).toEqual(
      expectedState
    );
  });

  it('should handle todos/ADD_TODO_SUCCESS action', () => {
    const state = {
      items: [],
    };

    const payload = {
      _id: 1,
      text: 'Todo Number #1',
      completed: false,
    };

    const expectedState = {
      items: [payload],
    };

    expect(reducer(state, actions.addTodoSuccess(payload))).toEqual(
      expectedState
    );
  });

  it('should handle todos/TOGGLE_TODO_SUCCESS action', () => {
    const state = {
      items: [
        {
          _id: 1,
          text: 'Todo Number #1',
          completed: false,
        },
        {
          _id: 2,
          text: 'Todo Number #2',
          completed: false,
        },
      ],
    };

    const payload = {
      _id: 1,
      text: 'Todo Number #1',
      completed: true,
    };

    const expectedState = {
      items: [
        {
          _id: 1,
          text: 'Todo Number #1',
          completed: true,
        },
        {
          _id: 2,
          text: 'Todo Number #2',
          completed: false,
        },
      ],
    };

    expect(reducer(state, actions.toggleTodoSuccess(payload))).toEqual(
      expectedState
    );
  });

  it('should handle todos/TOGGLE_ALL_SUCCESS action', () => {
    const state = {
      items: [
        {
          _id: 1,
          text: 'Todo Number #1',
          completed: false,
        },
        {
          _id: 2,
          text: 'Todo Number #2',
          completed: false,
        },
      ],
    };

    const payload = [
      {
        _id: 1,
        text: 'Todo Number #1',
        completed: false,
      },
      {
        _id: 2,
        text: 'Todo Number #2',
        completed: false,
      },
    ];

    const expectedState = {
      items: payload,
    };

    expect(reducer(state, actions.toggleAllSuccess(payload))).toEqual(
      expectedState
    );
  });

  it('should handle todos/REMOVE_TODO_SUCCESS action', () => {
    const state = {
      items: [
        {
          _id: 1,
          text: 'Todo Number #1',
          completed: true,
        },
        {
          _id: 2,
          text: 'Todo Number #2',
          completed: true,
        },
      ],
    };

    const payload = {
      _id: 1,
      text: 'Todo Number #1',
      completed: true,
    };

    const expectedState = {
      items: [
        {
          _id: 2,
          text: 'Todo Number #2',
          completed: true,
        },
      ],
    };

    expect(reducer(state, actions.removeTodoSuccess(payload))).toEqual(
      expectedState
    );
  });

  it('should handle todos/REMOVE_COMPLETED_SUCCESS action', () => {
    const state = {
      items: [
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
      ],
    };

    const payload = [
      {
        _id: 2,
        text: 'Todo Number #2',
        completed: true,
      },
    ];

    const expectedState = {
      items: [
        {
          _id: 1,
          text: 'Todo Number #1',
          completed: false,
        },
      ],
    };

    expect(reducer(state, actions.removeCompletedSuccess(payload))).toEqual(
      expectedState
    );
  });

  it('should handle todos/SET_FILTER action', () => {
    const state = {
      filter: null,
    };

    const payload = 'active';

    const expectedState = {
      filter: 'active',
    };

    expect(reducer(state, actions.setFilter(payload))).toEqual(expectedState);
  });
});
