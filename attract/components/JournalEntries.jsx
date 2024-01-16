import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
const JournalEntries = () => {
  // state to store the Journal entries from the database
  const [journalEntries, setJournalEntries] = useState([]);
  // fetch the entries from the table

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const { data, error } = await supabase.from('attract').select('*');
        if (error) throw error;
        setJournalEntries(data);
      } catch (error) {
        console.error('Error fetching journal entries', error);
      }
    };
    fetchEntries();
  }, []);
  // convert the time stamp to a name of the day and date of the month format
  const formatDate = (timestamp) => {
    const customDate = { weekday: 'short', day: 'numeric' };
    const formattedDate = new Date(timestamp).toLocaleDateString(
      'en-US',
      customDate
    );
    return formattedDate.toUpperCase();
  };

  return (
    <div>
      <h1>Journal Entries</h1>
      {journalEntries.map((entry) => {
        return (
          <div key={entry.id}>
            <h3>{formatDate(entry.created_at)}</h3>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default JournalEntries;
