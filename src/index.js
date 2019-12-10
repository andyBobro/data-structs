import fs from 'fs'

import linkedList from './types/linkedList';
import queue from './types/queue';

const ll = new linkedList()

for (let i = 0; i < 10; i++) {
  ll.add(Math.round(Math.random() * 100), i)
}

fs.writeFileSync('linkedList.example.json', JSON.stringify(ll, 0, 2))