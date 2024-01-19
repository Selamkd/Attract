'use client';
import uuuid from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../utils/supabase.js';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import router from 'next/router';
import logo from '../public/Attract-logo.png';
import Image from 'next/image';
export default function Register() {
  const userId = uuidv4();
  useEffect(() => {
    document.body.classList.add('disable-scroll');

    return () => {
      document.body.classList.remove('disable-scroll');
    };
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,

        data: {
          username: formData.username,
        },
      });

      if (error) throw error;

      const { data: userProfileData, error: userProfileError } = await supabase
        .from('user_profiles')
        .upsert([
          {
            user_id: userId,
            username: formData.username,
            email: formData.email,
          },
        ]);

      if (userProfileError) throw userProfileError;

      alert('Check your email for verification link');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <div className="flex items-center mb-3 justify-center">
              <Image className="attract-form" src={logo} alt="Logo" />
            </div>
            <h2 className="font-bold text-2xl text-[#002D74] text-indigo">
              {' '}
              Create an account{' '}
            </h2>
            <p className="text-xs mt-4 text-indigo">
              Register to start your journey with us
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
              <div class="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <input
                className="p-2 mt-1 rounded-xl border"
                type="username"
                id="username"
                name="username"
                placeholder="User name"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="rounded-lg px-6 py-1 border-2 border-gray-900 hover:bg-gray-900  hover:text-gray-100  text-gray-900 hover:text-[] duration-300"
              >
                Register
              </button>
            </form>
            <Link
              href="/home"
              class=" text-xs border-b border-[#002D74] py-2 text-[#6A5ACD] flex justify-center "
            >
              <p className="mt-4">I'm just browsing</p>
            </Link>
            <div class="mt-6 text-xs flex justify-between items-center text-[#002D74]">
              <p className="mr-1">Already have an account?</p>
              <Link href="/">
                <button className="rounded-lg px-5 py-1 border-2 border-gray-900 hover:bg-gray-900  hover:text-gray-100  text-gray-900 hover:text-[] duration-300">
                  Log in
                </button>
              </Link>
            </div>
          </div>

          <div class="md:block hidden w-1/2">
            <img
              class="rounded-2xl"
              src="https://i.pinimg.com/564x/04/52/5d/04525d022af37b112726bacb7e995257.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
