import { Injectable } from '@angular/core';

const RETRO = {
  name: 'PMI (plus, minus, interesting)',
  description: `PMI (plus, minus, interesting) is a brainstorming
    activity that encourages participants in a discussion to look at an
    idea from more than one viewpoint.`,
  questions: [{ key: 0, value: 'What are the positive things about this sprint?', required: 2
  }, { key: 1, value: 'What are the negative (minus) things about this sprint?', required: 2
  }, { key: 2, value: 'What was interesting about this sprint?', required: 1
  }]
};

@Injectable({
  providedIn: 'root'
})
export class RetroService {

  constructor() {
  }

  getRetro() {
    return JSON.parse(JSON.stringify(RETRO));
  }

  getRetroItem(key) {
    return (JSON.parse(JSON.stringify(RETRO))).questions.find(item => item.key === Number(key));
  }

}
