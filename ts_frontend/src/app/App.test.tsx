// import {
//   getByPlaceholderText,
//   getByRole,
//   render,
//   screen,
// } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from './App';
// import React from 'react';

// const renderApp = () => {
//   return render(<App />);
// };

// const task1 = {
//   id: 1,
//   description: 'hello',
//   completed: false,
//   createdDate: new Date('2024-03-08T01:16:30.000Z'),
//   dueDate: new Date('2024-03-08T01:16:30.000Z'),
// };

// const task2 = {
//   id: 2,
//   description: 'there',
//   completed: false,
//   createdDate: new Date('2024-03-08T01:17:30.000Z'),
//   dueDate: new Date('2024-03-09T01:16:30.000Z'),
// };

// describe('New Task Form Should Only Render When "Add New" is clicked', () => {
//   it("Should render the form if 'Add New' clicked", async () => {
//     const rendered = renderApp();
//     const user = userEvent.setup();
//     const formButton = screen.getByRole('button', {
//       name: /Add New/i,
//     });
//     await user.click(formButton);

//     expect(
//       rendered.getByPlaceholderText('Enter description'),
//     ).toBeInTheDocument();
//   });
// });
