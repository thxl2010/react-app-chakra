import request from '../utils/request';

/**
 * @param {object} user
 * @param {string} user.email
 * @param {string} user.password
 * @returns Promise<>
 */
export const sigIn = (user) =>
  request({
    method: 'POST',
    url: '/users/login',
    data: { user },
  });

/**
 * @param {object} user
 * @param {string} user.username
 * @param {string} user.email
 * @param {string} user.password
 * @returns Promise<>
 */
export const signUp = (user) =>
  request({
    method: 'POST',
    url: '/users',
    data: { user },
  });
