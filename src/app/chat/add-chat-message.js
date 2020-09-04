'use strict';

import { createChatMessage } from './create-chat-message';

/**
 * Add message to chat display.
 * 
 * @param {'me'|'frirends'} type The type of message.
 * @param {string} message The message to be created.
 */
export function addChatMessage(type, message) {
    const chatDisplayElem = document.querySelector('#chat-display');
    chatDisplayElem.append(createChatMessage(type, message));
}
