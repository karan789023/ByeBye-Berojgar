// src/Pages/ModelTraining/index.jsx
import React, { useState, useEffect } from 'react';

export default function ModelTraining() {
  const [examCategory, setExamCategory] = useState('SSC');
  const [examName, setExamName] = useState('');
  const [stateName, setStateName] = useState('');
  const [year, setYear] = useState('');
  const [rawText, setRawText] = useState('');
  const [file, setFile] = useState(null);
  const [pyqs, setPyqs] = useState([]);

  useEffect(() => { fetchList(); }, []);

  const fetchList = async () => {
    try {
      const { data } = await getPYQs({});
      setPyqs(data);
    } catch (err) { console.error(err); }
  };

  const handleUpload = async () => {
    if (!examCategory || !examName || (!rawText && !file)) {
      alert('Provide exam category, exam name and either paste text or upload file');
      return;
    }

    try {
      if (file) {
        const fd = new FormData();
        fd.append('file', file);
        fd.append('examCategory', examCategory);
        fd.append('examName', examName);
        fd.append('state', stateName);
        fd.append('year', year);
        await uploadPYQ(fd, true);
      } else {
        await uploadPYQ({ examCategory, examName, state: stateName, year, rawText });
      }

      alert('Uploaded successfully');
      setRawText(''); setFile(null);
      fetchList();
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div className="mt-container">
      <h2>Model Training — Upload PYQs</h2>
      <div className="mt-card">
        <label>Exam Category</label>
        <select value={examCategory} onChange={e => setExamCategory(e.target.value)}>
          <option value="SSC">Government (SSC, Banking, etc.)</option>
          <option value="JEE">JEE Main/Advanced</option>
          <option value="NEET">NEET</option>
        </select>

        <label>Exam Name</label>
        <input value={examName} onChange={e => setExamName(e.target.value)} placeholder="e.g. SSC CGL, JEE Main 2025" />

        <label>State (optional)</label>
        <input value={stateName} onChange={e => setStateName(e.target.value)} />

        <label>Year (optional)</label>
        <input value={year} onChange={e => setYear(e.target.value)} />

        <label>Paste extracted text from PDF</label>
        <textarea rows={8} value={rawText} onChange={e => setRawText(e.target.value)} />

        <div className="mt-file-upload">
          <label>Or upload PDF file</label>
          <input type="file" accept=".pdf" onChange={e => setFile(e.target.files[0])} />
        </div>

        <div className="mt-buttons">
          <button onClick={handleUpload}>Upload PYQ</button>
          <button onClick={fetchList}>Refresh List</button>
        </div>
      </div>

      <h3>Uploaded PYQs</h3>
      {pyqs.map(p => (
        <div key={p._id} className="mt-card">
          <b>{p.examCategory} - {p.examName} {p.year} {p.state ? `(${p.state})` : ''}</b>
          <div className="mt-text">{(p.rawText || '').slice(0, 600)}{p.rawText && p.rawText.length > 600 ? '...' : ''}</div>
        </div>
      ))}

      <hr/>
      <h3>Train Base Model</h3>
      <p>Select exam category and click below to export dataset for fine-tuning (use QLoRA externally on GPU).</p>
      <button onClick={() => {
        alert('Server-side export endpoint not implemented here. Use server/utils/export_pyq.js to create train.jsonl');
      }}>Export dataset for fine-tune</button>
    </div>
  );
}

