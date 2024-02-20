import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    return randomPrompt === prompt ? getRandomPrompt(prompt) : randomPrompt;  // if the random prompt is the same as the prompt, get a new random prompt.
}

export async  function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}