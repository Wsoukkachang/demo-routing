import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const [shareid, setShareid] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/dynamic/${shareid}`);
  };

  // Test change commmit

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/static-page">Static Page</Link></li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Share ID:
          <input
            type="text"
            value={shareid}
            onChange={(e) => setShareid(e.target.value)}
          />
        </label>
        <button type="submit">Go to Dynamic Page</button>
      </form>
    </div>
  );
}
