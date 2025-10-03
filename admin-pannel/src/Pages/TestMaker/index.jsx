import React, { useState } from 'react';
import { createTest, getTests } from '../api';

const categories = ['Government','JEE','NEET','Coding'];
const states = ['All States','UP','Delhi','Maharashtra','Bihar','West Bengal'];

export default function TestMaker(){
  const [category, setCategory] = useState('');
  const [exam, setExam] = useState('');
  const [state, setState] = useState('All States');
  const [numQuestions, setNumQuestions] = useState(10);
  const [isFullTest, setIsFullTest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tests, setTests] = useState([]);

  const handleGenerate = async () => {
    if (!category || !exam || !numQuestions) { alert('Fill category, exam and numQuestions'); return; }
    setLoading(true);
    try {
      const { data } = await createTest({
        category, exam, state: state === 'All States' ? '' : state,
        numQuestions, isFullTest
      });
      alert('Test generated & saved!');
      setTests(prev => [data.test, ...prev]);
    } catch (err) {
      console.error(err);
      alert('Error: ' + (err?.response?.data?.message || err.message));
    }
    setLoading(false);
  };

  const handleSearch = async () => {
    try {
      const { data } = await getTests({ category, exam, state: state === 'All States' ? '' : state });
      setTests(data);
    } catch (err) {
      console.error(err);
      alert('Fetch failed');
    }
  };

  return (
    <div className="container">
      <h2>Admin — Test Maker</h2>

      <div className="card">
        <label>Category</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">--Select--</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <label>Exam (search/type)</label>
        <input value={exam} onChange={e => setExam(e.target.value)} placeholder="e.g. SSC CGL, JEE Main"/>

        <button onClick={handleSearch}>🔍 Search Tests</button>

        <label>State (for Govt)</label>
        <select value={state} onChange={e=>setState(e.target.value)}>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <label>Full Test?</label>
        <input type="checkbox" checked={isFullTest} onChange={e => setIsFullTest(e.target.checked)} />

        <label>Number of Questions</label>
        <input type="number" min={1} value={numQuestions} onChange={e => setNumQuestions(Number(e.target.value))}/>

        <div style={{marginTop:8}}>
          <button onClick={handleGenerate} disabled={loading}>{loading ? 'Generating...' : 'Generate & Save Test'}</button>
        </div>
      </div>

      <div>
        <h3>Generated Tests</h3>
        {tests.length === 0 ? <p>No tests found</p> : tests.map(t => (
          <div key={t._id} className="card">
            <b>{t.title}</b><br/>
            <small>{t.exam} — {t.category} {t.state ? `(${t.state})` : ''}</small>
            <div>Questions: {t.questions?.length}</div>
            <ol>
              {t.questions?.map((q, i) => (
                <li key={i}>
                  <div><b>Q:</b> {q.question}</div>
                  {q.options?.length>0 && <ul>{q.options.map((o,idx)=>(<li key={idx}>{o}</li>))}</ul>}
                  <div><i>Answer:</i> {q.answer}</div>
                  <div><small>{q.explanation}</small></div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
