![Screenshot 2023-06-16 090553](https://github.com/iAbhishekPanwar/chat-bee/assets/104500166/d7a86c7a-e82f-4030-97ac-e317888fd37c)

# Chat-Bee

Chat-Bee is a real-time chat application built using React, Firebase Authentication, and Firebase Realtime Database. It allows users to communicate with each other in real-time with a better user interface designed with Sass.

## Features

- User authentication using Firebase Authentication
- Real-time messaging using Firebase Realtime Database
- Login and logout functionality
- User context API for managing user state
- Better user interface designed with Sass

## Installation

To run Chat-Bee locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/iabhishekpanwar/chat-bee.git
   ```

2. Change into the project directory:

   ```bash
   cd chat-bee
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and set up Firebase Authentication and Realtime Database. Obtain the Firebase configuration object.

5. Create a `.env` file in the root directory of the project and add the Firebase configuration:

   ```
   REACT_APP_API_KEY=<your-api-key>
   REACT_APP_AUTH_DOMAIN=<your-auth-domain>
   REACT_APP_PROJECT_ID=<your-project-id>
   REACT_APP_STORAGE_BUCKET=<your-storage-bucket>
   REACT_APP_MESSAGING_SENDER_ID=<your-messaging-sender-id>
   REACT_APP_APP_ID=<your-app-id>
   REACT_APP_MEASUREMENT_ID=<your-measurement-id>
   ```

6. Start the application:

   ```bash
   npm run dev
   ```

   This will start the development server. Open `http://localhost:3000` in your browser to access Chat-Bee.

## Usage

1. Register a new user or log in with an existing account.
2. Once logged in, you will be redirected to the chat interface.
3. On the left side, you will see a list of online users.
4. Click on a user's name to start a conversation with them.
5. Type your message in the input field at the bottom and press Enter to send it.
6. New messages will appear in real-time in the conversation area.
7. To log out, click on the logout button in the top-right corner.

## Dependencies

The following dependencies are used in this project:

- React
- React DOM
- React Router DOM
- Firebase
- Sass
- UUID

For the complete list of dependencies and their versions, please refer to the `package.json` file.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please open an issue or submit a pull request.

Before contributing, please ensure that your code adheres to the existing coding style and conventions.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to your needs.

## Acknowledgments

- [Firebase](https://firebase.google.com/) - For providing authentication and real-time database services.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React Router DOM](https://reactrouter.com/) - Declarative routing for React applications.
- [Sass](https://sass-lang.com/) - CSS extension language for styling the application.
- [UUID](https://www.npmjs.com/package/uuid) - Library for generating unique identifiers.

## Contact

If you have any questions, feel free to reach out:

- Email: imabhishek612@gmail.com
- GitHub: [iabhishekpanwar](https://github.com/iabhishekpanwar)
