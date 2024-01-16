import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';

const JournalForm = ({ onAddEntry }) => {
  //state to store the title, content and time of the journal entry
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  // function to handle the form submission

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('attract')
        .insert([{ title, content, created_at: new Date() }]);
      if (error) throw error;
      if (data) {
        onAddEntry(data[0]);

        setTitle('');
        setContent('');
        setDate('');
      }
    } catch (error) {
      console.log('Error submitting journal entry', error.message);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Journal Entry</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Entry</button>
    </form>
  );
};
export default JournalForm;
