'use client';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../utils/supabase.js';
import Link from 'next/link';

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          sessionStorage.setItem('justLoggedIn', 'true'); // Set the flag
          router.push('/home');
        } else {
          router.push('/');
        }
      }
    );
  }, []);
  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (user) {
        router.push('/');
      } else {
        alert(error.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-indigo">Welcome back! </h2>
            <p className="text-xs mt-4 text-indigo">
              If you are already a member, easily log in
            </p>

            <form className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div class="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
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
              <button
                type="submit"
                onClick={handleSignIn}
                className="rounded-lg px-6 py-1 border-2 border-gray-900 hover:bg-gray-900  hover:text-gray-100  text-gray-900 hover:text-[] duration-300"
              >
                Login
              </button>
            </form>

            <Link
              href="/home"
              class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]"
            >
              <p>Just browsing?</p>
            </Link>

            <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p className="mr-1">Don't have an account?</p>
              <Link href="/register">
                <button className="rounded-lg px-7 py-1 border-2 border-gray-900 hover:bg-gray-900  hover:text-gray-100  text-gray-900 hover:text-[] duration-300">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <div class="md:block hidden w-1/2">
            <img
              class="rounded-2xl"
              src="https://images.unsplash.com/photo-1648598884813-7dfd1c2886d9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
