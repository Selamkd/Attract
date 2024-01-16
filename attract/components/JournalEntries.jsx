import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
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
    <div id="entries" className="flex flex-col ">
      <div className="flex flex-row justify-end">
        {/* <FontAwesomeIcon icon={faFeather} /> */}
      </div>
      {journalEntries.map((entry) => {
        return (
          <div key={entry.id} className="p-8 rounded-xl ">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              <h3>{formatDate(entry.created_at)}</h3>
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
              {entry.title}
            </h2>
            <p className="mt-2 text-gray-500">{entry.content}</p>
          </div>
        );
      })}
    </div>
  );
};
export default JournalEntries;
