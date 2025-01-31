import Link from "next/link";
import BestSeller from "../components/featuredproduct";

export default function SuccessPage() {
    return (
      <div className="mt-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600">Payment Successful</h1>
          <p className="mt-4 text-lg">Thank you for your purchase!</p>
          <p className="mt-4 text-lg">You will be redirected to the homepage shortly.</p>
          <Link href="/" className="mt-6 inline-block font-md text-blue-500">
            Go to Homepage
          </Link>
        </div>
        <BestSeller/>
      </div>
    );
  }
  