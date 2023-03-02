# Social Network Api

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

This is a social network api built on Mongoose, Node.js, Express, and Day.js. This api is made up of users, their friendships, their thoughts, and reactions to their thoughts.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Questions](#questions)

## Installation

To use this social network API, please be sure you have mongoDB and mongo Compass installed. Then, you can clone this repository. Once cloned, enter `npm install` into the repository terminal. Then you can enter `node index.js` to start up the server. You're able to use an API Client such as Insomnia or Postman to reach the necessary endpoints to create, read, update, or delete user and thought data.

## Usage

Use the following routes to perform the respective tasks from https://localhost.com/3001/api

| Route                                        | Task                                                                                                                                                                                                           |
| :------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/users`                                     | Use a GET request to get all users.                                                                                                                                                                            |
|                                              | Use a POST request to create a user with the following JSON body:<br> { <br>"username": "examplename", <br> "email": "example@example.com" <br> }                                                              |
| `/users/:userId`                             | Use a GET request to get a single user specified by the user's \_id.                                                                                                                                           |
|                                              | Use a PUT request to update a user specified by the user's \_id.                                                                                                                                               |
|                                              | Use a DELETE request to delete a user specified by the user's \_id.                                                                                                                                            |
| `/users/:userId/friends/:friendId`           | Use a POST request with the userId and friendId replaced by what the \_id are of the user you want to add a friend to and the user who is the friend being added.                                              |
|                                              | Use a DELETE request with the userId and friend replaced by what the \_id are of the user you want to remove a friend from and the user who is the friend being removed.                                       |
| `/thoughts`                                  | Use a GET request to get all thoughts.                                                                                                                                                                         |
|                                              | Use a POST request to create a thought with the following JSON body: <br> {<br> "thoughtText": "Here's a cool thought...", <br> "username": "examplename", <br> "userId": "5edff358a0fcb779aa7b118b" <br>}<br> |
| `/thoughts/:thoughtId`                       | Use a GET request to get a single thought specified by the thought's \_id.                                                                                                                                     |
|                                              | Use a PUT request to update a thought specified by the thought's \_id.                                                                                                                                         |
|                                              | Use a DELETE request to delete a thought specified by the thought's \_id.                                                                                                                                      |
| `/thoughts/:thoughtId/reactions`             | Use a POST request with the thoughtId replaced by what the \_id is of the thought you want to add a reaction to.                                                                                               |
| `/thoughts/:thoughtId/reactions/:reactionId` | Use a DELETE request with the thoughtId replaced by what the \_id is of the thought you want to remove a reaction from and the reactionId replaced by the reactionId of the reaction you are trying to remove. |

An example of how this api is used in insomnia is seen in the video below:


https://user-images.githubusercontent.com/16968424/222384858-c73edf79-73eb-4d21-a317-1adfe4d0e475.mp4



## License

Copyright 2023 Clarice Tran

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Questions

If you would like to checkout my work you can see them on my [GitHub](https://github.com/claricetran). <br/>
Alternatively, you can email me at <tran.clarice@gmail.com> with any questions.
