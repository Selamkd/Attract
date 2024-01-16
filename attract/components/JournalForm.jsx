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

  const colors = [
    '#6A5ACD',
    '	#3CB371',
    '#8FBC8B',
    '#081438',
    '#B0C4DE',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#900C3F',
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
      }
    } catch (error) {
      console.log('Error submitting journal entry', error.message);
    }
  }
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
