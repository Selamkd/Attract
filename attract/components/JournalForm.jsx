import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import prompts from '../db/prompts.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
const JournalForm = ({ onAddEntry }) => {
  //state to store the title, content and time of the journal entry
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [cardColor, setCardColor] = useState('');
  const [user_id, setUserId] = useState('');

  const colors = [
    '#6495ED',
    '		#BDB76B',
    '#6A5ACD',
    '#483D8B',
    '	#301934',
    '#9F2B68',
    '#E37383',
    '#483248',
    '	#CC5500',
    '#953553',
    '#630330',
    '#E49B0F',
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);

    setPrompt(prompts[randomIndex].prompt);
    setCardColor(getRandomColor());
  };

  useEffect(() => {
    getRandomPrompt();
  }, []);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        const currentUser = session?.user.id;
        setUserId(currentUser);
        setTitle(currentUser?.user_metadata?.title || '');
        setContent(currentUser?.user_metadata?.content || '');
      }
    );
  }, []);

  // function to handle the form submission

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from('attract')
        .insert([{ title, content, created_at: new Date(), user_id }]);
      if (error) throw error;
      if (data) {
        onAddEntry(data[0]);
        handleClearInput();
      }
    } catch (error) {
      console.log('Error submitting journal entry', error.message);
    }
  }
  const handleClearInput = () => {
    if (user_id) {
      alert('Entry added!');
    } else {
      alert('Please log in to add an entry');
    }
    setTimeout(() => {
      setTitle('');
      setContent('');
      window.location.reload();
    }, 2000);
  };
  return (
    <div className="flex flex-col  ">
      <div
        className="flex items-center justify-between   text-white text-sm font-bold px-4 py-3"
        style={{ backgroundColor: cardColor }}
      >
        <h3>{prompt}</h3>{' '}
        <FontAwesomeIcon onClick={getRandomPrompt} icon={faRetweet} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-[	#F4C430] overflow-hidden px-8 rounded-xl pb-4 shadow-md h-screen  flex flex-col justify-start mt-5 pt-4"
      >
        <h2 className="text-2xl font-bold mb-6">Add Journal Entry</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600">
            Content:
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
          ></textarea>
        </div>

        <button
          onClick={handleClearInput}
          type="submit"
          className="rounded-lg px-4 py-2 border-2 border-gray-900 hover:bg-gray-900  hover:text-gray-100  text-gray-900 hover:text-[] duration-300"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
};
export default JournalForm;
