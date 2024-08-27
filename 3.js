"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comment';
const getData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url, { method: 'GET' });
    if (!response.ok) {
        throw new Error('Error');
    }
    const data = yield response.json();
    return data;
});
getData(COMMENTS_URL)
    .then((data) => {
    data.forEach((post) => {
        console.log(`ID:${post.id}, Email:${post.email}`);
    });
})
    .catch((error) => {
    console.log('Error', error);
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
