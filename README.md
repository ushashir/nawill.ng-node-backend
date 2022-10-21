# nawill.ng-backend

## Stacks and tools
- UI HTML, CSS AND JavaScript
- Database, MySQL
- Node.js and TypeScript
- Sequelise

## RESOURCES
- [Express](https://expressjs.com)
- [Prisma Doc](https://www.prisma.io)
- [Planet Scale](https://app.planetscale.com)
- [Jest](http://jestjs.io)
- [Reference Project](https://github.com/Sirjoseph94/noted)

## COMMANDS
- Run `npx prisma db push` to push schema to db
- Run `npx prisma migrate dev --name init` to update schema
- Run `SELECT * FROM User` to view user tabke on planet scale
SELECT * FROM User;
## Basic Functionalities

- Sign up and login
- Authentication
- Community Blog
- User dashboard
- Admin dashboard

### Zod for backend validation.

## Users
#### Signup user fields
- id uuid
- firstName string
- lastName string
- userName string
- email string
- password string
- avatar string via 
- isAdmin boolean default false
others
- services
- websites
- domains
- hosting
- webmaster
- consultancy
- social media handles

#### Login 
- username or email
- password

# API ROUTES
### users
- signup user POST api/users public
- view user GET api/user private
- view users GET api/users private-admin only
- update user PATCH api/user email and username to be excluded
- delete user DELETE api/users private 2fa authentication
- verify email api/email/verify
- forgot password api/password/forgot
- update password api/password/update

### REVIEWS / SUPPORT
- CRUD 
- post a feed feed POST api/feeds public
- get feeds GET api/feeds public
- get feeds GET api/feed/:id public
- update feed PATCH api/feed/:id private
- delete field DELETE api/feed/:id private


