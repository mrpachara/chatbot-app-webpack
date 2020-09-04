'use strict';

/**
 * Get user input message.
 * 
 * @param {*} clear Is input message cleared after has gotten?
 * 
 * @returns {string} User input message.
 */
export function getUserInputMessage(clear) {
    const userInputMessageElem = document.querySelector('#chat-user-input-message');
    const message = userInputMessageElem.value;
    if(clear) userInputMessageElem.value = '';
    return message;
}
