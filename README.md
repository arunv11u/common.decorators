# @arunvaradharajalu/common.decorators

[![npm version](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.decorators.svg)](https://badge.fury.io/js/%40arunvaradharajalu%2Fcommon.decorators)
[![GitHub issues](https://img.shields.io/github/issues/arunv11u/common.decorators)](https://github.com/arunv11u/common.decorators/issues)
[![GitHub license](https://img.shields.io/github/license/arunv11u/common.decorators)](https://github.com/arunv11u/common.decorators/blob/master/LICENSE)

This package provides TypeScript decorators for defining controllers, route methods, and middleware for Express applications.

## Installation

Install using npm:

```bash
npm install @arunvaradharajalu/common.decorators
```

## Usage

### Controller Decorator

The `Controller` decorator allows you to define a controller class with route handlers:

```typescript
import { Controller } from '@arunvaradharajalu/common.decorators';

@Controller('/api/users')
class UserController {
  // Define route handlers here using other route decorators
}
```

### Route Method Decorators

Use route method decorators like `Get`, `Post`, `Put`, etc., to define HTTP methods and their corresponding paths:

```typescript
import { Get, Post, Controller } from '@arunvaradharajalu/common.decorators';

@Controller('/api/users')
class UserController {
  @Get('/')
  getAllUsers(req: Request, res: Response) {
    // Handle GET request to fetch all users
  }

  @Post('/')
  createUser(req: Request, res: Response) {
    // Handle POST request to create a new user
  }
}
```

### Middleware Decorator

The `Use` decorator adds middleware to a route handler:

```typescript
import { Get, Use, Controller } from '@arunvaradharajalu/common.decorators';

@Controller('/api/users')
class UserController {
  @Get('/')
  @Use(authMiddleware)
  getAllUsers(req: Request, res: Response) {
    // This route uses authMiddleware
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for bug fixes, improvements, or new features.

## Author

Arun Varadharajalu

## License

This project is licensed under the ISC License.