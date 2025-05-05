async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Помилка при отриманні todo');
    }
    return await response.json();
  }
  
  async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Помилка при отриманні user');
    }
    return await response.json();
  }
  
  async function run() {
    try {
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log('Результат Promise.all:');
      console.log('todo:', todo);
      console.log('user:', user);
    } catch (error) {
      console.error('Помилка в Promise.all:', error);
    }
  
    try {
      const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
      console.log('Результат Promise.race:');
      console.log(firstResult);
    } catch (error) {
      console.error('Помилка в Promise.race:', error);
    }
  }
  
  run();
  