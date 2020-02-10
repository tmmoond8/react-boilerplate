import Sample from '../components/Sample';
import Link from 'next/link';

const Index = () => (
  <div>
    <Sample text="Hello Next.js"/>
    <h3>링크로 갑시다.</h3>
    <ul>
      <li><Link href="/dog">Dog</Link></li>
      <li><Link href="/cat">Cat</Link></li>
    </ul>
  </div>
);

export default Index;
