"use strict";
// 1
var Status;
(function (Status) {
    Status["pending"] = "pending";
    Status["inProgress"] = "in-progress";
    Status["completed"] = "completed";
})(Status || (Status = {}));
const updateStatus = (user, status) => {
    user.status = status;
    return user;
};
const makeRequest = (request) => {
    const { httpMethod, httpUrl, body } = request;
    let result = `Method: ${httpMethod}, Url: ${httpUrl}`;
    if (body) {
        result += `, Body:${JSON.stringify(body)}`;
    }
    return result;
};
// 3
const logValue = (value) => {
    console.log(value);
};
// 4
const userPartial = {
    name: 'Jon',
};
const userRequired = {
    name: 'Jon',
    age: 45,
    email: '1@mail.ru',
    status: Status.inProgress,
};
// 5
const userPick = {
    name: 'Jon',
    age: 45,
};
const userOmit = {
    name: 'Jon',
    age: 45,
    status: Status.inProgress,
};
// 6
const userReadonly = {
    name: 'Jon',
    age: 45,
    email: '1@mail.ru',
    status: Status.inProgress,
};
const userRecord = {
    '1': {
        name: 'Jon',
        age: 45,
        email: '1@mail.ru',
        status: Status.inProgress,
    },
};
// 8
const logTypeOf = (value) => {
    console.log(typeof value);
};
