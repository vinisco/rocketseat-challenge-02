# Run Locally :computer:

Clone the project

```bash
git clone https://github.com/vinisco/rocketseat-challenge-02.git
```

Go to the project directory

```bash
cd rocketseat-challenge-02
```

Install dependencies

```bash
yarn
```

# About the Challenge

## This will be an application for listing and registering users. In order for the user listing to work, the user who requests the listing must be an admin (more details will be provided throughout the description).

# Application Routes

## POST /users
- This route should receive name and email within the request body in order to register a user.

## PATCH /users/:user_id/admin
- This route should receive the id of a user in the route parameters and transform this user into an admin.

## GET /users/:user_id
- This route should receive the id of a user in the route parameters and return the user's information in the response body.

## GET /users
- This route should receive a user_id property containing the user's id in the request header, and return a list of all registered users. The id should be used to validate if the user requesting the list is an admin. The list should only be returned if the user is an admin.

# ⚙ Test Solution

```bash
yarn test
```

# Authors

- [@vinisco](https://github.com/vinisco)
- [@rocketseat-education](https://github.com/rocketseat-education)
