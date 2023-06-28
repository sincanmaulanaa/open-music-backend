## DevDependencies
- eslint
- eslint-config-google
- nodemon

## Dependencies
- [hapi](https://hapi.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [joi](https://github.com/hapijs/joi)
- [nanoid](https://github.com/ai/nanoid)
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate)
- [node-postgres](https://node-postgres.com/)
- [auto-bind@4](https://www.npmjs.com/package/auto-bind)

## Installations
`npm init -y`
`npm install <package_name>`
`npm run start-dev`


## Runner Scripts
- "start-prod": "NODE_ENV=production node ./src/server.js"
- "start-dev": "nodemon ./src/server.js"
- "lint": "eslint ./src"
- "migrate": "node-pg-migrate"

## Folder Structures
```
├── src
│   ├── api
│   │   ├── notes
│   ├── exceptions
│   ├── services
│   ├── utils
│	├── validator
│	│	├── notes
│   ├── server.js
├── migration
├── node_modules
├── package.json
├── package-lock.json 
└── .gitignore
```

## Steps-by-steps
1. Create database openmusic
2. Initialize project
3. Create migrations
4. Push project to GitHub
5. Development
6. Deploy to AWS EC2 & RDS
7. Production

## TO-DO
### 1. Development
- [ ] Initalize project
- [ ] Install all needed dependencies
- [ ] Create database in PostgresSQL
- [ ] Create .env inside project
- [ ] Create migration files
- [ ] Create server.js
- [ ] Create handler, index, and routes JS file inside `api/notes/`
- [ ] Create exception file handling inside `exceptions`
- [ ] Create services for NoteService inside `services/postgres/`
- [ ] Create Model inside `utils/`
- [ ] Create index and schema inside `validator/notes`

#### A. Albums Endpoint Rules
![[Pasted image 20230628151422.png]]

##### For more details, here is the response body structure that must be displayed on the endpoint:
- [ ] POST `/albums`
```json
{
   "status": "success",
   "data": {
	   "albumId": "album-Mk8AnmCp210PwT6B"
    }
}
```

- [ ] GET `/albums/{id}`
```json
{
   "status": "success",
   "data": {
	   "album": {
	      "id": "album-Mk8AnmCp210PwT6B",
	      "name": "Viva la Vida",
	      "year": 2008
	   }
    }
}
```

- [ ] PUT `albums/{id}`
```json
{
   "status": "success",
   "message": "Album berhasil diperbarui"
}
```

- [ ] DELETE `/albums/{id}`
```json
{
   "status": "success",
   "message": "Album berhasil dihapus"
}
```

#### B. Songs Endpoint Rules
![[Pasted image 20230628161118.png]]

##### For more details, here is the response body structure that must be displayed on the endpoint:
- [ ] POST `/songs`
```json
{
   "status": "success",
   "data": {
	   "songId": "song-Qbax5Oy7L8WKf74l"
    }
}
```

- [ ] GET `/songs`
```json
{
    "status": "success",
    "data": {
        "songs": [
            {
                "id": "song-Qbax5Oy7L8WKf74l",
                "title": "Life in Technicolor",
                "performer": "Coldplay"
            },
            {
                "id": "song-poax5Oy7L8WKllqw",
                "title": "Centimeteries of London",
                "performer": "Coldplay"
            },
            {
                "id": "song-Qalokam7L8WKf74l",
                "title": "Lost!",
                "performer": "Coldplay"
            }
        ]
    }
}
```

- [ ] GET `/songs/{id}`
```json
{
    "status": "success",
    "data": {
        "song": {
            "id": "song-Qbax5Oy7L8WKf74l",
            "title": "Life in Technicolor",
            "year": 2008,
            "performer": "Coldplay",
            "genre": "Indie",
            "duration": 120,
            "albumId": "album-Mk8AnmCp210PwT6B"
        }
    }
}
```

- [ ] PUT `/songs/{id}`
```json
{
	"status": "success",
	"message": "Lagu berhasil diperbarui"
}
```

- [ ] DELETE `/songs/{id}`
```json
{
	"status": "success",
	"message": "Lagu berhasil dihapus"
}
```

### 2. API Testing
- [ ] [Postman OpenMusic API V1 Test Collection dan Environment](https://github.com/dicodingacademy/a271-backend-menengah-labs/raw/099-shared-files/03-submission-content/01-open-music-api-v1/OpenMusic%20API%20V1%20Test.zip)
- [ ] Import OpenMusic collection ke Postman Collection
- [ ] Import OpenMusic environment ke Postman Environment
- [ ] Test all of Endpoints use *Postman* *Runner*

### 3. Deployment
- [ ] Create new role in AWS IAM
- [ ] Add permissions for EC2FullAccess and RDSFullAccess
- [ ] Login to the new account that already created
- [ ] Configure EC2 and RDS 
