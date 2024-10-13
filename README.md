# User Services & News API

This API manages user services and delivers personalized news data fetched from a third-party API, based on user preferences.I have pass all test case in the postman

## Features

* **User Management**: 
  * Register new users. Whenever a user creates a profile, it automatically creates preference data in the article collection with default values. Later, the user can update the preference information using the update preference method.
  * Login the user It pass the token (I am fetching user-id from the token rather than taking id from the params.)
  * Update user information.
  * update the password.
  
* **News Service**:
  * preference update
  * get preference
  * get headline
  * get article using pagination
  * read as creating
  * get read as users
  
## Technologies Used

* Node.js
* Express.js
* Third-party News API
* MongoDB / PostgreSQL (for user management)
* JWT for Authentication
* dotenv for configuration

## Installation


2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add your API keys and configurations.

    ```bash
    PORT=your-port
    NEWSAPIKEY=your-news-api-key
    MONGODB=your-database-url
    ```

4. Start the server:

    For development:

    ```bash
    npm run dev
    ```

## API Endpoints
I used three database 
* **User**
 
    { 
   "fname": { "type": "String", "required": true },
  "lname": { "type": "String", "required": true },
  "email": { "type": "String", "required": true, "unique": true },
  "pass": { "type": "String", "required": true },
  "role": { "type": "String", "required": true },
  "gender": { "type": "String", "required": true },
  "passwordChangedAt": { "type": "Date" },
  "lastLoginAt": { "type": "Date" }
    }


* **Prefrences**
  
  { category:{type:String, required:false},
    language:{type:String, required:false},
    sortby:{type:String},
    country:{type:String},
    from_date:{type:Date},
    to_date:{type:Date},
    u_id:{type:String, required:true,  unique: true }}

*  **ArticleRead**

  
  { source: {
        id: { type: String, default: null },  
        name: { type: String }
    },
    author: { type: String, default: null },  
    title: { type: String, required:true}, 
    description: { type: String, default: null },  
    url: { type: String },  
    urlToImage: { type: String, default: null },  
    publishedAt: { type: Date }, 
    content: { type: String, default: null },
    u_id : {type: String, required: true}}


   
## API Endpoints

### User Services

* **Register a new user**
  
    **POST** `http://localhost:3000/api/users/signup`

    Request body:

    ```json
    {
     
    "fname":"Vijay",
    "lname":"Ghandhi",
    "email":"vijayghandi@gmail.com",
    "pass":"Vijay123",
    "role":"users",
    "gender":"male"
    }
    ```
reposponse body:

```json
{
    "fname": "Vijay",
    "lname": "Ghandhi",
    "email": "vijayghandi@gmail.com",
    "role": "users",
    "gender": "male",
    "_id": "670bcaaf7e3b8512b9f49e9d",
    "createdAt": "2024-10-13T13:27:11.066Z",
    "updatedAt": "2024-10-13T13:27:11.066Z",
    "__v": 0
   }  
```


* **login user info**
  
    **Post** `http://localhost:3000/api/users/login`

    Request body:
    ![image](https://github.com/user-attachments/assets/df968677-d3eb-473d-8706-68872cb7c4c7)
    Response Body:
     in response it provide the token and user information
     ![image](https://github.com/user-attachments/assets/bd5b5ace-83fe-4f52-a2d1-99e27311fa6c)


* **Update the profile**

**Put** `http://localhost:3000/api/users/updateusers`
  * this method need the token
  Request:
![image](https://github.com/user-attachments/assets/60ab1ed0-d0f2-4d04-b260-7b07aa411c27)
Response:
![image](https://github.com/user-attachments/assets/fd36797e-3923-414d-b26a-507d3a11d1b0)

* **Reset the Password**

**Put** `http://localhost:3000/api/users/updatepassword`
  * this method need the token
  Request:
![image](https://github.com/user-attachments/assets/875a129e-110e-48ed-9da1-323e83a0afa3)

Response:
![image](https://github.com/user-attachments/assets/56338102-d508-4871-9369-6ef1586cd0f3)


   
### News Service

* **Update the preference**

**Patch** `http://localhost:3000/api/news/preferences`

  * this method need the token
    ![image](https://github.com/user-attachments/assets/6cec336d-b697-48cc-8955-65069c23c13a)



* **Get the preference**

**Get** `http://localhost:3000/api/news/preferences`

  * this method need the token
    ![image](https://github.com/user-attachments/assets/d92a91ef-3723-4ff8-94e5-245a7021b6d2)


* **Get the headlines base on preference**

**Get** `http://localhost:3000/api/news/headlines`

  * this method need the token
 ![image](https://github.com/user-attachments/assets/bff34b58-cf15-41a3-bb12-2503c21da5de)


* **Get the article based on preference**

I use pagination here where the user can only fetch 30 JSON objects at one, and then pass the number

**Get** `http://localhost:3000/api/news/articles/1`
  * this method need the token
  In the category, if I include sports, all sport-related methods are shown to me. Options like language, sort by, and date (from to) are available. Based on the mentioned preferences, the news will be delivered 
   to the user.
  
  ![image](https://github.com/user-attachments/assets/62585d33-7c75-4767-a9f3-a1f2fe2fdadd)



* **Mark as read article**

**Post** `http://localhost:3000/api/news/read`
  * this method need the token
  Request:
    ![image](https://github.com/user-attachments/assets/f6b418f4-3821-43fd-af91-38dfe4071b0a)


   Response:
     ![image](https://github.com/user-attachments/assets/23ec7ad6-b280-42c8-9797-b1d8de9636df)

* **Get as read article**
**Get** `http://localhost:3000/api/news/read`
  * this method need the token
 
   ![image](https://github.com/user-attachments/assets/90109a31-01e4-4ec2-b6ad-dc11634425bb)





## License

This project is licensed under the MIT License.
