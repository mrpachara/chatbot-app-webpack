'use strict';

import { fromEvent } from 'rxjs';
import { first, filter } from 'rxjs/operators';

import { getUserInputMessage, addChatMessage } from './app/chat';
import { chatbot } from './app/chatbot';

fromEvent(document, 'DOMContentLoaded')
.pipe(
    first(),
)
.subscribe(() => {
    fromEvent(document, 'click')
    .pipe(
        filter((ev) => ev.target.classList.contains('cmd-chat-send')),
    )
    .subscribe(async () => {
        const message = getUserInputMessage(true);
        addChatMessage('me', message);
        const answer = await chatbot(message);
        addChatMessage('friends', answer);
    });
});
