import { useRouter } from 'next/router';
import Link from 'next/link';

export default function DynamicPage() {
  const router = useRouter();
  const { shareid } = router.query;

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>Share ID: {shareid}</p>
      <Link href="/">Go Back to Home</Link>
    </div>
  );
}