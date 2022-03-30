/**
 * @jest-environment jsdom
 */

import Addtasks from './AddTask.js';

document.body.innerHTML = `<div class="main">
       <form>
       <h1>Today's To Do</h1>
       <input type="text" class="Taskfield" id="Taskfield" name="text" placeholder="Add to your list" required/>
       <p class="error"></p>
       <ul class="tasklist">
       </ul>
       <button type="button" class="btn" >Clear all Completed</button>
    </form>
    </div>`;
describe('add and remove', () => {
  test('Add task', () => {
    Addtasks('hello');
    expect(localStorage).not.toBe(null);
  });
});