'use strict';

/**
 * Create the message element.
 * 
 * @param {'me'|'frirends'} type The type of message.
 * @param {string} message The message to be created.
 * 
 * @returns {Element} Created elements.
 */
export function createChatMessage(type, message) {
    const typeClass = `cl-${type}`;
    const containerElem = document.createElement('div');
    containerElem.classList.add('chat-message-container', typeClass);
    const messageElem = document.createElement('div');
    messageElem.classList.add('chat-message');
    messageElem.textContent = message;
    containerElem.append(messageElem);

    return containerElem;
}
