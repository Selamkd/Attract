import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
const JournalEntries = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user;
      const newUserId = currentUser?.id || '';
      if (newUserId) {
        console.log(' here');
      }
      setUserId(newUserId);
    });
  }, []);
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        if (!userId) {
          console.log('User ID is empty. Skipping fetch.');
          return;
        }

        const { data, error } = await supabase
          .from('attract')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setJournalEntries(data);
      } catch (error) {
        console.error('Error fetching journal entries', error);
      }
    };

    fetchEntries();
  }, [userId]);
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
