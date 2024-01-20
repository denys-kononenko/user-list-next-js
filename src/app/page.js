import Link from "next/link";
import { getData } from "@/api";
import { MAIN_API } from "@/consts";

export default async function Home() {
  const users = await getData(MAIN_API);

  return (
    <ul>
      {users.map(user => {
        const { id, name } = user;

        return (
          <li key={id}>
            <Link href={`/users/${id}`} className="hover:text-sky-400">
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}
