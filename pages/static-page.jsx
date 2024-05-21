import Link from 'next/link';

export default function StaticPage() {
    return (
      <div>
        <h1>Static Page</h1>
        <p>This is a static page.</p>
        <Link href="/">Go Back to Home</Link>
      </div>
    );
  }