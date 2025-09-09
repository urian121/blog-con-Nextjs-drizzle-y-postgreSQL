import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom mb-4">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src="/next.svg" 
            alt="Logo" 
            width={30} 
            height={30} 
            className="me-2"
          />
          <span className="fw-bold">Blog App</span>
        </Link>
      </div>
    </nav>
  );
}