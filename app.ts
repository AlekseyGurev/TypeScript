// 1
enum Status {
  pending = 'pending',
  inProgress = 'in-progress',
  completed = 'completed',
}

type User = {
  name: string;
  age: number;
  email?: string;
  status?: Status;
};

const updateStatus = (user: User, status: Status): User => {
  user.status = status;
  return user;
};

// 2

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface HttpRequest {
  httpMethod: HttpMethod;
  httpUrl: string;
  body?: any;
}

const makeRequest = (request: HttpRequest): string => {
  const { httpMethod, httpUrl, body } = request;
  let result = `Method: ${httpMethod}, Url: ${httpUrl}`;
  if (body) {
    result += `, Body:${JSON.stringify(body)}`;
  }

  return result;
};

// 3

const logValue = <T>(value: T): void => {
  console.log(value);
};

// 4

const userPartial: Partial<User> = {
  name: 'Jon',
};

const userRequired: Required<User> = {
  name: 'Jon',
  age: 45,
  email: '1@mail.ru',
  status: Status.inProgress,
};

// 5

const userPick: Pick<User, 'name' | 'age'> = {
  name: 'Jon',
  age: 45,
};

const userOmit: Omit<User, 'email'> = {
  name: 'Jon',
  age: 45,
  status: Status.inProgress,
};

// 6

const userReadonly: Readonly<User> = {
  name: 'Jon',
  age: 45,
  email: '1@mail.ru',
  status: Status.inProgress,
};

// userReadonly.age = 12 - можем только читать

// 7

type UserRecord = Record<string, User>;

const userRecord: UserRecord = {
  '1': {
    name: 'Jon',
    age: 45,
    email: '1@mail.ru',
    status: Status.inProgress,
  },
};

// 8

const logTypeOf = <T>(value: T): void => {
  console.log(typeof value);
};
