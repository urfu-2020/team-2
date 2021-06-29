/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable require-jsdoc */
export class User {
  login: string
  avatar: string
  // isLogin: boolean = false
  constructor(login: string, avatar: string) {
    this.login = login
    this.avatar = avatar
  }
}

export class Users {
  [key: string]: User
}
