import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link href="/static-page">Static Page</Link></li>
        <li><Link href="/dynamic/example-shareid">Dynamic Page with shareid</Link></li>
      </ul>
    </div>
  );
}
