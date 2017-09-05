import apiClient from '../../lib/api';
import moxios from 'moxios';
import uuidv1 from 'uuid/v1';

const todos = [
  { id: uuidv1(), title: 'test1', completed: false },
  { id: uuidv1(), title: 'test2', completed: false },
  { id: uuidv1(), title: 'test3', completed: false },
];

moxios.install(apiClient);
moxios.stubRequest(/.*todos\//, {
  status: 200,
  responseText: todos,
});
