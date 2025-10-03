// run: node utils/export_pyq.js [outputFile] [exam(optional)]
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const PYQ = require('../models/PYQ');

async function main() {
  await mongoose.connect(process.env.CONNECTION_STRING);
  const outFile = process.argv[2] || 'train.jsonl';
  const examFilter = process.argv[3];

  const filter = {};
  if (examFilter) filter.exam = examFilter;

  const docs = await PYQ.find(filter);
  const stream = fs.createWriteStream(path.join(__dirname, '..', outFile), { flags: 'w' });

  for (const d of docs) {
    // create one or multiple examples; here 1 per doc
    const qText = d.questions && d.questions.length > 0
      ? d.questions.map((q,i)=>`${i+1}. ${q.question} | Ans: ${q.answer}`).join('\n')
      : (d.rawText || '');
    const example = {
      instruction: `Using the following PYQ data, create high-quality MCQs in the style of ${d.exam}`,
      input: qText,
      output: qText
    };
    stream.write(JSON.stringify(example) + '\n');
  }

  stream.end();
  console.log('Exported', docs.length, 'records to', outFile);
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
