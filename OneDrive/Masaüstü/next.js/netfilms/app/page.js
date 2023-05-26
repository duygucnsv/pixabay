import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Link href="/hakkimizda">Hakkimizda</Link>
      <br />
      <Link href="/docs/post-1">Post-1</Link>
      <br />
      <Link href="/docs/post-1/post-2">Post-2</Link>
      <br />
      <Link
        href={{
          pathname: "/hakkimizda",
          query: { name: "queryDeneme", surname: "basarili" },
        }}
      >
        Hakkimizda Obje İle
      </Link>
    </div>
  );
}
