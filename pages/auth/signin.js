import { signIn as SignIntoProvider } from 'next-auth/react';
import { getProviders } from 'next-auth/react';
import Header from '../../components/Header';

function signIn({ providers }) {
  console.log(providers);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-32 px-14 text-center ">
        <img className="w-80" src="/instagram-wordmark.png" alt="" />
        <p className="font-xs italic">
          This is not a REAL app, it is built for educational purposes only
        </p>
        <div className="mt-40 space-y-4">
          <form
            className="flex flex-col items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              SignIntoProvider('demo', { name: e.target.name.value, callbackUrl: '/' });
            }}
          >
            <input name="name" placeholder="Pick a display name" className="border rounded-lg p-2" />
            <button className="p-3 bg-blue-500 rounded-lg text-white">Try the demo</button>
          </form>
          {Object.values(providers).filter((p) => p.id !== 'demo').map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
